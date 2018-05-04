import { QuestionBank } from "../model/QuestionBank";
import { questionBankTypes } from "./Types";

export const fetchQuestionBank = (id: number) => (dispatch) => {
  console.log('fetching question bank with id ' + id)
  let questionBank: QuestionBank = {
    id: 1,
    title: 'test bank',
    questions: [
      {
        id: 1,
        question: 'test question 1',
        answer: 'test answer 1'
      },
      {
        id: 2,
        question: 'test question 2',
        answer: 'test answer 2'
      },
      {
        id: 3,
        question: 'test question 3',
        answer: 'test answer 3'
      }
    ]
  };

  dispatch({
    type: questionBankTypes.FETCH_QUESTION_BANK,
    payload: questionBank,
  })
}
