import axios from 'axios';
import {
  USER_ENDPOINT,
  POST_ENDPOINT,
  COMMENT_ENDPOINT,
  ALBUMS_ENDPOINT,
  PHOTO_ENDPOINT,
} from '@/api';

// Actions for fetching user data
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const response = await axios.get(USER_ENDPOINT);
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
      throw error;
    }
  };
};

// Actions for fetching posts of a user
export const FETCH_USER_POSTS_REQUEST = 'FETCH_USER_POSTS_REQUEST';
export const FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS';
export const FETCH_USER_POSTS_FAILURE = 'FETCH_USER_POSTS_FAILURE';

export const fetchUserPosts = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER_POSTS_REQUEST });
    try {
      const response = await axios.get(`${POST_ENDPOINT}?userId=${userId}`);
      dispatch({ type: FETCH_USER_POSTS_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: FETCH_USER_POSTS_FAILURE, payload: error.message });
      throw error;
    }
  };
};

// Actions for fetching albums of a user
export const FETCH_USER_ALBUMS_REQUEST = 'FETCH_USER_ALBUMS_REQUEST';
export const FETCH_USER_ALBUMS_SUCCESS = 'FETCH_USER_ALBUMS_SUCCESS';
export const FETCH_USER_ALBUMS_FAILURE = 'FETCH_USER_ALBUMS_FAILURE';

export const fetchUserAlbums = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER_ALBUMS_REQUEST });
    try {
      const response = await axios.get(`${ALBUMS_ENDPOINT}?userId=${userId}`);
      dispatch({ type: FETCH_USER_ALBUMS_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: FETCH_USER_ALBUMS_FAILURE, payload: error.message });
      throw error;
    }
  };
};

// Actions for fetching comments of a post
export const FETCH_POST_COMMENTS_REQUEST = 'FETCH_POST_COMMENTS_REQUEST';
export const FETCH_POST_COMMENTS_SUCCESS = 'FETCH_POST_COMMENTS_SUCCESS';
export const FETCH_POST_COMMENTS_FAILURE = 'FETCH_POST_COMMENTS_FAILURE';

export const fetchPostComments = (postId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POST_COMMENTS_REQUEST });
    try {
      const response = await axios.get(`${COMMENT_ENDPOINT}?postId=${postId}`);
      dispatch({ type: FETCH_POST_COMMENTS_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: FETCH_POST_COMMENTS_FAILURE, payload: error.message });
      throw error;
    }
  };
};

// Actions for fetching photos from an album
export const FETCH_ALBUM_PHOTOS_REQUEST = 'FETCH_ALBUM_PHOTOS_REQUEST';
export const FETCH_ALBUM_PHOTOS_SUCCESS = 'FETCH_ALBUM_PHOTOS_SUCCESS';
export const FETCH_ALBUM_PHOTOS_FAILURE = 'FETCH_ALBUM_PHOTOS_FAILURE';

export const fetchAlbumPhotos = (albumId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ALBUM_PHOTOS_REQUEST });
    try {
      const response = await axios.get(`${PHOTO_ENDPOINT}?albumId=${albumId}`);
      dispatch({ type: FETCH_ALBUM_PHOTOS_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: FETCH_ALBUM_PHOTOS_FAILURE, payload: error.message });
      throw error;
    }
  };
};

// Actions for CRUD operations on posts
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const addPost = (postData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_POST_REQUEST });
    try {
      const response = await axios.post(POST_ENDPOINT, postData);
      dispatch({ type: ADD_POST_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: ADD_POST_FAILURE, payload: error.message });
      throw error;
    }
  };
};

export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

export const editPost = (postId, updatedData) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_POST_REQUEST });
    try {
      const response = await axios.put(`${POST_ENDPOINT}/${postId}`, updatedData);
      dispatch({ type: EDIT_POST_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: EDIT_POST_FAILURE, payload: error.message });
      throw error;
    }
  };
};

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const deletePost = (postId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_POST_REQUEST });
    try {
      const response = await axios.delete(`${POST_ENDPOINT}/${postId}`);
      dispatch({ type: DELETE_POST_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: DELETE_POST_FAILURE, payload: error.message });
      throw error;
    }
  };
};

// Actions for CRUD operations on comments
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addComment = (commentData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_COMMENT_REQUEST });
    try {
      const response = await axios.post(COMMENT_ENDPOINT, commentData);
      dispatch({ type: ADD_COMMENT_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: ADD_COMMENT_FAILURE, payload: error.message });
      throw error;
    }
  };
};

export const EDIT_COMMENT_REQUEST = 'EDIT_COMMENT_REQUEST';
export const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';
export const EDIT_COMMENT_FAILURE = 'EDIT_COMMENT_FAILURE';

export const editComment = (commentId, updatedData) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_COMMENT_REQUEST });
    try {
      const response = await axios.put(`${COMMENT_ENDPOINT}/${commentId}`, updatedData);
      dispatch({ type: EDIT_COMMENT_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: EDIT_COMMENT_FAILURE, payload: error.message });
      throw error;
    }
  };
};

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';

export const deleteComment = (commentId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_COMMENT_REQUEST });
    try {
      const response = await axios.delete(`${COMMENT_ENDPOINT}/${commentId}`);
      dispatch({ type: DELETE_COMMENT_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: DELETE_COMMENT_FAILURE, payload: error.message });
      throw error;
    }
  };
};