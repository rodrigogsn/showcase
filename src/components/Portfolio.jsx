import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
  IonImg,
  IonGrid,
  IonCol,
  IonRow,
  IonChip
} from "@ionic/react";
import React from "react";

import consitec from "../assets/img/mockup-consitec.png";
import holerity from "../assets/img/mockup-holerity.png";
import inuv from "../assets/img/mockup-inuv.png";
import inw from "../assets/img/mockup-inw.png";
import kosher from "../assets/img/mockup-kosher.png";
import newsource from "../assets/img/mockup-newsource.png";
import noeland from "../assets/img/mockup-noeland.png";
import orik from "../assets/img/mockup-orik.png";
import pennacorp from "../assets/img/mockup-pennacorp.png";

const Portfolio = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="12" size-sm="4">
          <IonCard type="button" href="http://newsourceforkliftparts.com/">
            <div className="mockup-container mockup-newsource">
              <IonImg
                src={newsource}
                alt="Foto de New Source Forklift Parts"
                className="mockup"
              ></IonImg>
            </div>
            <IonCardHeader>
              <IonCardSubtitle>Site</IonCardSubtitle>
              <IonCardTitle>New Source Forklift Parts</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonChip color="tertiary">React</IonChip>
              <IonChip color="success">Node</IonChip>
              <IonChip color="danger">API REST</IonChip>
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="12" size-sm="4">
          <IonCard type="button" href="https://inw.org.br/">
            <div className="mockup-container mockup-inw">
              <IonImg
                src={inw}
                alt="Foto de Instituto Nelson Wilians"
                className="mockup"
              ></IonImg>
            </div>
            <IonCardHeader>
              <IonCardSubtitle>Site/Blog</IonCardSubtitle>
              <IonCardTitle>Instituto Nelson Wilians</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonChip color="dark">Wordpress</IonChip>
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="12" size-sm="4">
          <IonCard type="button" href="http://consitec.eng.br/">
            <div className="mockup-container mockup-consitec">
              <IonImg
                src={consitec}
                alt="Foto de Consitec"
                className="mockup"
              ></IonImg>
            </div>
            <IonCardHeader>
              <IonCardSubtitle>Site</IonCardSubtitle>
              <IonCardTitle>Consitec Engenharia e Tecnologia</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonChip color="warning">PHP</IonChip>
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="12" size-sm="4">
          <IonCard type="button" href="https://orik.com.br/">
            <div className="mockup-container mockup-orik">
              <IonImg src={orik} alt="Foto de Orik" className="mockup"></IonImg>
            </div>
            <IonCardHeader>
              <IonCardSubtitle>Sistema Web</IonCardSubtitle>
              <IonCardTitle>Orik</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonChip color="warning">PHP</IonChip>
              <IonChip color="danger">API REST</IonChip>
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="12" size-sm="4">
          <IonCard type="button" href="https://holerity.com/app/">
            <div className="mockup-container mockup-holerity">
              <IonImg
                src={holerity}
                alt="Foto de Holerity"
                className="mockup"
              ></IonImg>
            </div>
            <IonCardHeader>
              <IonCardSubtitle>Sistema Web</IonCardSubtitle>
              <IonCardTitle>Holerity</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonChip color="tertiary">React</IonChip>
              <IonChip color="success">Node</IonChip>
              <IonChip color="success">AdonisJS</IonChip>
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="12" size-sm="4">
          <IonCard
            type="button"
            href="https://play.google.com/store/apps/details?id=com.app.kwb&hl=en"
          >
            <div className="mockup-container mockup-kosher">
              <IonImg
                src={kosher}
                alt="Foto de Kosher Without Borders"
                className="mockup"
              ></IonImg>
            </div>
            <IonCardHeader>
              <IonCardSubtitle>App</IonCardSubtitle>
              <IonCardTitle>Kosher Without Borders</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonChip color="primary">Ionic 4</IonChip>
              <IonChip color="danger">Angular</IonChip>
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="12" size-sm="4">
          <IonCard type="button" href="https://inuv-outsourcing.netlify.com/">
            <div className="mockup-container mockup-inuv">
              <IonImg
                src={inuv}
                alt="Foto de INUV Outsourcing"
                className="mockup"
              ></IonImg>
            </div>
            <IonCardHeader>
              <IonCardSubtitle>Landing Page</IonCardSubtitle>
              <IonCardTitle>INUV Outsourcing</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonChip color="tertiary">React</IonChip>
              <IonChip color="tertiary">Gatsby</IonChip>
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="12" size-sm="4">
          <IonCard type="button" href="https://www.pennacorp.com.br/">
            <div className="mockup-container mockup-pennacorp">
              <IonImg
                src={pennacorp}
                alt="Foto de Pennacorp Sistemas"
                className="mockup"
              ></IonImg>
            </div>
            <IonCardHeader>
              <IonCardSubtitle>Site/Blog</IonCardSubtitle>
              <IonCardTitle>Pennacorp Sistemas</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonChip color="dark">Wordpress</IonChip>
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="12" size-sm="4">
          <IonCard type="button" href="http://noeland.com.br/">
            <div className="mockup-container mockup-noeland">
              <IonImg
                src={noeland}
                alt="Foto de Noeland"
                className="mockup"
              ></IonImg>
            </div>
            <IonCardHeader>
              <IonCardSubtitle>Site</IonCardSubtitle>
              <IonCardTitle>Noeland</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonChip color="dark">Wordpress</IonChip>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Portfolio;
