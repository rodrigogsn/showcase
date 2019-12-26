import { IonContent, IonPage } from "@ionic/react";
import { useSpring, animated } from "react-spring/renderprops";
import React, { Component } from "react";

import "./Home.scss";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const Animation = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <Header />
    </animated.div>
  );
};

class Home extends Component {

  render() {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <Animation />
          <Portfolio />
          <Footer />
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
