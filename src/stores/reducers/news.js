const initialState = {
  payload: [],
  loading: true,
  error: null
};

export function bbcNews(state = initialState, action) {
  switch (action.type) {
    case "BBC_NEWS_HAS_ERRORED":
      return {
        payload: [],
        loading: true,
        error: action.error
      };

    case "BBC_NEWS_IS_LOADING":
      return {
        payload: null,
        loading: true,
        error: null
      };

    case "BBC_NEWS_FETCH_DATA_SUCCESS":
      return {
        payload: action.payload,
        loading: action.loading,
        error: null
      };
    default:
      return state;
  }
}

export function techcrunchNews(state = initialState, action) {
  switch (action.type) {
    case "TECHCRUNCH_NEWS_HAS_ERRORED":
      return {
        payload: [],
        loading: true,
        error: action.error
      };

    case "TECHCRUNCH_NEWS_IS_LOADING":
      return {
        payload: null,
        loading: true,
        error: null
      };

    case "TECHCRUNCH_NEWS_FETCH_DATA_SUCCESS":
      return {
        payload: action.payload,
        loading: action.loading,
        error: null
      };
    default:
      return state;
  }
}

export function searchNews(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_NEWS_HAS_ERRORED":
      return {
        payload: [],
        loading: true,
        error: action.error
      };

    case "SEARCH_NEWS_IS_LOADING":
      return {
        payload: null,
        loading: true,
        error: null
      };

    case "SEARCH_NEWS_FETCH_DATA_SUCCESS":
      return {
        payload: action.payload,
        loading: action.loading,
        error: null
      };
    default:
      return state;
  }
}
