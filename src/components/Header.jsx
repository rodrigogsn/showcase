import { IonText } from "@ionic/react";
import React from "react";

import logo from "../assets/img/gomes-logo.png";

const Header = () => {
  return (
    <IonText>
      <img src={logo} alt="Gomes Logo" className="logo" />
      <div className="ion-text-center">
        <h1>
          Agência de<br></br>Desenvolvimento Web
        </h1>
        <h3>Criação de sites, apps e branding</h3>
        <p>
          Estamos preparando um visual novo para nosso site{" "}
          <strong>arrasar</strong> em 2020.
          <br></br>
          Aproveite e dê uma olhada no que temos produzido até agora.
        </p>
      </div>

      <div className="divider"></div>
    </IonText>
  );
};

export default Header;
