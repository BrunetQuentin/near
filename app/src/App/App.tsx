import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

import Chat from './Chat';
import color from './Color';
import Header from './Header';
import Peoples from './Peoples';

const App = () => {
	const { t } = useTranslation();

	return (
		<View style={styles.container}>
			<Text>{t('Welcome to React')}</Text>
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

