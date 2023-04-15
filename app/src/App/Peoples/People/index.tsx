import { Image, StyleSheet, Text, View } from 'react-native';

import { people } from '../../../Interfaces/People';

interface PeopleInterface {
	people: people;
}

const People = ({ people }: PeopleInterface) => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: people.image }} style={styles.image} />
			<Text>{people.pseudo}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'column',
		marginHorizontal: 10,
	},
	image: {
		borderRadius: 25,
		height: 50,
		width: 50,
	},
});

export default People;

