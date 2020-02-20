import React from 'react';
import {

  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default function WaterScreen() {
  return (
    <View style={styles.bottom}>
      <Text>
	  0 oz
      </Text>
      <Button
	title="Press me"
	onPress={() => OzDrank += 8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
	bottom: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 36
	}
});
