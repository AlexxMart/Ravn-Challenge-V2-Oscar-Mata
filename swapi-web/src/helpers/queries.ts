import {gql} from '@apollo/client';

export const ALL_PEOPLE = gql`
	{
		allPeople {
			people {
				id
				name
				homeworld {
					name
				}
				species {
					name
				}
			}
			pageInfo {
				endCursor
			}
			totalCount
		}
	}
`;
