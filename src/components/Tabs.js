import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import Cards from "./Cards";
import { bbcFetchData, techcrunchFetchData } from "../stores/actions/news";
import { connect } from "react-redux";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    const { getNewsBBC, getNewsCNN } = props;
    getNewsBBC();
    getNewsCNN();
  }, []);

  return (
    <Container>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              BBC News
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Techcrunch News
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            {props.loadingBBC ? (
              <div className="d-flex justify-content-center">
                <h1>Loading ...</h1>
              </div>
            ) : (
              <Cards source={props.payloadBBC} />
            )}

            {props.errBBC && <h3 className="error">{props.errBBC.message}</h3>}
          </TabPane>
          <TabPane tabId="2">
            {props.loadingTechcrunch ? (
              <div className="d-flex justify-content-center">
                <h1>Loading ...</h1>
              </div>
            ) : (
              <Cards source={props.payloadTechcrunch} />
            )}

            {props.errTechcrunch && (
              <h3 className="error">{props.errTechcrunch.message}</h3>
            )}
          </TabPane>
        </TabContent>
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getNewsBBC: () => dispatch(bbcFetchData()),
  getNewsCNN: () => dispatch(techcrunchFetchData())
});

const mapStateToProps = (state) => {
  return {
    payloadBBC: state.bbcNews.payload,
    loadingBBC: state.bbcNews.loading,
    errBBC: state.bbcNews.error,
    payloadTechcrunch: state.techcrunchNews.payload,
    loadingTechcrunch: state.techcrunchNews.loading,
    errTechcrunch: state.techcrunchNews.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
