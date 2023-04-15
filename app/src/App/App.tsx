import { AST } from 'prettier';
import { StyleSheet, Text, View } from 'react-native';

export const color = {
	primary: '#f7287b',
	secondary: '#c717fc',
};

const App = () => {
	const color: AST = '';

	return (
		<View id='oui' style={styles.container}>
			<Text>Open up App.js to start working on y</Text>
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

