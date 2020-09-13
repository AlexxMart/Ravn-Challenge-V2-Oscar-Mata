import React from 'react';

export const DataCell = ({property, value, isVehicle = false}: {property: string, value?: string, isVehicle?: boolean}) => (
	<div className="data-cell">
		<p className={isVehicle ? "vehicle-propety" : ""}>{property}</p>
		<p>{value}</p>
	</div>
);
