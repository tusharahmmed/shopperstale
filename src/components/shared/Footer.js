import React from "react";
import { MessengerChat } from "react-messenger-chat-plugin";

import { ReactComponent as logo_wp } from "../../img/whatsapp.svg";
import { WhatsAppWidget } from "react-whatsapp-widget";
import { useRouteMatch } from "react-router-dom";

const Footer = () => {

  let match = useRouteMatch('/admin');
  if(match){
    return null;
  }

  return (
    <>
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
    </>
  );
};

export default Footer;
