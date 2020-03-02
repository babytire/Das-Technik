import React from 'react';
import {

  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
} from 'react-native';

export default class WaterScreen extends React.Component {
    constructor(props) {
	super(props);

	this.state = {
	   ozDrank: 0,
	};
    }
 
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
