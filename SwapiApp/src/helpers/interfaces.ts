export interface Homeworld {
	name: string;
}

export interface Species {
	name: string;
}

export interface RootObject {
	id: string;
	name: string;
	homeworld: Homeworld;
	species: Species;
	navigation: any;
}

export interface Person {
	id: string;
	name: string;
}

export interface AllPeople {
	people: Person[];
	pageInfo: {
		[key: string]: string;
	};
	totalCount: number;
}

export interface Data {
	allPeople: AllPeople;
	length: number;
}
