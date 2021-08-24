import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Page1 from './components/Page1';
import Page2 from './components/Page2';
const Page3 = React.lazy(() => import(/* webpackChunkName: "page-3" */ './components/Page3'));

function App() {
  return (
    <Router history={window.history}>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/page-2" component={Page2} />
        <Suspense fallback={"Loading"}>
          <Route path="/page-3" component={Page3} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
