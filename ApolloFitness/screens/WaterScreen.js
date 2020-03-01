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
		consol.log("Saving Water Error")
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
			consol.log("No Water Data")
		}
	}
	catch (error) {
		//error reciving data
		consol.log("read data error")
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
