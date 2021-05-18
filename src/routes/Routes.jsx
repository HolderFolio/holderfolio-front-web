import React, { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";



const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage/SettingsPage"));
const DefaultCurrenciesPage = lazy(() => import("../pages/SettingsPage/DefaultCurrenciesPage"));
const TermsOfUserPage = lazy(() => import("../pages/SettingsPage/TermsOfUserPage"));
const FeedBackPage = lazy(() => import("../pages/SettingsPage/FeedBackPage"));
const ReportABugPage = lazy(() => import("../pages/SettingsPage/ReportABugPage"));
const PrivacyPolicePage = lazy(() => import("../pages/SettingsPage/PrivacyPolicePage"));
const HelpPage = lazy(() => import("../pages/SettingsPage/HelpPage"));

const Routes = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/default_currencies" component={DefaultCurrenciesPage} />
          <Route exact path="/privacy_police" component={PrivacyPolicePage} />
          <Route exact path="/terms_of_user" component={TermsOfUserPage} />
          <Route exact path="/report_a_bug" component={ReportABugPage} />
          <Route exact path="/feedback" component={FeedBackPage} />
          <Route exact path="/help" component={HelpPage} />
          <Route exact path="/settings" component={SettingsPage} />
    
          <Route exact path="/found" component={NotFoundPage} />
          <Redirect to="/not-found" />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
