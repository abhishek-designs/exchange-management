import { useEffect } from "react";
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

import appLogo from "../../../assets/icons/app-logo.svg";
import { arrowBack } from "ionicons/icons";
import inventoryIcon from "../../../assets/icons/inventory.svg";

const Settings = () => {
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
          <IonMenuButton slot="start" color="primary" menu="settings">
            <IonIcon icon={arrowBack} color="light" />
          </IonMenuButton>
          <IonImg src={appLogo} className="app-logo" />
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary">
        <IonList lines="none" class="ion-no-padding">
          {[1, 2, 3, 4].map(num => (
            <IonItem key={num} color="primary" className="menu-link-btn">
              <IonImg src={inventoryIcon} />
              <IonLabel className="pl-1">Title</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Settings;
