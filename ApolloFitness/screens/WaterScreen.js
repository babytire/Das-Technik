import React from 'react';
import {

  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

export default class WaterScreen extends React.Component {
    constructor(props) {
	super(props);

	this.state = {
	   ozDrank: 0,
	};
    }
 
	saveWater = (date, water) => {
		alert('entered')
		this.setWaterStorage(date, water)
	}

	getWater = (date) => {
		alert("entered")
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
	    onPress={() => this.saveWater('11/11/11', this.state.ozDrank)}
          />
	  <Button
            title="Show me"
            onPress={() => this.getWater('11/11/11')}
          />

	  <TouchableOpacity onPress = {this.saveWater('11/11/11', '15 Oz')}>
		<Text> Click to Save</Text>
	  </TouchableOpacity>
	  <TouchableOpacity onPress = {this.getWater('11/11/11')}>
                <Text> Click to pull</Text>
          </TouchableOpacity>
	  <TouchableOpacity onPress = {this.removeWaterStorage('11/11/11')}>
                <Text> Click to Remove</Text>
          </TouchableOpacity>
	
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
		alert('entered2')
		let gotWater = await AsyncStorage.getItem(date)
		alert(gotWater)		
		if (gotWater != null) {
			alert(gotWater)
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
