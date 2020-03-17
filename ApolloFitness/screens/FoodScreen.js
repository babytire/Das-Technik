import React, { Component } from "react";
import { View, Button, AsyncStorage} from "react-native";
import InputQuery from "../components/InputQuery";

export default class FoodScreen extends Component {
	constructor(props){
	this.state ={
	Name: 'skip'
	Calories: ''
	Fat: ''
	Carbs: ''
	Protein: ''
		}
	}


  _handlePress() {
     console.log(this.state.Name);
     console.log(this.state.Calories);
     console.log(this.state.Fat);
     console.log(this.state.Carbs);
     console.log(this.state.Protein);
  }
    saveFood = (date, JSON.stringify(this.state)) => {
        this.setFoodStorage(date, JSON.stringify(this.state))
    }
    //Calls getFoodStorage async function
    getFood = (date) => {
        this.getFoodStorage(date)
    }
    //Calls removeFoodStorage async function
    removeFood = (date) => {
        this.removeFoodStorage(date)
    }

  render = () => {
    return (

      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
	<TextInput
	  name="Name"
          style={styles.textInputStyle}
          placeholder="Enter name here"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({Name:text})}
        />
	<TextInput
	  name="Calories"
          style={styles.textInputStyle}
          placeholder="Enter calories here"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({Calories:text})}
        />
	<TextInput
  	  name="Fat"
          style={styles.textInputStyle}
          placeholder="Enter fat here"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({Fat:text})}
        />
	<TextInput
	  name="Carbs"
          style={styles.textInputStyle}
          placeholder="Enter carbohydrates here"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({Carbs:text})}
        />
	<TextInput
	  name="protein"
          style={styles.textInputStyle}
          placeholder="Enter protein here"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({Protein:text})}
        />

	<Button 
	  title="Add Item"
          onPress={() => this._handlePress()}
          style={styles.buttonStyle}>
              Submit
        </Button>







 //       <InputQuery name="Name" placeholder="Enter name here" returnKeyLabel = {"next"}
 //         onChangeText={(text) => this.setState({Name:text})}/>
 //       <InputQuery name="Calories" placeholder="Enter calories here" />
 //       <InputQuery name="Fat" placeholder="Enter fat here" />
  //      <InputQuery name="Carbohydrates" placeholder="Enter carbohydrates here"/>
  //      <InputQuery name="Protein" placeholder="Enter protein here" />

    //    <Button title="Add Item" />
      </View>
    );
  };
//Saves stored Food data
//precondition: Stringified food obj
  setFoodStorage = async (date, Food) => {
    try {
        await AsyncStorage.setItem(date, Food);
    }
    catch (error) {
        //error savind data
        console.log("Saving Food Error")
    }
  };

  //retrieves saved Food data
  getFoodStorage = async (date) => { 
    try {
        let gotFood = await AsyncStorage.getItem(date)
        if (gotFood != null) {
            return gotFood
        }
        else {
            console.log("No Food Data")
        }
    }
    catch (error) {
        //error reciving data
        console.log("read data error")
    }
  };

  //removes saved Food data
  removeFoodStorage = async (date) => {
        try {
                AsyncStorage.removeItem(date)
        }
        catch (error) {
                //error removing data
                console.log("remove data error")
        }
  };
}
