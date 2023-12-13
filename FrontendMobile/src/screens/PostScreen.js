import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput, Alert } from 'react-native';
import axios from 'axios';
import PostCard from '../components/PostCard';

// Define la dirección IP como constante
//const API_BASE_URL = 'http://192.168.193.183:3000';
const API_BASE_URL = process.env.BACKEND_URL;
console.log(API_BASE_URL);

const PostScreen = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchAuthor, setSearchAuthor] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, commentsResponse] = await Promise.all([
          axios.get(`${API_BASE_URL}/posts`),
          axios.get(`${API_BASE_URL}/comments`),
        ]);

        setPosts(postsResponse.data);
        setComments(commentsResponse.data);
        setFilteredPosts(postsResponse.data);
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

  // Función para mostrar un modal de confirmación al intentar eliminar un post
  const showDeleteConfirmation = (postId) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que deseas eliminar este post?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => handleDeletePost(postId),
          style: 'destructive',
        },
      ]
    );
  };

  // Función para eliminar un post
  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`${API_BASE_URL}/posts/${postId}`);
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
      setFilteredPosts(updatedPosts);
    } catch (error) {
      console.error('Error al eliminar post:', error);
    }
  };

  // Función para filtrar posts por autor
  const handleSearchByAuthor = () => {
    const filtered = posts.filter(
      (post) => post.author.toLowerCase().includes(searchAuthor.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <View>
      <TextInput
        placeholder="Buscar por autor"
        value={searchAuthor}
        onChangeText={(text) => setSearchAuthor(text)}
        onSubmitEditing={handleSearchByAuthor}
      />
      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            comments={getCommentsForPost(item.id)}
            onDelete={() => showDeleteConfirmation(item.id)}
          />
        )}
      />
    </View>
  );
};

export default PostScreen;
