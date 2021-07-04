import { useState, useEffect } from "react";
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
  IonModal,
  CreateAnimation,
  Animation,
  IonIcon,
} from "@ionic/react";
import { useLocation } from "react-router-dom";

import appLogo from "../../../assets/icons/app-logo.svg";
import compLogo from "../../../assets/icons/napims-logo.png";
import userAvatar from "../../../assets/img/user-avatar.png";
import bellIcon from "../../../assets/icons/bell.svg";
import cogIcon from "../../../assets/icons/cog.svg";
import { close } from "ionicons/icons";
import "./Header.css";

const Header = () => {
  // State to control notification modal
  const [notifModal, setNotifModal] = useState<boolean>(false);
  // State for current page
  const [currentPage, setCurrentPage] = useState<string>("");

  const location = useLocation();

  // Function to set current page
  const updateCurrentPage = () => {
    const loc = location.pathname.split("/")[1];
    const finalLoc = loc.charAt(0).toUpperCase() + location.pathname.slice(2);
    setCurrentPage(finalLoc);
  };

  useEffect(() => {
    updateCurrentPage();
  }, [location]);

  return (
    <>
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
                <IonCard color="primary-light" className="page-status">
                  <IonText color="light">{currentPage}</IonText>
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
                  onClick={() => setNotifModal(true)}
                >
                  <IonImg src={bellIcon} alt="bell icon" />
                  <IonBadge color="secondary">9+</IonBadge>
                </IonButton>
                <IonMenuButton menu="settings">
                  <IonImg src={cogIcon} />
                </IonMenuButton>
              </IonCard>
            </IonCard>
          </IonToolbar>
        </IonToolbar>
      </IonHeader>
      {/* Notification modal */}
      <IonModal
        isOpen={notifModal}
        onDidDismiss={() => setNotifModal(false)}
        backdropDismiss
        cssClass="notification-modal"
      >
        <IonCard className="notif-msg">
          {[1, 2, 3, 4, 5, 6, 7].map(num => (
            <IonCard key={num} className="msg primary-alt">
              <IonText color="light">
                Item SN/559039 Approval Letter sent for approval with NAPIMS.
              </IonText>
              <IonCard className="msg-bottom">
                <IonText color="light">05:06 PM 1st-Jan-2021</IonText>
                <IonButton className="close-msg-btn">
                  <IonIcon icon={close} color="light" />
                </IonButton>
              </IonCard>
            </IonCard>
          ))}
          <IonButton className="see-all-btn">
            <IonText color="light">See all</IonText>
          </IonButton>
        </IonCard>
      </IonModal>
    </>
  );
};

export default Header;
