import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonMenuButton,
  IonGrid,
  IonRow,
} from "@ionic/react";
import Navbar from "../components/layouts/navbar/Navbar";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          {/* <StyledLogo /> */}
          <IonMenuButton slot="start" color="tertiary" />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" slot="fixed">
        <IonGrid slot="fixed">
          <IonRow>{/* <Main /> */}</IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default Home;
