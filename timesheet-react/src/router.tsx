import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './app';
import { About } from './components';
import { QuestionBanksPageContainer } from './components/question-banks/question-banks.container';
import { QuestionBankPageContainer } from './components/question-bank/question-bank.container';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={About} />
          <Route path="/about" component={About} />
          <Route path="/question-banks" component={QuestionBanksPageContainer} />
          <Route path="/question-bank/:id" component={QuestionBankPageContainer} />
        </Route>
      </Router>
    </Provider>
  );
}
