import { QuestionBank } from '../model/QuestionBank';
import { questionBankTypes } from '../actions/Types';
import { QuestionBankState } from '.';

const initialState: QuestionBankState = {
  questionBank: null,
  questionBanks: []
}

export const questionBankReducer = (state = initialState, action) => {
  switch (action.type) {
    case questionBankTypes.FETCH_QUESTION_BANK:
      console.log('here?')
      return {
        ...state,
        questionBank: action.payload
      };
  }

  return state;
};
