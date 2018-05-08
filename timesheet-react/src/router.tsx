import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './app';
import { About } from './components';
import { QuestionBanksPageContainer } from './components/question-banks/question-banks.container';
import { QuestionBankPageContainer } from './components/question-bank/question-bank.container';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={LoginComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/question-banks" component={QuestionBanksPageContainer} />
          <Route path="/question-bank/:id" component={QuestionBankPageContainer} />
        </Route>
      </Router>
    </Provider>
  );
}
