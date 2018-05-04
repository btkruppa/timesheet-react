import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { QuestionBankPage } from './question-bank.component';
import { QuestionBank } from '../../model/QuestionBank';
import { fetchQuestionBank } from '../../actions/question-bank.actions';

const mapStateToProps = (state: State, ownProps: any): {bankId: number, questionBank: QuestionBank} => ({
  bankId: parseInt(ownProps.params.id),
  questionBank: state.questionBank.questionBank,
});

const mapDispatchToProps = {
  fetchQuestionBank: fetchQuestionBank
};

export const QuestionBankPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionBankPage);
