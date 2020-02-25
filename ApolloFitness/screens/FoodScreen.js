import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function FoodScreen() {
  return (
    <View style={[{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    }]}
    >
      <View style={[{
        flexDirection: 'column', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'}, 
        styles.elementsContainer
      ]}
      >
        <Text style={[textAlignVertical='auto']}>
          <Text>Name{'\n'}</Text>
          <Text>Calories{'\n'}</Text>
          <Text>Carbohydrates{'\n'}</Text>
          <Text>Protein{'\n'}</Text>
          <Text>Fat{'\n'}</Text>
        </Text>
      </View>

      <View style={[{
        flexDirection: 'column', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'}, 
        styles.elementsContainer
      ]}
      >
        <TextInput 
          style={{height: 40}}
          placeholder="Type the name of the food here."
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput 
          style={{height: 40}}
          placeholder="Type the number of calories here."
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput 
          style={{height: 40}}
          placeholder="Type the number of carbohydrates here."
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput 
          style={{height: 40}}
          placeholder="Type the amount of protein here."
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput 
          style={{height: 40}}
          placeholder="Type the amount of fat here."
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   // intentionally empty for now
});
