import * as React from 'react';
import { Nav } from './components';

export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="">
      <Nav />
      {props.children}
    </div>

  );
}
