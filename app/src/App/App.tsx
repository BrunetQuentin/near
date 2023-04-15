import { StyleSheet, View } from 'react-native';

import Chat from './Chat';
import color from './Color';
import Header from './Header';
import Peoples from './Peoples';

const App = () => {
	return (
		<View style={styles.container}>
			<Header />
			<Peoples />
			<Chat />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: color.primary,
		flex: 1,
		justifyContent: 'center',
	},
});

export default App;

