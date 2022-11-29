import "./App.css";
import {Footer, Header, PrivateRoute} from './components';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "react-whatsapp-widget/dist/index.css";

import { DashboardPage, HomePage, HowToOrderPage, LoginPage } from "./pages";
import RefundPolicy from "./components/refund/RefundPolicy";
import ForgetPassword from "./components/Logins/ForgetPassword";

function App() {



  return (
    <>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/how-to-order">
            <HowToOrderPage />
          </Route>
          <Route exact path="/refund-policy">
            <RefundPolicy />
          </Route>
          {/* User interactions */}
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/login/reset">
            <ForgetPassword />
          </Route>
          <PrivateRoute path="/admin">
            <DashboardPage />
          </PrivateRoute>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
