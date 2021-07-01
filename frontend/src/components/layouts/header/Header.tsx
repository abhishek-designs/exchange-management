import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonContent,
  IonImg,
  IonCard,
  IonText,
  IonAvatar,
  IonButton,
  IonBadge,
} from "@ionic/react";

import appLogo from "../../../assets/icons/app-logo.svg";
import compLogo from "../../../assets/icons/napims-logo.png";
import userAvatar from "../../../assets/img/user-avatar.png";
import bellIcon from "../../../assets/icons/bell.svg";
import cogIcon from "../../../assets/icons/cog.svg";

import "./Header.css";

const Header = () => {
  return (
    <IonHeader class="ion-no-border">
      <IonToolbar color="primary">
        <IonToolbar className="container" color="primary">
          <IonMenuButton slot="start" color="tertiary" />
          <IonCard className="header-contain">
            <IonCard className="header-left">
              <IonImg src={appLogo} alt="logo for app" className="app-logo" />
              <IonCard className="nav-logo">
                <IonImg
                  src={compLogo}
                  alt="logo for company"
                  className="comp-logo"
                />
                <IonText color="light" className="logo-txt">
                  NAPIMS
                </IonText>
              </IonCard>
            </IonCard>
            <IonCard className="header-right">
              <IonCard className="user-profile nav-item">
                <IonCard className="user-desc">
                  <IonText color="medium" className="admin-mail">
                    admin@napims.com
                  </IonText>
                  <IonText color="light" className="admin-designation">
                    NAPIMS Admin
                  </IonText>
                </IonCard>
                <IonAvatar className="admin-img">
                  <IonImg src={userAvatar} alt="admin avatar" />
                </IonAvatar>
              </IonCard>
              <IonButton
                fill="clear"
                className="header-btn notification-btn nav-item"
              >
                <IonImg src={bellIcon} alt="bell icon" />
                <IonBadge color="secondary">9+</IonBadge>
              </IonButton>
              <IonButton
                fill="clear"
                className="header-btn settings-btn nav-item"
              >
                <IonImg src={cogIcon} alt="cog icon" />
              </IonButton>
            </IonCard>
          </IonCard>
        </IonToolbar>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
