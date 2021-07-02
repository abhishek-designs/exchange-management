import { useState } from "react";
import {
  IonContent,
  IonCard,
  IonText,
  IonImg,
  IonIcon,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import Header from "../../components/layouts/header/Header";
import AppTable from "../../components/layouts/app-table/AppTable";

import { arrowForward } from "ionicons/icons";
import calenderLogo from "../../assets/icons/calender.svg";
import shellIcon from "../../assets/icons/shell.svg";
import totalIcon from "../../assets/icons/total-logo.png";
import "./Notifications.css";

interface Origin {
  title: string;
  img: string;
}

interface Timestamp {
  date: string;
  time: string;
}

interface Notification {
  id: number;
  msg: string;
  origin: Origin;
  timestamp: Timestamp;
  type: string;
  status: string;
  isAttended: boolean;
}

interface TableHead {
  id: number;
  title: string;
  isSortable: boolean;
}

const Notifications = () => {
  // State for the search
  const [search, setSearch] = useState<string>("");
  const [notifications] = useState<Notification[]>([
    {
      id: 1,
      msg: "Item SN/559039 Request Letter sent for approval with NAPIMS",
      origin: {
        title: "Shell",
        img: shellIcon,
      },
      timestamp: {
        date: "12/02/2020",
        time: "05:00 PM",
      },
      type: "Item Request (Exchange)",
      status: "Unattended",
      isAttended: false,
    },
    {
      id: 2,
      msg: "Item SN/557739 Disposal request sent for approval with NAPIMS.",
      origin: {
        title: "TOTAL",
        img: totalIcon,
      },
      timestamp: {
        date: "12/03/2017",
        time: "04:05 PM",
      },
      type: "Disposal Request",
      status: "Attended",
      isAttended: true,
    },
  ]);
  const [notifHeaders] = useState<TableHead[]>([
    {
      id: 1,
      title: "Notification",
      isSortable: false,
    },
    {
      id: 2,
      title: "Origin",
      isSortable: false,
    },
    {
      id: 3,
      title: "Time",
      isSortable: true,
    },
    {
      id: 4,
      title: "Type",
      isSortable: false,
    },
    {
      id: 5,
      title: "Status",
      isSortable: false,
    },
  ]);

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
          <IonCard className="notification-section">
            {/* Header */}
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
            {/* Main */}
            <IonCard className="section-main">
              <AppTable
                headerRows={notifHeaders}
                dataRows={notifications}
                multiSelect={false}
              />
            </IonCard>
          </IonCard>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Notifications;
