// src/components/PostCard.js

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const PostCard = ({ post, comments }) => {
  return (
    <Card>
      <Card.Cover source={{ uri: post.image }} />
      <Card.Content>
        <Title>{post.title}</Title>
        <Paragraph>Author: {post.author}</Paragraph>
      </Card.Content>
      <View>
        <Text>Comments:</Text>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.body}</Text>}
        />
      </View>
    </Card>
  );
};

export default PostCard;
