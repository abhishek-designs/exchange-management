import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

// Pages
import Dashboard from "./pages/dashboard/Dashboard";
import Operators from "./pages/operators/Operators";
import Notifications from "./pages/notifications/Notifications";
import Approvals from "./pages/approvals/Approvals";
import Tasks from "./pages/tasks/Tasks";
import Inventory from "./pages/inventory/Inventory";
import NotificationView from "./pages/notification-view/NotificationView";
import ApprovalView from "./pages/approval-view/ApprovalView";
import TaskView from "./pages/task-view/TaskView";
import Exchange from "./pages/exchange/Exchange";
import Disposal from "./pages/disposal/Disposal";
import Operator from "./pages/operator/Operator";
import Items from "./pages/items/Items";
import InventoryView from "./pages/inventory-view/InventoryView";

// Layouts
import Navbar from "./components/layouts/navbar/Navbar";
import Settings from "./components/layouts/settings/Settings";

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
        <Settings />
        <IonPage id="main-content">
          <IonRouterOutlet>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/operators" component={Operators} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/approvals" component={Approvals} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/inventory" component={Inventory} />
            <Route
              exact
              path="/notifications/:id"
              component={NotificationView}
            />
            <Route exact path="/approvals/:id" component={ApprovalView} />
            <Route exact path="/tasks/:id" component={TaskView} />
            <Route exact path="/exchange_platform" component={Exchange} />
            <Route exact path="/disposal" component={Disposal} />
            <Route exact path="/operators/:id" component={Operator} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/inventory/:id" component={InventoryView} />
            <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          </IonRouterOutlet>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
