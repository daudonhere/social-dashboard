import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USER_POSTS_REQUEST,
    FETCH_USER_POSTS_SUCCESS,
    FETCH_USER_POSTS_FAILURE,
    FETCH_USER_ALBUMS_REQUEST,
    FETCH_USER_ALBUMS_SUCCESS,
    FETCH_USER_ALBUMS_FAILURE,
    FETCH_POST_COMMENTS_REQUEST,
    FETCH_POST_COMMENTS_SUCCESS,
    FETCH_POST_COMMENTS_FAILURE,
    FETCH_ALBUM_PHOTOS_REQUEST,
    FETCH_ALBUM_PHOTOS_SUCCESS,
    FETCH_ALBUM_PHOTOS_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    EDIT_POST_REQUEST,
    EDIT_POST_SUCCESS,
    EDIT_POST_FAILURE,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    EDIT_COMMENT_REQUEST,
    EDIT_COMMENT_SUCCESS,
    EDIT_COMMENT_FAILURE,
    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILURE,
  } from '@/redux/actions/userAction';
  
  const initialState = {
    users: {
      loading: false,
      data: null,
      error: ''
    },
    userPosts: {
      loading: false,
      data: null,
      error: ''
    },
    userAlbums: {
      loading: false,
      data: null,
      error: ''
    },
    postComments: {
      loading: false,
      data: null,
      error: ''
    },
    albumPhotos: {
      loading: false,
      data: null,
      error: ''
    },
    addPost: {
      loading: false,
      result: null,
      error: ''
    },
    editPost: {
      loading: false,
      result: null,
      error: ''
    },
    deletePost: {
      loading: false,
      result: null,
      error: ''
    },
    addComment: {
      loading: false,
      result: null,
      error: ''
    },
    editComment: {
      loading: false,
      result: null,
      error: ''
    },
    deleteComment: {
      loading: false,
      result: null,
      error: ''
    }
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          users: {
            ...state.users,
            loading: true
          }
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          users: {
            loading: false,
            data: action.payload,
            error: ''
          }
        };
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          users: {
            loading: false,
            error: action.payload
          }
        };
      case FETCH_USER_POSTS_REQUEST:
        return {
          ...state,
          userPosts: {
            ...state.userPosts,
            loading: true
          }
        };
      case FETCH_USER_POSTS_SUCCESS:
        return {
          ...state,
          userPosts: {
            loading: false,
            data: action.payload,
            error: ''
          }
        };
      case FETCH_USER_POSTS_FAILURE:
        return {
          ...state,
          userPosts: {
            loading: false,
            error: action.payload
          }
        };
      case FETCH_USER_ALBUMS_REQUEST:
        return {
          ...state,
          userAlbums: {
            ...state.userAlbums,
            loading: true
          }
        };
      case FETCH_USER_ALBUMS_SUCCESS:
        return {
          ...state,
          userAlbums: {
            loading: false,
            data: action.payload,
            error: ''
          }
        };
      case FETCH_USER_ALBUMS_FAILURE:
        return {
          ...state,
          userAlbums: {
            loading: false,
            error: action.payload
          }
        };
      case FETCH_POST_COMMENTS_REQUEST:
        return {
          ...state,
          postComments: {
            ...state.postComments,
            loading: true
          }
        };
      case FETCH_POST_COMMENTS_SUCCESS:
        return {
          ...state,
          postComments: {
            loading: false,
            data: action.payload,
            error: ''
          }
        };
      case FETCH_POST_COMMENTS_FAILURE:
        return {
          ...state,
          postComments: {
            loading: false,
            error: action.payload
          }
        };
      case FETCH_ALBUM_PHOTOS_REQUEST:
        return {
          ...state,
          albumPhotos: {
            ...state.albumPhotos,
            loading: true
          }
        };
      case FETCH_ALBUM_PHOTOS_SUCCESS:
        return {
          ...state,
          albumPhotos: {
            loading: false,
            data: action.payload,
            error: ''
          }
        };
      case FETCH_ALBUM_PHOTOS_FAILURE:
        return {
          ...state,
          albumPhotos: {
            loading: false,
            error: action.payload
          }
        };
      case ADD_POST_REQUEST:
        return {
          ...state,
          addPost: {
            ...state.addPost,
            loading: true
          }
        };
      case ADD_POST_SUCCESS:
        return {
          ...state,
          addPost: {
            loading: false,
            result: action.payload,
            error: ''
          }
        };
      case ADD_POST_FAILURE:
        return {
          ...state,
          addPost: {
            loading: false,
            error: action.payload
          }
        };
      case EDIT_POST_REQUEST:
        return {
          ...state,
          editPost: {
            ...state.editPost,
            loading: true
          }
        };
      case EDIT_POST_SUCCESS:
        return {
          ...state,
          editPost: {
            loading: false,
            result: action.payload,
            error: ''
          }
        };
      case EDIT_POST_FAILURE:
        return {
          ...state,
          editPost: {
            loading: false,
            error: action.payload
          }
        };
      case DELETE_POST_REQUEST:
        return {
          ...state,
          deletePost: {
            ...state.deletePost,
            loading: true
          }
        };
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          deletePost: {
            loading: false,
            result: action.payload,
            error: ''
          }
        };
      case DELETE_POST_FAILURE:
        return {
          ...state,
          deletePost: {
            loading: false,
            error: action.payload
          }
        };
      case ADD_COMMENT_REQUEST:
        return {
          ...state,
          addComment: {
            ...state.addComment,
            loading: true
          }
        };
      case ADD_COMMENT_SUCCESS:
        return {
          ...state,
          addComment: {
            loading: false,
            result: action.payload,
            error: ''
          }
        };
      case ADD_COMMENT_FAILURE:
        return {
          ...state,
          addComment: {
            loading: false,
            error: action.payload
          }
        };
      case EDIT_COMMENT_REQUEST:
        return {
          ...state,
          editComment: {
            ...state.editComment,
            loading: true
          }
        };
      case EDIT_COMMENT_SUCCESS:
        return {
          ...state,
          editComment: {
            loading: false,
            result: action.payload,
            error: ''
          }
        };
      case EDIT_COMMENT_FAILURE:
        return {
          ...state,
          editComment: {
            loading: false,
            error: action.payload
          }
        };
      case DELETE_COMMENT_REQUEST:
        return {
          ...state,
          deleteComment: {
            ...state.deleteComment,
            loading: true
          }
        };
      case DELETE_COMMENT_SUCCESS:
        return {
          ...state,
          deleteComment: {
            loading: false,
            result: action.payload,
            error: ''
          }
        };
      case DELETE_COMMENT_FAILURE:
        return {
          ...state,
          deleteComment: {
            loading: false,
            error: action.payload
          }
        };
      default:
        return state;
    }
  };
  
  export default userReducer;  