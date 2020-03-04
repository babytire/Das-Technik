import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import WaterAddButton from '../components/WaterAddButton'

export default class WaterScreen extends React.Component {
    constructor(props) {
	     super(props);
    }

    render() {
	     return (
         <WaterAddButton />
       );
     }
}
