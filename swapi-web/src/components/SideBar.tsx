import React from 'react';
import {useQuery} from '@apollo/client';
import { ALL_PEOPLE } from '../helpers/queries';
import { DetailsInterface } from '../helpers/interfaces';

import chevron from '../assets/icons/chevron.svg';
import { LoadingCell } from './LoadingCell';

export const SideBar = ({setSelected}: {setSelected: any}) => {
	const {loading, error, data} = useQuery(ALL_PEOPLE, {
		variables: {
			after: null,
		},
	});

	if (loading || !data) {
		return <div className="people-cell-container"><LoadingCell /></div>
	}

	if (error) {
		return <div className="people-cell-container"><p className="error">Failed to Load Data</p></div>
	}

	const {allPeople} = data;
	const {people} = allPeople;

	return (
			<div className="people-cell-container">
				{people.map((element: DetailsInterface, index: number) => (
					<button key={index} onClick={() => setSelected(element.id)}>
						<div className="cell-title">
							<p className="name">{element.name}</p>
							<p className="sub-details">
								{element.species?.name || 'Human'} from {element.homeworld.name}
							</p>
						</div>
						<img src={chevron} alt="chevron right" />
					</button>
				))}
			</div>
	)
}
