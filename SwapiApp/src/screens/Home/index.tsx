import React from 'react';
import {FlatList} from 'react-native';
import {useQuery} from '@apollo/client';

import {Header} from '../../components/Header';
import {PersonCell} from '../../components/PersonCell';
import {Data} from '../../helpers/interfaces';
import {ALL_PEOPLE} from '../../helpers/queries';
import {LoadingIndicator} from '../../components/LoadingIndicator';
import {ErrorMessage} from '../../components/ErrorMessage';

export const Home: React.FC = ({navigation}) => {
	const {loading, error, data, fetchMore} = useQuery(ALL_PEOPLE, {
		variables: {
			after: null,
		},
	});

	if (loading || !data) {
		return <LoadingIndicator />;
	}

	if (error) {
		return <ErrorMessage />;
	}

	const {allPeople} = data;
	const {people, pageInfo} = allPeople;

	return (
		<FlatList
			data={people}
			ListHeaderComponent={
				<Header name={'People of Star Wars'} navigation={navigation} />
			}
			keyExtractor={(item) => item.id}
			renderItem={({item}) => (
				<PersonCell
					id={item.id}
					name={item.name}
					navigation={navigation}
					homeworld={item.homeworld.name}
					species={item.species?.name}
				/>
			)}
			onEndReached={() =>
				fetchMore({
					variables: {after: pageInfo.endCursor},
					updateQuery: (prevResult: Data, {fetchMoreResult}) => {
						if (
							!fetchMoreResult ||
							prevResult.allPeople.people.length ===
								prevResult.allPeople.totalCount
						) {
							return prevResult;
						}
						fetchMoreResult.allPeople.people = [
							...prevResult.allPeople.people,
							...fetchMoreResult.allPeople.people,
						];
						return fetchMoreResult;
					},
				})
			}
		/>
	);
};
