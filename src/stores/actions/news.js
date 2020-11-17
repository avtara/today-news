import newsApi from "../../constant/api";
import {
  bbcData,
  covidData,
  indonesiaData,
  lifetyleData,
  noResult,
  techcrunchData,
  vaccineData
} from "../../constant/mockData";

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
    dispatch(bbcFetchDataSuccess(bbcData));
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
    dispatch(techcrunchFetchDataSuccess(techcrunchData));
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
    switch (pathname) {
      case "indonesia":
        dispatch(searchFetchDataSuccess(indonesiaData));
        break;
      case "corona":
        dispatch(searchFetchDataSuccess(covidData));
        break;
      case "covid-19":
        dispatch(searchFetchDataSuccess(covidData));
        break;
      case "lifestyle":
        dispatch(searchFetchDataSuccess(lifetyleData));
        break;
      case "bitcoin":
        dispatch(searchFetchDataSuccess(lifetyleData));
        break;
      case "vaccine":
        dispatch(searchFetchDataSuccess(vaccineData));
        break;
      default:
        dispatch(searchFetchDataSuccess(noResult));
    }
  } catch (e) {
    dispatch(searchHasError(e));
  }
};
