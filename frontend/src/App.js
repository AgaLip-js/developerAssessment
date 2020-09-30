import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import store from "./redux/store/store";
import GlobalStyle from "./theme/GlobalStyle";
import { paths } from "./_constants/paths";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView";
import NewView from "./views/NewView";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <StyledWrapper>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => <Redirect to={paths.home} />}
            />
            <Route exact path={paths.home} component={HomeView} />
            <Route exact path={paths.new} component={NewView} />
          </Switch>
        </BrowserRouter>
      </StyledWrapper>
    </Provider>
  );
}

export default App;
