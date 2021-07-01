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
import Header from "../components/layouts/header/Header";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <IonContent className="ion-padding" slot="fixed">
        <IonGrid slot="fixed">
          <IonRow>{/* <Main /> */}</IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default Home;
