import {
  IonContent,
  IonCard,
  IonButton,
  IonIcon,
  IonText,
  IonImg,
} from "@ionic/react";
import Header from "../../components/layouts/header/Header";
import { useHistory } from "react-router";

import { arrowBack, checkmark } from "ionicons/icons";
import totalLogo from "../../assets/icons/total-logo.png";

import item1 from "../../assets/img/items/item-1.png";
import item2 from "../../assets/img/items/item-2.png";
import item3 from "../../assets/img/items/item-3.png";

import "./NotificationView.css";

const NotificationView = () => {
  const history = useHistory();
  return (
    <>
      <Header />
      <IonContent className="notif-view-contain">
        <IonCard className="container">
          <IonCard className="top-header">
            <IonButton
              routerDirection="back"
              fill="clear"
              onClick={() => history.goBack()}
            >
              <IonIcon icon={arrowBack} color="primary" />
            </IonButton>
            <IonText color="primary-alt">Notifications /</IonText>
            <IonText color="primary">Notification view</IonText>
          </IonCard>
          <IonCard className="notif-view-parent">
            {/* Section tab */}
            <IonCard className="main-section custom-card">
              <IonCard className="section-head">
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Subject Matter
                  </IonText>
                  <IonText className="stat-name sub-matter">
                    TCI Tricone drill bits
                  </IonText>
                  <IonText className="stat-part">Spare Part</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Serial No.
                  </IonText>
                  <IonText className="stat-name">SN/8893UB7</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Time
                  </IonText>
                  <IonText className="stat-name">12/02/2020 - 05:00 PM</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Origin
                  </IonText>
                  <IonCard className="origin">
                    <IonText className="stat-name">Total</IonText>
                    <IonImg src={totalLogo} alt="total logo" />
                  </IonCard>
                </IonCard>
              </IonCard>
              <IonCard className="section-center">
                <IonImg src={item1} alt="item" className="item-img" />
                <IonImg src={item2} alt="item" className="item-img" />
                <IonImg src={item3} alt="item" className="item-img" />
              </IonCard>
              <IonCard className="section-bottom">
                <IonCard className="item-stat">
                  <IonText className="stat-heading">Type</IonText>
                  <IonText className="stat-name">
                    Item Request (Exchange)
                  </IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading">Notification</IonText>
                  <IonText className="stat-name">
                    Item <IonText className="item-id">SN/559039</IonText>{" "}
                    Request Letter sent for approval with NAPIMS
                  </IonText>
                </IonCard>
              </IonCard>
              <IonCard className="main-footer">
                <IonText className="stat-heading">Status</IonText>
                <IonCard className="stat-contain">
                  <IonText color="warning" className="item-status">
                    Unattended
                  </IonText>
                  <IonButton className="attend-btn">
                    <IonIcon icon={checkmark} color="light" />
                    <IonText color="light" className="btn-caption">
                      Mark as attended
                    </IonText>
                  </IonButton>
                </IonCard>
              </IonCard>
            </IonCard>

            {/* Tracking tab */}
            <IonCard className="tracking-tab custom-card">
              <IonCard className="app-card tracking-head">
                <IonText>Notification Tracking</IonText>
              </IonCard>
              <IonCard className="tracking-section">
                <IonCard className="track-item app-card track-active">
                  <IonText className="track-time">12/2/2020 - 05:00 PM</IonText>
                  <IonText>Item request</IonText>
                </IonCard>
                <IonCard className="progress-line"></IonCard>
                <IonCard className="track-item app-card">
                  <IonText className="track-time">12/2/2020 - 04:44 PM</IonText>
                  <IonText>Inspection report completed</IonText>
                </IonCard>
                <IonCard className="progress-line"></IonCard>
                <IonCard className="track-item app-card">
                  <IonText className="track-time">10/2/2020 - 04:00 AM</IonText>
                  <IonText>Items Inspected</IonText>
                </IonCard>
                <IonCard className="progress-line"></IonCard>
                <IonCard className="track-item app-card">
                  <IonText className="track-time">09/2/2020 - 04:00 PM</IonText>
                  <IonText>Item Added to exchange platform</IonText>
                </IonCard>
              </IonCard>
            </IonCard>
          </IonCard>
        </IonCard>
      </IonContent>
    </>
  );
};

export default NotificationView;
