import { StyleSheet, View } from 'react-native';

import color from '../Color';

const Chat = () => {
	return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.tertiary,
		flex: 1,
	},
});

export default Chat;
