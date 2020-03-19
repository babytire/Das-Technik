
import React from 'react';
import {
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import WaterAddButton from '../components/WaterAddButton'

export default class WaterScreen extends React.Component {
    constructor(props) {
	     super(props);
    }
 	//Call these functions and not the ones down below when you wish to save, retrieve, or remove water information. Date and Water must be strings!!
	//Calls saveWaterStorage async function
	saveWater = (date, water) => {
		this.setWaterStorage(date, water)
	}
	//Calls getWaterStorage async function
	getWater = (date) => {
		this.getWaterStorage(date)
	}
	//Calls removeWaterStorage async function
	removeWater = (date) => {
		this.removeWaterStorage(date)
	}

    render() {
	     return (
         <WaterAddButton />
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
