import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { people } from '../../Interfaces/People';
import color from '../Color';
import People from './People';

const Peoples = () => {
	const [peoples, setPeoples] = useState<people[]>([
		{
			_id: '1',
			pseudo: 'John Doe',
			image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
		},
		{
			_id: '2',
			pseudo: 'John Doe2',
			image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
		},
	]);

	return (
		<View style={styles.container}>
			<FlatList<people>
				data={peoples}
				horizontal={true}
				renderItem={(people) => {
					return <People people={people.item} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.secondary,
		width: '100%',
	},
});

export default Peoples;

