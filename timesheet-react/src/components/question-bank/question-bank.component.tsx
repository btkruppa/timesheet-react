import * as React from 'react';
import { Link } from 'react-router';
import { QuestionBank } from '../../model/QuestionBank';
import { fetchQuestionBank } from '../../actions/question-bank.actions';

interface Props {
  bankId: number;
  questionBank: QuestionBank;
  fetchQuestionBank: (id: number) => (dispatch: any) => void;
}

export class  QuestionBankPage extends React.Component<Props,{}> {
  public componentDidMount() {
    console.log('question bank page did mount')
    this.props.fetchQuestionBank(0);
  }

  public render() {
    return (
      <div>
      {
        this.props.questionBank ? (
          <table>
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              { 
                this.props.questionBank.questions.map((question) => 
                  <tr key={question.id}>
                    <td>{question.question}</td>
                    <td>{question.answer}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        )
        : (
          <div> No question bank loaded</div>
        )
      }
      </div>
    );
  }
};
