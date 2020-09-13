export interface NameObject {
	name: string;
}

export interface RootObject {
	id: string;
	name: string;
	homeworld: NameObject;
	species: NameObject;
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

export interface Cell {
	property: string;
	value?: string;
}
