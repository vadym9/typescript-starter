import * as React from "react";
import {
  MemoryRouter, Route, Switch
} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const lazyHome = React.lazy(() => import('../../pages/Home/Home'));
const lazyPosts = React.lazy(() => import('../../pages/Posts/Posts'));

const Routes = () => (
  <MemoryRouter>
    <Navigation />
    <React.Suspense fallback={<div className="loading" />}>
      <Switch>
        <Route path="/" component={lazyHome} exact={true} />
        <Route path="/posts" component={lazyPosts} />
      </Switch>
    </React.Suspense>
  </MemoryRouter>
);

export default Routes;
