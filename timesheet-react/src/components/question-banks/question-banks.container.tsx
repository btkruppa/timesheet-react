import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { QuestionBanksPage } from './question-banks.component';

const mapStateToProps = (state: State) => ({
  questionBanks: state.questionBank.questionBanks,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export const QuestionBanksPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionBanksPage);
