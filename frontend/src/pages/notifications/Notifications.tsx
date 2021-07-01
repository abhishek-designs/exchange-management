import { useState } from "react";
import {
  IonContent,
  IonCard,
  IonText,
  IonImg,
  IonIcon,
  IonSearchbar,
} from "@ionic/react";
import Header from "../../components/layouts/header/Header";

import { arrowForward } from "ionicons/icons";
import calenderLogo from "../../assets/icons/calender.svg";

import "./Notifications.css";

const Notifications = () => {
  // State for the search
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Header />
      <IonContent className="notifications-contain">
        <IonCard className="container">
          {/* Header */}
          <IonCard className="notification-header">
            {/* Stats */}
            <IonCard color="primary-light" className="notification-stats">
              <IonCard className="notif new-notif">
                <IonText color="warning" className="notif-num">
                  32
                </IonText>
                <IonText color="warning">New Notifications</IonText>
              </IonCard>
              <IonCard className="divider"></IonCard>
              <IonCard className="notif total-notif">
                <IonText color="primary" className="notif-num">
                  233
                </IonText>
                <IonText color="primary">Total</IonText>
              </IonCard>
            </IonCard>
            {/* Timeline */}
            <IonCard color="primary-light" className="notification-timeline">
              <IonCard className="timeline-label">
                <IonImg
                  src={calenderLogo}
                  alt="calender logo"
                  className="calender-logo"
                />
                <IonText color="primary">Notifications timeline</IonText>
              </IonCard>
              <IonCard className="timeline-main">
                <IonCard className="dash"></IonCard>
                <IonText color="primary">12/3/2000</IonText>
                <IonIcon icon={arrowForward} color="primary" />
                <IonText color="primary">12/3/2020</IonText>
              </IonCard>
            </IonCard>
          </IonCard>
          {/* Section */}
          <IonCard className="notification-section custom-card">
            <IonCard className="section-header">
              <IonSearchbar
                color="primary-light"
                value={search}
                onIonChange={e => setSearch(e.detail.value!)}
              />
            </IonCard>
          </IonCard>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Notifications;
