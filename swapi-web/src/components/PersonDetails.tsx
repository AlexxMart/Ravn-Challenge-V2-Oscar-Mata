import React from 'react';
import {useQuery, gql} from '@apollo/client';

import {NameObject} from '../helpers/interfaces';
import {DataCell} from './DataCell';
import {LoadingCell} from './LoadingCell';
import {NoticeCell} from './NoticeCell';

export const PersonDetails = ({id}: {id: string}) => {
	const GET_CHARACTER = gql`
		{
			person(id: "${id}") {
				eyeColor
				hairColor
				skinColor
				birthYear
				vehicleConnection {
					vehicles {
						name
					}
				}
			}
		}`

	const {loading, error, data} = useQuery(GET_CHARACTER);

	if (id) {
		if (loading || !data) {
			return <LoadingCell />
		}

		if (error) {
			return <NoticeCell />
		}
	}

	return (
		<div className="details-wrapper">
			{data?.person ? (
				<>
					<h2 className="section-header">General Information</h2>
					{Object.keys(data.person).slice(1, -2).map((element: string, index: number) => (
						<DataCell key={index} property={element} value={data.person[element]} />
					))}
					<h2 className="section-header">Vehicles</h2>
					{data.person.vehicleConnection.vehicles.map((element: NameObject, index: number) => (
						<DataCell key={index} property={element.name} isVehicle />
					))}
				</>
			) : null}
		</div>
);
}
