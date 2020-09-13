import {gql} from '@apollo/client';

export const ALL_PEOPLE = gql`
	query getAllPeople($after: String) {
		allPeople(first: 5, after: $after) {
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
