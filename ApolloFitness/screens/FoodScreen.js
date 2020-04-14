import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import Table, {
  Section,
  BioCell,
  StaticCell,
  TouchableCell
} from "react-native-js-tableview";
import InputQuery from "../components/InputQuery";

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
      entryProt: 0
    };
  }

  _onAddFood = () => {
    this.setState({ totalCal: this.state.totalCal + this.state.entryCal });
    this.setState({ totalFat: this.state.totalFat + this.state.entryFat });
    this.setState({
      totalCarbs: this.state.totalCarbs + this.state.entryCarbs
    });
    this.setState({ totalProt: this.state.totalProt + this.state.entryProt });
  };

  render = () => {
    return (
      <>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <InputQuery name="Name" placeholder="Enter name here" />
          <InputQuery
            name="Calories"
            placeholder="Enter calories here"
            onChangeText={text => this.setState({ entryCal: parseInt(text) })}
          />
          <InputQuery
            name="Fat"
            placeholder="Enter fat here"
            onChangeText={text => this.setState({ entryFat: parseInt(text) })}
          />
          <InputQuery
            name="Carbohydrates"
            placeholder="Enter carbohydrates here"
            onChangeText={text => this.setState({ entryCarbs: parseInt(text) })}
          />
          <InputQuery
            name="Protein"
            placeholder="Enter protein here"
            onChangeText={text => this.setState({ entryProt: parseInt(text) })}
          />
          <Button title="Add Food" onPress={this._onAddFood} />
        </View>

        <Table style={styles.container} accentColor="#4DB6AC" scrollable>
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
        </Table>
      </>
    );
  };
}

const styles = StyleSheet.create({
  // intentionally empty for now
});
