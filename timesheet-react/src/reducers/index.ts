import { combineReducers } from 'redux';
import { QuestionBank } from '../model/QuestionBank';
import { questionBankReducer } from './question-bank.reducer';

export interface QuestionBankState {
  questionBanks: QuestionBank[];
  questionBank: QuestionBank;
}

export interface State {
  questionBank: QuestionBankState;
};

export const state = combineReducers<State>({
  questionBank: questionBankReducer //applies this reducer to this field only
});
