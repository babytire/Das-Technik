import * as Progress from 'react-native-progress';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
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
          <Button
  	          title="Add Glass"
  	          onPress={() => this.setState({ozDrank: this.state.ozDrank + 8})}
            />
          </View>
      </View>
       );
   }
}

const styles = StyleSheet.create({
	button: {
		flex: 0.3,
		justifyContent: 'flex-end',
		marginBottom: 36
	},

  items: {
    flexDirection: 'row',
    alignItems: 'baseline'
    },

  progressBar: {
    transform: [{ rotate: '270deg'}],
  },

  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 64,
  }
});
