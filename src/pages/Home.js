import { IonContent, IonPage } from "@ionic/react";
import { useSpring, animated } from "react-spring/renderprops";
import React, { Component } from "react";

import "./Home.scss";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <Header />
          <Portfolio />
          <Footer />
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
