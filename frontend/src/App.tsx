import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";

// Layouts
import Navbar from "./components/layouts/navbar/Navbar";

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

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Navbar />
        <IonPage id="main-content">
          <IonRouterOutlet>
            <Route exact path="/home" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          </IonRouterOutlet>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
