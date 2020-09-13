import React, {useCallback} from 'react';
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

	const RenderPersonCell = useCallback(
		({item}) => (
			<PersonCell
				id={item.id}
				name={item.name}
				navigation={navigation}
				homeworld={item.homeworld.name}
				species={item.species?.name}
			/>
		),
		[navigation],
	);

	if (loading || !data) {
		return <LoadingIndicator />;
	}

	if (error) {
		return <ErrorMessage />;
	}

	const {allPeople} = data;
	const {people, pageInfo, totalCount} = allPeople;

	return (
		<FlatList
			data={people}
			ListHeaderComponent={
				<Header
					isDetails={false}
					name={'People of Star Wars'}
					navigation={navigation}
				/>
			}
			keyExtractor={(item) => item.id}
			renderItem={RenderPersonCell}
			onEndReached={() =>
				fetchMore({
					variables: {after: pageInfo.endCursor},
					updateQuery: (prev: Data, {fetchMoreResult}) => {
						if (!fetchMoreResult || people.length === totalCount) {
							return prev;
						}
						fetchMoreResult.allPeople.people = [
							...prev.allPeople.people,
							...fetchMoreResult.allPeople.people,
						];
						return fetchMoreResult;
					},
				})
			}
		/>
	);
};
