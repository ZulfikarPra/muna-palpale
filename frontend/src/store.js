import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer } from './reducers/userReducers';
import { articleCreateReducer, getArticlesReducer } from './reducers/articleReducers';

const reducer = combineReducers({
  user: userLoginReducer,
  article: getArticlesReducer,
  createArticle: articleCreateReducer,
});

const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  user: { userInfo: userInfo },
}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
