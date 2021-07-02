import { useEffect, useState } from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonIcon,
  IonImg,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { menuController } from "@ionic/core";

import { arrowForward } from "ionicons/icons";
import usersIcon from "../../../assets/icons/users.svg";
import itemsIcon from "../../../assets/icons/items.svg";
import configIcon from "../../../assets/icons/config.svg";
import bagIcon from "../../../assets/icons/bag.svg";

interface Setting {
  id: number;
  icon: string;
  title: string;
  link: string;
}

const Settings = () => {
  // State for nav links
  const [settings] = useState<Setting[]>([
    {
      id: 1,
      icon: usersIcon,
      title: "User Management",
      link: "/dashboard",
    },
    {
      id: 2,
      icon: itemsIcon,
      title: "Items",
      link: "/notifications",
    },
    {
      id: 3,
      icon: configIcon,
      title: "Configurations",
      link: "/operators",
    },
    {
      id: 4,
      icon: bagIcon,
      title: "Operators",
      link: "/dashboard",
    },
  ]);

  useEffect(() => {
    menuController.enable(true, "settings");
  }, []);

  return (
    <IonMenu
      side="end"
      menuId="settings"
      contentId="main-content"
      type="overlay"
    >
      <IonHeader class="ion-no-border">
        <IonToolbar color="primary">
          <IonMenuButton slot="end" color="primary" menu="settings">
            <IonIcon icon={arrowForward} color="light" />
          </IonMenuButton>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary">
        <IonList lines="none" class="ion-no-padding">
          {settings.map(setting => (
            <IonItem
              key={setting.id}
              color="primary"
              className="menu-link-btn"
              routerLink={setting.link}
              onClick={async () => await menuController.close()}
            >
              <IonImg src={setting.icon} alt={setting.title} />
              <IonLabel className="pl-1">{setting.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Settings;
