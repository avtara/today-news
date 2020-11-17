import React, { useEffect } from "react";
import { Container } from "reactstrap";
import Headers from "../components/Headers";
import SearchList from "../components/SearchList";
import Hero from "../components/Hero";
import { connect } from "react-redux";
import { searchFetchData } from "../stores/actions/news";
import { useLocation } from "react-router-dom";

const Searchpage = (props) => {
  const { payload, loading, err } = props;
  const aw = useLocation().pathname.split("/").pop();
  useEffect(() => {
    const { getSearchNews } = props;
    getSearchNews(aw);
  }, []);
  return (
    <div>
      <Headers />
      <Hero value={aw} />
      <Container>
        <section>
          {loading ? (
            <div className="d-flex justify-content-center">
              <h1>Loading ...</h1>
            </div>
          ) : (
            <SearchList source={payload} />
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
