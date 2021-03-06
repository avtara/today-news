import React, { useEffect } from "react";
import { Container } from "reactstrap";
import Headers from "../components/Headers";
import SearchList from "../components/SearchList";
import Hero from "../components/Hero";
import { connect } from "react-redux";
import { searchFetchData } from "../stores/actions/news";
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";

const Searchpage = (props) => {
  const { payload, loading, err } = props;
  const location = useLocation().pathname.split("/").pop();
  useEffect(() => {
    const { getSearchNews } = props;
    getSearchNews(location);
    document.title = `Search ${location}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Headers />
      <Hero value={location} />
      <Container>
        <section>
          {loading ? (
            <div className="d-flex justify-content-center">
              <Loader type="Puff" color="#f7797d" height={150} width={150} />
            </div>
          ) : (
            <SearchList source={payload.items.articles} />
          )}
          {err && <h3 className="error">{err.message}</h3>}
        </section>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getSearchNews: (location) => dispatch(searchFetchData(location))
});

const mapStateToProps = (state) => {
  return {
    payload: state.searchNews.payload,
    loading: state.searchNews.loading,
    err: state.searchNews.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchpage);
