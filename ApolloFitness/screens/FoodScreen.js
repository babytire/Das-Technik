import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar, Button } from "react-native";
import { Avatar } from "react-native-elements";
import Table, { Section, StaticCell } from "react-native-js-tableview";
import { LinearGradient } from "expo-linear-gradient";

import InputQuery from "../components/InputQuery";
import MoodTracker from "../components/MoodTracker";

const moodOptions = 5;

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

      moods: [0, 0, 0, 0, 0],
      currentMood: 2
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.averageMood = this.averageMood.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  averageMood() {
    let sum = 0;
    const arr = this.state.moods;

    arr.forEach(val => (sum += val));
    const avg = sum / moodOptions;

    const diff = new Array(moodOptions);

    for (let i = 0; i < moodOptions; i++) {
      diff[i] = avg - arr[i];
    }
    let low = diff[0];
    let index = 0;
    for (let j = 1; j < moodOptions; j++) {
      if (diff[j] < low) {
        low = diff[j];
        index = j;
      }
    }

    this.setState({ currentMood: index });
  }

  onAddFood = () => {
    this.setState({ totalCal: this.state.totalCal + this.state.entryCal });
    this.setState({ totalFat: this.state.totalFat + this.state.entryFat });
    this.setState({
      totalCarbs: this.state.totalCarbs + this.state.entryCarbs
    });
    this.setState({ totalProt: this.state.totalProt + this.state.entryProt });

    const arr = this.state.moods;
    arr[this.state.selectedIndex] += 1;
    this.setState({ moods: arr });

    this.averageMood();
  };

  averageMood() {
    let sum = 0;
    const arr = this.state.moods;

    arr.forEach(val => (sum += val));
    const avg = sum / moodOptions;

    const diff = new Array(moodOptions);

    for (let i = 0; i < moodOptions; i++) {
      diff[i] = avg - arr[i];
    }
    let low = diff[0];
    let index = 0;
    for (let j = 1; j < moodOptions; j++) {
      if (diff[j] < low) {
        low = diff[j];
        index = j;
      }
    }

    this.setState({ currentMood: index });
  }

  onAddFood = () => {
    this.setState({ totalCal: this.state.totalCal + this.state.entryCal });
    this.setState({ totalFat: this.state.totalFat + this.state.entryFat });
    this.setState({
      totalCarbs: this.state.totalCarbs + this.state.entryCarbs
    });
    this.setState({ totalProt: this.state.totalProt + this.state.entryProt });

    const arr = this.state.moods;
    arr[this.state.selectedIndex] += 1;
    this.setState({ moods: arr });

    this.averageMood();
  };

  render = () => {
    const buttons = ["😀", "🙂", "😐", "🙁", "😞"];

    return (
      <>
        <LinearGradient
          colors={["#bdc3c7", "#2c3e50"]}
          style={styles.gradient}
        />
        <StatusBar backgroundColor="black" barStyle="dark-content" />

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <InputQuery
            style={{ color: "black" }}
            font={styles.lightFont}
            inputFont={styles.lightFont}
            name="Name"
            placeholder="Enter name here"
          />
          <InputQuery
            style={{ color: "black" }}
            font={styles.lightFont}
            inputFont={styles.lightFont}
            name="Calories"
            placeholder="Enter calories here"
            onChangeText={text => this.setState({ entryCal: parseInt(text) })}
          />
          <InputQuery
            style={{ color: "black" }}
            font={styles.lightFont}
            inputFont={styles.lightFont}
            name="Fat"
            placeholder="Enter fat here"
            onChangeText={text => this.setState({ entryFat: parseInt(text) })}
          />
          <InputQuery
            style={{ color: "black" }}
            font={styles.lightFont}
            inputFont={styles.lightFont}
            name="Carbohydrates"
            placeholder="Enter carbohydrates here"
            onChangeText={text => this.setState({ entryCarbs: parseInt(text) })}
          />
          <InputQuery
            style={{ color: "black" }}
            font={styles.lightFont}
            inputFont={styles.lightFont}
            name="Protein"
            placeholder="Enter protein here"
            onChangeText={text => this.setState({ entryProt: parseInt(text) })}
          />
        </View>
        <View
          style={{
            flex: 0
          }}
        >
          <Button color="black" title="Add Food" onPress={this.onAddFood} />
          <MoodTracker
            style={styles.moodSection}
            containerStyle={{ backgroundColor: "gray" }}
            onPress={this.updateIndex}
          />
        </View>

        <View
          style={{
            flex: 4
          }}
        >
          <Table
            style={styles.container}
            colorPalette={{ background: "tranparent" }}
            scrollable
          >
            <Section header="Food Intake Rundown">
              <StaticCell
                title={`${this.state.totalCal} kcal`}
                subtitle="Calories"
                accessory="details"
              />
              <StaticCell
                title={`${this.state.totalFat}g`}
                subtitle="Fat"
                accessory="details"
              />
              <StaticCell
                title={`${this.state.totalCarbs}g`}
                subtitle="Carbohydrates"
                accessory="details"
              />
              <StaticCell
                title={`${this.state.totalProt}g`}
                subtitle="Protein"
                accessory="details"
              />
            </Section>

            <View
              style={{
                flex: 1,
                alignItems: "center"
              }}
            >
              <Avatar
                size="large"
                rounded
                title={buttons[this.state.currentMood]}
              />
              <Text style={{ fontSize: 20, color: "white" }}>Average Mood</Text>
            </View>
          </Table>
        </View>
      </>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30
  },
  moodSection: {
    flex: 0
  },
  lightFont: {
    color: "black"
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});
