import React from 'react';
import ReactDOM from 'react-dom';

import Signup from './components/Signup';

const App = () => (
  <div className="container">
    <Signup />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
