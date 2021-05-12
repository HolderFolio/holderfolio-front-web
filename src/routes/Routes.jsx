import React, { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// console.log(HomePage);

// import HomePage from "./pages/HomePage/HomePage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const LoginPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const Routes = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/not-found">
            <NotFoundPage />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
