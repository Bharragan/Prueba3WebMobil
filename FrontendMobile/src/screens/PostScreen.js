import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import axios from 'axios';
import PostCard from '../components/PostCard';

// Define la dirección IP como constante
const API_BASE_URL = 'http://192.168.193.183:3000';

const PostScreen = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, commentsResponse] = await Promise.all([
          axios.get(`${API_BASE_URL}/posts`),
          axios.get(`${API_BASE_URL}/comments`),
        ]);

        setPosts(postsResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  // Función para obtener comentarios para un post específico
  const getCommentsForPost = (postId) => {
    return comments.filter((comment) => comment.postId === postId);
  };

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard post={item} comments={getCommentsForPost(item.id)} />
        )}
      />
    </View>
  );
};

export default PostScreen;
