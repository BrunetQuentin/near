import { mongoObject } from './mongo';

export interface people extends mongoObject {
	pseudo: string;
	image: string;
}

export interface fullPeople extends people {
	age: number;
	description: string;
	name: string;
}

