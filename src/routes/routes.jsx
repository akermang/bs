import React, {Component} from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import 'react-dates/initialize';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import App from "../app.page.jsx";
import DefaultLayout from "./default/default-layout.page.jsx";
import i18n from "../../i18n";
import HomePage from "../features/pages/Home/home.page.jsx";
import AboutPage from "../features/pages/About/about.page.jsx";
import SearchresultsPage from "../features/pages/searchResults/SearchResults.page.jsx";
import MyShareBoardsPage from "../features/pages/myShareBoards/myShareBoards.page.jsx"
import { ROUTES } from "../common/constants";
import CreateBoardPage from "../features/pages/create-board/create-board.page.jsx";
import BoardPage from "../features/pages/board/board.page.jsx";



class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Router>
              <App>
                <Switch>
                  <DefaultLayout path={ROUTES.home} component={HomePage} />
                  <DefaultLayout path={ROUTES.about} component={AboutPage} />
                  <DefaultLayout path={ROUTES.results} component={SearchresultsPage} />
                  <DefaultLayout path={ROUTES.createBoard} component={CreateBoardPage} />
                  <DefaultLayout path={ROUTES.board} component={BoardPage} />
                  <DefaultLayout path={ROUTES.myShareBoards} component={MyShareBoardsPage} />
                </Switch>
              </App>
            </Router>
          </MuiPickersUtilsProvider>
        </Provider>
      </I18nextProvider>
    );
  };
}; 
  


export default Root;
