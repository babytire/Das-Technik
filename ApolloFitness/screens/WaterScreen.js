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
}

const styles = StyleSheet.create({
	bottom: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 36
	}
});
