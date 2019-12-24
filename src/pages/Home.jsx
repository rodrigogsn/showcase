import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import "./Home.scss";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <Header />
        <Portfolio />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
