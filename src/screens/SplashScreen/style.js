import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    MainContainer: {
        width: width,
        height: '100%'
    },
});