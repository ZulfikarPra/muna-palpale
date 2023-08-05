import {
    ARTICLE_CREATE_REQUEST,
    ARTICLE_CREATE_SUCCESS,
    ARTICLE_CREATE_FAIL,
    ARTICLE_GET_REQUEST,
    ARTICLE_GET_SUCCESS,
    ARTICLE_GET_FAIL,
} from '../constants/articleConstants';

export const articleCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_CREATE_REQUEST:
      return { loading: true };
    case ARTICLE_CREATE_SUCCESS:
      return { loading: false };
    case ARTICLE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getArticlesReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case ARTICLE_GET_REQUEST:
      return { loading: true };
    case ARTICLE_GET_SUCCESS:
      return { loading: false, articles: action.payload };
    case ARTICLE_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};