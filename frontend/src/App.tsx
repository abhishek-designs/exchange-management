import { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonContent,
  IonList,
  IonItem,
  IonPage,
  IonIcon,
  IonImg,
  IonLabel,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

import appLogo from "./assets/icons/app-logo.svg";
import dashboardIcon from "./assets/icons/dashboard-icon.svg";
import bellIcon from "./assets/icons/bell.svg";
import bagIcon from "./assets/icons/bag.svg";
import approvedMenu from "./assets/icons/approved-menu.svg";
import taskComplete from "./assets/icons/task-complete.svg";
import inventory from "./assets/icons/inventory.svg";
import exchange from "./assets/icons/exchange.svg";
import disposal from "./assets/icons/disposal.svg";
// import Navbar from "./components/layouts/navbar/Navbar";

/* Core CSS required for Ionic components to work properly */
import "./App.css";
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

interface Navlink {
  id: number;
  icon: string;
  title: string;
}

const App: React.FC = () => {
  // State for nav links
  const [navlinks] = useState<Navlink[]>([
    {
      id: 1,
      icon: dashboardIcon,
      title: "Dashboard",
    },
    {
      id: 2,
      icon: bellIcon,
      title: "Notifications",
    },
    {
      id: 3,
      icon: bagIcon,
      title: "Operators",
    },
    {
      id: 4,
      icon: approvedMenu,
      title: "Approvals",
    },
    {
      id: 5,
      icon: taskComplete,
      title: "Tasks",
    },
    {
      id: 6,
      icon: inventory,
      title: "Inventory",
    },
    {
      id: 7,
      icon: exchange,
      title: "Exchange Platform",
    },
    {
      id: 8,
      icon: disposal,
      title: "Disposal",
    },
  ]);

  return (
    <>
      <IonMenu side="start" contentId="main-content" type="overlay">
        <IonHeader>
          <IonToolbar color="primary">
            <IonMenuButton slot="start" color="primary">
              <IonIcon icon={arrowBack} color="light" />
            </IonMenuButton>
            <IonImg src={appLogo} className="app-logo" />
          </IonToolbar>
        </IonHeader>
        <IonContent color="primary">
          <IonList lines="none" class="ion-no-padding">
            {navlinks.map(link => (
              <IonItem key={link.id} color="primary">
                <IonImg src={link.icon} />
                <IonLabel className="pl-1">{link.title}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonPage>
    </>
  );
};

export default App;
