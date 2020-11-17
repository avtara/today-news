import newsApi from "../../constant/api";

export function bbcHasError(err) {
  return {
    type: "BBC_NEWS_HAS_ERRORED",
    error: err
  };
}

export function bbcIsLoading(bool) {
  return {
    type: "BBC_NEWS_IS_LOADING",
    loading: bool
  };
}

export function bbcFetchDataSuccess(items) {
  return {
    type: "BBC_NEWS_FETCH_DATA_SUCCESS",
    payload: {
      items
    },
    loading: false
  };
}

export const bbcFetchData = () => async (dispatch) => {
  try {
    const bbc = await newsApi.get(`top-headlines?sources=bbc-news`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_NEWS_API_KEY}`
      }
    });
    dispatch(bbcFetchDataSuccess(bbc.data.articles));
  } catch (e) {
    dispatch(bbcHasError(e));
  }
};

export function techcrunchHasError(err) {
  return {
    type: "TECHCRUNCH_NEWS_HAS_ERRORED",
    error: err
  };
}

export function techcrunchIsLoading(bool) {
  return {
    type: "TECHCRUNCH_NEWS_IS_LOADING",
    loading: bool
  };
}

export function techcrunchFetchDataSuccess(items) {
  return {
    type: "TECHCRUNCH_NEWS_FETCH_DATA_SUCCESS",
    payload: {
      items
    },
    loading: false
  };
}

export const techcrunchFetchData = () => async (dispatch) => {
  try {
    const techcrunch = await newsApi.get(`top-headlines?sources=techcrunch`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_NEWS_API_KEY}`
      }
    });
    dispatch(techcrunchFetchDataSuccess(techcrunch.data.articles));
  } catch (e) {
    dispatch(techcrunchHasError(e));
  }
};

export function searchHasError(err) {
  return {
    type: "SEARCH_NEWS_HAS_ERRORED",
    error: err
  };
}

export function searchIsLoading(bool) {
  return {
    type: "SEARCH_NEWS_IS_LOADING",
    loading: bool
  };
}

export function searchFetchDataSuccess(items) {
  return {
    type: "SEARCH_NEWS_FETCH_DATA_SUCCESS",
    payload: {
      items
    },
    loading: false
  };
}

export const searchFetchData = (pathname) => async (dispatch) => {
  try {
    const searchRes = await newsApi.get(`everything?q=${pathname}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_NEWS_API_KEY}`
      }
    });
    dispatch(searchFetchDataSuccess(searchRes.data.articles));
  } catch (e) {
    dispatch(searchHasError(e));
  }
};
