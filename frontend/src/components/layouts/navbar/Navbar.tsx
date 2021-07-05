import { useState } from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuButton,
  IonIcon,
  IonLabel,
  IonImg,
} from "@ionic/react";
import { menuController } from "@ionic/core";
import "./Navbar.css";

import { arrowBack } from "ionicons/icons";
import appLogo from "../../../assets/icons/app-logo.svg";
import dashboardIcon from "../../../assets/icons/dashboard-icon.svg";
import bellIcon from "../../../assets/icons/bell.svg";
import bagIcon from "../../../assets/icons/bag.svg";
import approvedMenu from "../../../assets/icons/approved-menu.svg";
import taskComplete from "../../../assets/icons/task-complete.svg";
import inventory from "../../../assets/icons/inventory.svg";
import exchange from "../../../assets/icons/exchange.svg";
import disposal from "../../../assets/icons/disposal.svg";

interface Navlink {
  id: number;
  icon: string;
  title: string;
  link: string;
}

const Navbar = () => {
  // State for nav links
  const [navlinks] = useState<Navlink[]>([
    {
      id: 1,
      icon: dashboardIcon,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      icon: bellIcon,
      title: "Notifications",
      link: "/notifications",
    },
    {
      id: 3,
      icon: bagIcon,
      title: "Operators",
      link: "/operators",
    },
    {
      id: 4,
      icon: approvedMenu,
      title: "Approvals",
      link: "/approvals",
    },
    {
      id: 5,
      icon: taskComplete,
      title: "Tasks",
      link: "/tasks",
    },
    {
      id: 6,
      icon: inventory,
      title: "Inventory",
      link: "/inventory",
    },
    {
      id: 7,
      icon: exchange,
      title: "Exchange Platform",
      link: "/exchange_platform",
    },
    {
      id: 8,
      icon: disposal,
      title: "Disposal",
      link: "/inventory",
    },
  ]);

  return (
    <IonMenu side="start" contentId="main-content" type="overlay">
      <IonHeader class="ion-no-border">
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
            <IonItem
              key={link.id}
              color="primary"
              className="menu-link-btn"
              routerLink={link.link}
              onClick={async () => await menuController.toggle()}
            >
              <IonImg src={link.icon} />
              <IonLabel className="pl-1">{link.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Navbar;
