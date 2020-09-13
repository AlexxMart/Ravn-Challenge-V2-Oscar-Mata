export interface NameObject {
	name: string;
}

export interface DetailsInterface {
	id: string;
	name: string;
	homeworld: NameObject;
	species: NameObject;
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