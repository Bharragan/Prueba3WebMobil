import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PostCard = ({ post, comments, onDelete }) => {
  const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginVertical: 10,
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    postInfo: {
      flex: 1,
      marginLeft: 12,
    },
    postTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    postAuthor: {
      fontSize: 16,
      color: '#555',
    },
    commentCount: {
      fontSize: 14,
      color: '#777',
      marginTop: 4,
    },
    commentsContainer: {
      marginTop: 8,
    },
    commentText: {
      fontSize: 14,
      color: '#333',
    },
    deleteButton: {
      padding: 8,
      borderRadius: 4,
      backgroundColor: '#FF6262',
    },
    deleteButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    postImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
  });

  return (
    <View style={styles.cardContainer}>
      <Image style={styles.postImage} source={{ uri: post.image }} />
      <View style={styles.postInfo}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postAuthor}>{`Autor: ${post.author}`}</Text>
        <Text style={styles.commentCount}>{`Comentarios: ${comments.length}`}</Text>
        <View style={styles.commentsContainer}>
          {comments.map((comment) => (
            <Text key={comment.id} style={styles.commentText}>{comment.body}</Text>
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostCard;
