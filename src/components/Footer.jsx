import { IonImg, IonText, IonChip, IonAvatar, IonLabel } from "@ionic/react";
import React from "react";

import logoMini from "../assets/img/gomes-logo-mini.png";
import rodrigo from "../assets/img/rodrigo.png";

const Footer = () => {
  return (
    <>
      <IonText>
        <div className="divider"></div>
        <div className="ion-text-center">
          <p>
            A Gomes trabalha com as tecnologias de desenvolvimento mais atuais
            do mercado.<br></br>Descubra como funciona o nosso serviço de
            criação, nossos planos de manutenção e orçamentos.
          </p>
        </div>
        <div className="ion-text-center">
          <IonLabel>Fale com o boss:</IonLabel>
          <div>
            <a href="https://api.whatsapp.com/send?phone=+5511959720246">
              <IonChip color="success">
                <IonAvatar>
                  <img src={rodrigo} alt="Rodrigo Gomes" />
                </IonAvatar>
                <IonLabel>Rodrigo Gomes</IonLabel>
              </IonChip>
            </a>
          </div>
          <div className="ion-text-center">
            <footer>
              <small>
                Gomes Desenvolvimento Web, {new Date().getFullYear()}©
              </small>
            </footer>
          </div>
        </div>
      </IonText>
      <IonImg src={logoMini} alt="Gomes Logo" className="logo-mini"></IonImg>
    </>
  );
};

export default Footer;
