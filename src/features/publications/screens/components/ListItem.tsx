import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import defaultStyles from '../../../../theme/defaultStyles';
import { Photo, Post, User } from '../../../../utility/entities';
import { RootState } from '../../../../utility/store';

const ListItem = ({
  user,
  post,
  photo,
  isFirst,
  isSecond,
  isEven,
}: {
  user: User;
  post: Post;
  photo: Photo;
  isFirst: boolean;
  isSecond: boolean;
  isEven: boolean;
}) => {
  const isTablet = useSelector((state: RootState) => state.deviceInfo.isTablet);
  const styles = defaultStyles(isTablet);

  return (
    <View
      style={[
        styles.innerContainer,
        styles.publication,
        isFirst || (isTablet && isSecond) ? styles.marginFirst : styles.publicationMarginBottom,
        isTablet && isEven ? styles.marginRight : [],
      ]}
    >
      {isTablet ? <Image source={{ uri: photo.thumbnailUrl }} style={styles.photo} /> : <></>}
      <Text style={styles.publicationText}>Author: {user.name}</Text>
      <Text style={styles.publicationText}>Company: {user.company.name}</Text>
      <Text style={styles.publicationText}>Title: {post.title}</Text>
      {isTablet ? <Text style={[styles.publicationText, styles.marginBottom]}>{post.body}</Text> : <></>}
    </View>
  );
};

export default ListItem;
