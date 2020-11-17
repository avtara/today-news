import { combineReducers } from "redux";
import { bbcNews, techcrunchNews, searchNews } from "./news";

export default combineReducers({
  bbcNews,
  techcrunchNews,
  searchNews
});
