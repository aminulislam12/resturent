import { combineReducers } from "redux";
import * as ActionType from "../redux/ActionType";
import * as Forms from "./Forms";
import { createForms } from "react-redux-form";

const dishReducer = (
  dishState = { isLoading: false, dishes: [], errMess: null },
  action
) => {
  switch (action.type) {
    case ActionType.DISH_LOADING:
      return {
        ...dishState,
        isLoading: true,
        errMess: null,
        dishes: [],
      };
    case ActionType.LOAD_DISH:
      return {
        ...dishState,
        isLoading: false,
        errMess: null,
        dishes: action.payload,
      };
    case ActionType.FETCH_FAILED:
      return {
        ...dishState,
        isLoading: false,
        errMess: action.payload,
        dishes: [],
      };
    default:
      return dishState;
  }
};

const commentsReducer = (
  commentSate = { isLoading: true, comments: [] },
  action
) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENT:
      return {
        ...commentSate,
        isLoading: false,
        comments: action.payload,
      };
    case ActionType.COMMENTS_LOADNING:
      return {
        ...commentSate,
        isLoading: true,
        comments: [],
      };
    case ActionType.ADD_COMMENT:
      let comment = action.payload;
      //console.log(comment);
      return {
        ...commentSate,
        comments: commentSate.comments.concat(comment),
      };
    default:
      return commentSate;
  }
};
export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentsReducer,
  ...createForms({
    contactForm: Forms.initialContactForm,
    commentForm: Forms.initialCommentForm,
  }),
});
