import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloWord } from '../.';

const App = () => {
  return (
    <div>
      <HelloWord />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
