import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import InputQuery from '../components/InputQuery';

export default class FoodScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      totalCal: 0,
      totalFat: 0,
      totalCarbs: 0,
      totalProt: 0,

      entryCal: 0,
      entryFat: 0,
      entryCarbs: 0,
      entryProt: 0,

      selectedIndex: 2,
      
      moods: [0, 0, 0, 0, 0],
      currentMood: 2,
    }

    this.averageMood = this.averageMood.bind(this)
    this.updateIndex = this.updateIndex.bind(this)
  }

  averageMood() {
    var sum = 0
    var avg = 2
    var arr = this.state.moods
    
    arr.forEach(val => sum += val)
    avg = sum / moodOptions
    console.log(avg)

    var diff = new Array(moodOptions)

    for (var i = 0; i < moodOptions; i++) {
      diff[i] = avg - arr[i]
    }
    var low = diff[0]
    var index = 0
    for (var j = 1; j < moodOptions; j++) {
      if (diff[j] < low) {
        low = diff[j]
        index = j
      }
    }

    this.setState({currentMood: index})
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  _onAddFood = () => {
    this.setState({totalCal: this.state.totalCal + this.state.entryCal})
    this.setState({totalFat: this.state.totalFat + this.state.entryFat})
    this.setState({totalCarbs: this.state.totalCarbs + this.state.entryCarbs})
    this.setState({totalProt: this.state.totalProt + this.state.entryProt})

    var arr = this.state.moods
    arr[this.state.selectedIndex] += 1
    this.setState({moods: arr})

    this.averageMood()
  }

  render = () => {
    const buttons = ['😀', '🤣', '😎', '😂', '😁']
    const { selectedIndex } = this.state

    return (
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <InputQuery name='Name' placeholder="Enter name here"/>
        <InputQuery name='Calories' placeholder="Enter calories here"/>
        <InputQuery name='Fat' placeholder="Enter fat here"/>
        <InputQuery name='Carbohydrates' placeholder="Enter carbohydrates here"/>
        <InputQuery name='Protein' placeholder="Enter protein here"/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
   // intentionally empty for now
});
