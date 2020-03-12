import * as Progress from 'react-native-progress';
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Slider,
 } from 'react-native';

export default class WaterAddButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
       ozDrank: 0,
       sliderState: 8,
    };
  }

    render = () => {
        return (
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <View style={styles.items}>
                  {/*Progress bar is out of 64 oz (8 glasses)
                     until goals are added in a later issue*/}
                  <Progress.Bar
                    style={styles.progressBar}
                    progress={this.state.ozDrank / 64}
                    width={250}
                    height={100}
                  />
                  <Text style={styles.text}>
                    {this.state.ozDrank} oz
                  </Text>
              </View>

              <View style={styles.button}>
              <Slider
                style = {{marginBottom: 10}}
                thumbTintColor = {"blue"}
                minimumTrackTintColor = {"blue"}
                minimumValue = {1}
                maximumValue = {32}
                value = {8}
                step = {1}
                onValueChange={(sliderValue) =>
                  this.setState({sliderState: sliderValue})}
              />
                <Button
                    title={"Add " + this.state.sliderState + " oz"}
                    onPress={() =>
                      this.setState({ozDrank: this.state.ozDrank + this.state.sliderState})}
                  />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    marginTop: 10
  },

  items: {
    flex: 10,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    },

  progressBar: {
    transform: [{ rotate: '270deg'}],
    marginLeft: -30,
  },

  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 48,
    marginTop: 85,
    marginLeft: 40
  }
});
