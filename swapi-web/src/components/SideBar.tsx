import React from 'react';
import {useQuery} from '@apollo/client';
import { ALL_PEOPLE } from '../helpers/queries';
import { Person } from '../helpers/interfaces';

import chevron from '../assets/icons/chevron.svg';

export const SideBar = ({setSelected}: {setSelected: any}) => {
	const {loading, error, data} = useQuery(ALL_PEOPLE, {
		variables: {
			after: null,
		},
	});

	if (loading || !data) {
		return <p>Loading</p>
	}

	if (error) {
		return <p>Error</p>
	}

	const {allPeople} = data;
	const {people} = allPeople;

	return (
			<div className="people-cell-container">
				{people.map((element: Person, index: number) => (
					<button key={index} onClick={() => setSelected(element.id)}>
						<p>{element.name}</p>
						<img src={chevron} alt="chevron right" />
					</button>
				))}
			</div>
	)
}
