import { StyleSheet, View } from 'react-native';

import color from '../Color';

const Header = () => {
	return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.tertiary,
		height: 50,
	},
});

export default Header;

