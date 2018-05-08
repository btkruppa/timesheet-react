import * as React from 'react';
import { Link } from 'react-router';

interface Props {

}

export class  HomeComponent extends React.Component<Props,{}> {
  public componentDidMount() {
    
  }

  public render() {
    return (
      <div>
        Welcome Home!
      </div>
    );
  }
};
