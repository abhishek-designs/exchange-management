import { useState } from "react";
import {
  IonContent,
  IonCard,
  IonImg,
  IonIcon,
  IonButton,
  IonText,
  IonBadge,
  IonSelect,
  IonSelectOption,
  IonSearchbar,
} from "@ionic/react";
import Header from "../../components/layouts/header/Header";

import calenderLogo from "../../assets/icons/calender.svg";
import { arrowForward } from "ionicons/icons";

import "./Approvals.css";

const Approvals = () => {
  // State for search
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Header />
      <IonContent className="page-contain">
        <IonCard className="container">
          {/* Header */}
          <IonCard className="main-header">
            {/* Stats */}
            <IonCard color="primary-light" className="main-stats">
              <IonCard className="num-stat new-num">
                <IonText color="primary" className="stat-num">
                  204
                </IonText>
                <IonText color="primary">Approvals</IonText>
              </IonCard>
              <IonCard className="divider"></IonCard>
              <IonCard className="num-stat total-num">
                <IonText color="primary" className="stat-num">
                  122
                </IonText>
                <IonText color="primary">Accepted</IonText>
              </IonCard>
              <IonCard className="num-stat total-num">
                <IonText color="primary" className="stat-num">
                  82
                </IonText>
                <IonText color="primary">Rejected</IonText>
              </IonCard>
            </IonCard>
            {/* Timeline */}
            <IonCard color="primary-light" className="timeline">
              <IonCard className="timeline-label">
                <IonImg
                  src={calenderLogo}
                  alt="calender logo"
                  className="calender-logo"
                />
                <IonText color="primary">Approval Initiation Date</IonText>
              </IonCard>
              <IonCard className="timeline-main">
                <IonCard className="dash"></IonCard>
                <IonText color="primary">12/3/2000</IonText>
                <IonIcon icon={arrowForward} color="primary" />
                <IonText color="primary">12/3/2020</IonText>
              </IonCard>
            </IonCard>
            {/* Button */}
            <IonButton color="primary">
              <IonText color="light">My Requests</IonText>
              <IonBadge color="light">3</IonBadge>
            </IonButton>
          </IonCard>

          <IonCard className="section-header">
            <IonSearchbar
              color="primary-light"
              value={search}
              onIonChange={e => setSearch(e.detail.value!)}
              className="search-field"
            />
            <IonCard className="select-contain">
              <IonSelect
                placeholder="Origin"
                interface="popover"
                className="main-select-box"
              >
                <IonSelectOption value="1">Origin 1</IonSelectOption>
                <IonSelectOption value="2">Origin 2</IonSelectOption>
              </IonSelect>
              <IonSelect
                placeholder="Urgency"
                interface="popover"
                className="main-select-box"
              >
                <IonSelectOption value="1">Urgent 1</IonSelectOption>
                <IonSelectOption value="2">Urgent 2</IonSelectOption>
              </IonSelect>
              <IonSelect
                placeholder="Notification Type"
                interface="popover"
                className="main-select-box"
              >
                <IonSelectOption value="1">Notification 1</IonSelectOption>
                <IonSelectOption value="2">Notification 2</IonSelectOption>
              </IonSelect>
              <IonSelect
                placeholder="Notification Status"
                interface="popover"
                className="main-select-box"
              >
                <IonSelectOption value="1">Status 1</IonSelectOption>
                <IonSelectOption value="2">Status 2</IonSelectOption>
              </IonSelect>
            </IonCard>
          </IonCard>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Approvals;
