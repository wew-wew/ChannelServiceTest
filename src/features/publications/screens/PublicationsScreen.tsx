import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import defaultStyles from '../../../theme/defaultStyles';
import { RootState, useAppDispatch } from '../../../utility/store';
import Header from '../../../components/Header';
import { getPublications } from '../redux/thunks';
import ListItem from './components/ListItem';
import { User } from '../../../utility/entities';

const PublicationsScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPublications());
  }, []);

  const data = useSelector((state: RootState) => state.publications.data);
  const fetching = useSelector((state: RootState) => state.publications.fetching);
  const isTablet = useSelector((state: RootState) => state.deviceInfo.isTablet);
  const styles = defaultStyles(isTablet);

  const renderItem = ({ item, index }: { item: User; index: number }) => {
    const user = item;
    const post = data.posts.find(it => it.userId === user.id);
    const photo = data.photos.find(it => it.id === user.id);
    const isFirst = index === 0;
    const isSecond = index === 1;
    const isEven = index - 2 * Math.floor(index / 2) === 0;
    return <ListItem user={user} post={post} photo={photo} isFirst={isFirst} isEven={isEven} isSecond={isSecond} />;
  };

  return (
    <View style={styles.mainContainer}>
      <Header logoutButtonVisible={true} />
      <View style={styles.publicationsContent}>
        <FlatList
          data={data.users}
          refreshing={fetching}
          renderItem={renderItem}
          numColumns={isTablet ? 2 : 1}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default PublicationsScreen;
