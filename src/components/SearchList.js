import React from "react";

import ListItem from "./ListItem";

const SearchList = (props) => {
  const { source } = props;
  return (
    <section>
      {source.length !== 0 ? (
        source.map((news) => (
          <ListItem
            key={Math.random()}
            title={news.title}
            publishedAt={news.publishedAt}
            photo={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <h1>What you are looking for does not exist, please search again</h1>
      )}
    </section>
  );
};

export default SearchList;
