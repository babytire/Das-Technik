import React from 'react';
import {

  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

const temp1 = "tacos";
const temp2 = "77";




export default class WaterScreen extends React.Component {
    constructor(props) {
	super(props);

	this.state = {
	   ozDrank: 0,
	};
    }
 
	saveWater = (date, water) => {
		this.setWaterStorage(date, water)
	}

	getWater = (date) => {
		this.getWaterStorage(date)
		
	}

	reomveWater = (date) => {
		this.removeWaterStorage(date)
	}

	//this.setState({ozDrank: this.state.ozDrank + 8})}


    render() {
	return (
    	<View style={styles.bottom}>
      	  <Text>
		{this.state.ozDrank} oz
      	  </Text>
	  <Button
            title="Press me"
            onPress={() => this.setState({ozDrank: this.state.ozDrank + 8})}
          />

          <Button
	    title="Save me"
	    onPress={() => this.saveWater(temp1, temp2)}
          />
	  <Button
            title="Show me"
            onPress={() => this.getWater(temp1)}
          />

	
        </View>
       );
   }
  
  //Saves stored water data
  setWaterStorage = async (date, water) => {
	try {
		await AsyncStorage.setItem(date, water);
	}
	catch (error) {
		//error savind data
		console.log("Saving Water Error")
	}
  };

  //retrieves saved water data	
  getWaterStorage = async (date) => { 
	try {
		let gotWater = await AsyncStorage.getItem(date)
		alert(gotWater)		
		if (gotWater != null) {
			return gotWater
		}
		else {
			console.log("No Water Data")
		}
	}
	catch (error) {
		//error reciving data
		console.log("read data error")
	}
  };

  //removes saved water data  
  removeWaterStorage = async (date) => {
        try {
                AsyncStorage.removeItem(date)
        }
        catch (error) {
                //error removing data
                console.log("remove data error")
        }
  };

}

const styles = StyleSheet.create({
	bottom: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 36
	}
});
