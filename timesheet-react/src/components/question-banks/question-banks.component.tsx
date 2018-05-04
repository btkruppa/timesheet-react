import * as React from 'react';
import { Link } from 'react-router';
import { QuestionBank } from '../../model/QuestionBank';

interface Props {
  questionBanks: QuestionBank[];
}

export class  QuestionBanksPage extends React.Component<Props,{}> {
  public componentDidMount() {
  }

  public render() {
    return (
      <div>
        {this.props.questionBanks.map((bank) => 
          <div key={bank.id}>
            {bank.title}
          </div>
        )}
      </div>
    );
  }
};
