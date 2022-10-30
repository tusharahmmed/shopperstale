import "./App.css";
import { ReactComponent as logo_wp } from "./img/whatsapp.svg";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components";

import { MessengerChat } from "react-messenger-chat-plugin";

import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

import { HomePage, HowToOrderPage } from "./pages";
import RefundPolicy from "./components/refund/RefundPolicy";

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
        </Switch>
        <MessengerChat
          pageId="1389373891367342"
          language="en_US"
          themeColor={"#000000"}
          loggedInGreeting={`Hi there! Welcome to our store. Please, ask anything. We're here to help`}
          // loggedOutGreeting="loggedOutGreeting"
          greetingDialogDisplay={"show"}
          debugMode={true}
        />

        <WhatsAppWidget
          companyName="Shoppers' Tale"
          CompanyIcon={logo_wp}
          replyTimeText="Typically replies within an hour"
          phoneNumber="+8801766673390"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
