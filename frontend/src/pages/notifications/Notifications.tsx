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
  IonButton,
} from "@ionic/react";
import Header from "../../components/layouts/header/Header";
import AppTable from "../../components/layouts/app-table/AppTable";

import { arrowForward, chevronBack, chevronForward } from "ionicons/icons";
import calenderLogo from "../../assets/icons/calender.svg";
import shellIcon from "../../assets/icons/shell.svg";
import totalIcon from "../../assets/icons/total-logo.png";
import "./Notifications.css";

import { Notification, TableHead } from "../../types";

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
              {/* Table */}
              <IonCard className="main-table notif-table">
                {/* Table header */}
                <IonCard className="table-header">
                  {/* Header row */}
                  <IonCard className="header-row">
                    {/* Notification */}
                    {notifHeaders.map(row => (
                      <IonCard key={row.id} className={`row row-${row.id}`}>
                        <IonText color="primary" className="row-label">
                          {row.title}
                        </IonText>
                        {row.isSortable && (
                          <IonCard className="fas fa-sort"></IonCard>
                        )}
                      </IonCard>
                    ))}
                  </IonCard>
                </IonCard>

                {/* Table data */}
                <IonCard className="table-data">
                  {/* Data row */}
                  {notifications.map(data => (
                    <IonCard
                      key={data.id}
                      className={`data-row data-row-${data.id}`}
                    >
                      {/* Notification */}
                      <IonCard className="row row-1">
                        <IonText color="primary" className="notif-msg">
                          {data.msg}
                        </IonText>
                      </IonCard>
                      {/* Origin */}
                      <IonCard className="row row-2">
                        <IonText color="primary">{data.origin.title}</IonText>
                        <IonImg
                          src={data.origin.img}
                          alt="shell icon"
                          className="origin-img"
                        />
                      </IonCard>
                      {/* Time */}
                      <IonCard className="row row-3">
                        <IonText color="primary" className="notif-date">
                          {data.timestamp.date}
                        </IonText>
                        <IonText color="primary">{data.timestamp.time}</IonText>
                      </IonCard>
                      {/* Type */}
                      <IonCard className="row row-4">
                        <IonText color="primary">{data.type}</IonText>
                      </IonCard>
                      {/* Status */}
                      <IonCard className="row row-5">
                        <IonText
                          color={data.isAttended ? "primary" : "warning"}
                        >
                          {data.status}
                        </IonText>
                        {data.isAttended ? (
                          <IonButton fill="outline" color="primary">
                            <svg
                              width="19"
                              height="13"
                              viewBox="0 0 19 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="bell-icon"
                            >
                              <path
                                d="M18.8464 5.90796C16.8554 2.2273 13.3638 0 9.5 0C5.63619 0 2.13868 2.2273 0.165423 5.90796L0 6.18563L0.153607 6.46922C2.14459 10.1499 5.63619 12.3772 9.5 12.3772C13.3638 12.3772 16.8613 10.1794 18.8464 6.46922L19 6.18563L18.8464 5.90796ZM9.5 11.166C6.17382 11.166 3.1194 9.31095 1.34701 6.18563C3.1194 3.06032 6.17382 1.20522 9.5 1.20522C12.8262 1.20522 15.8451 3.06623 17.6471 6.18563C15.8451 9.31095 12.8203 11.166 9.5 11.166Z"
                                fill="#006600"
                              />
                              <path
                                d="M9.67133 2.1505C8.87028 2.15634 8.08893 2.39945 7.42597 2.8491C6.763 3.29876 6.24816 3.9348 5.94646 4.67689C5.64477 5.41897 5.56975 6.23382 5.7309 7.01852C5.89204 7.80322 6.28211 8.52256 6.85184 9.08569C7.42157 9.64883 8.14541 10.0305 8.93193 10.1825C9.71845 10.3345 10.5324 10.25 11.2709 9.93967C12.0094 9.62936 12.6394 9.10714 13.0813 8.43899C13.5232 7.77083 13.7572 6.9867 13.7537 6.18564C13.7514 5.6524 13.6439 5.12487 13.4373 4.63327C13.2308 4.14167 12.9292 3.69566 12.55 3.32081C12.1707 2.94596 11.7212 2.64963 11.2273 2.4488C10.7333 2.24798 10.2046 2.14661 9.67133 2.1505ZM9.67133 9.07463C9.1055 9.0688 8.55401 8.8959 8.08612 8.57766C7.61823 8.25942 7.2548 7.81001 7.04149 7.2859C6.82817 6.76178 6.77448 6.18632 6.88715 5.63179C6.99983 5.07726 7.27384 4.56839 7.67478 4.16908C8.07572 3.76977 8.58571 3.49784 9.1407 3.38743C9.69568 3.27702 10.2709 3.33306 10.7942 3.54851C11.3174 3.76396 11.7653 4.12922 12.0816 4.5984C12.398 5.06759 12.5686 5.61978 12.5721 6.18564C12.5737 6.56646 12.4997 6.94381 12.3543 7.29581C12.2089 7.6478 11.9951 7.96743 11.7253 8.23617C11.4555 8.5049 11.135 8.7174 10.7824 8.86133C10.4298 9.00526 10.0521 9.07776 9.67133 9.07463Z"
                                fill="#006600"
                              />
                            </svg>
                            <IonText color="primary">View</IonText>
                          </IonButton>
                        ) : (
                          <IonButton fill="outline" color="primary">
                            <svg
                              width="25"
                              height="28"
                              viewBox="0 0 25 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="bell-icon"
                            >
                              <path
                                d="M24.7148 21.8582C23.9058 21.137 23.1975 20.3103 22.6091 19.4002C21.9666 18.1439 21.5816 16.772 21.4765 15.3649V11.2206C21.4821 9.01058 20.6804 6.87456 19.2221 5.2139C17.7638 3.55325 15.7493 2.48227 13.557 2.20218V1.11997C13.557 0.822933 13.4391 0.538065 13.229 0.328031C13.019 0.117996 12.7341 0 12.4371 0C12.14 0 11.8552 0.117996 11.6451 0.328031C11.4351 0.538065 11.3171 0.822933 11.3171 1.11997V2.21896C9.14451 2.51923 7.15434 3.59669 5.71521 5.25177C4.27608 6.90684 3.48551 9.02739 3.48993 11.2206V15.3649C3.38486 16.772 2.99981 18.1439 2.35738 19.4002C1.77926 20.3082 1.08238 21.1348 0.285235 21.8582C0.195748 21.9368 0.124028 22.0336 0.0748468 22.1421C0.0256657 22.2506 0.000150836 22.3683 0 22.4874V23.6284C0 23.8509 0.0883866 24.0642 0.245716 24.2216C0.403045 24.3789 0.616429 24.4673 0.838926 24.4673H24.1611C24.3836 24.4673 24.597 24.3789 24.7543 24.2216C24.9116 24.0642 25 23.8509 25 23.6284V22.4874C24.9998 22.3683 24.9743 22.2506 24.9252 22.1421C24.876 22.0336 24.8043 21.9368 24.7148 21.8582ZM1.74497 22.7894C2.52551 22.0354 3.21275 21.1904 3.79195 20.2727C4.60118 18.7554 5.07335 17.0814 5.17617 15.3649V11.2206C5.1429 10.2374 5.30782 9.25761 5.66111 8.33949C6.0144 7.42136 6.54884 6.58371 7.23259 5.87643C7.91635 5.16914 8.73544 4.60668 9.64109 4.22255C10.5467 3.83841 11.5204 3.64044 12.5042 3.64044C13.4879 3.64044 14.4616 3.83841 15.3673 4.22255C16.273 4.60668 17.092 5.16914 17.7758 5.87643C18.4596 6.58371 18.994 7.42136 19.3473 8.33949C19.7006 9.25761 19.8655 10.2374 19.8322 11.2206V15.3649C19.935 17.0814 20.4072 18.7554 21.2164 20.2727C21.7956 21.1904 22.4829 22.0354 23.2634 22.7894H1.74497Z"
                                fill="white"
                              />
                              <path
                                d="M12.5419 27.2693C13.0703 27.2571 13.5775 27.0584 13.9736 26.7084C14.3697 26.3583 14.6292 25.8795 14.7063 25.3565H10.2935C10.3728 25.8937 10.6445 26.3838 11.0581 26.7356C11.4716 27.0875 11.9989 27.2771 12.5419 27.2693Z"
                                fill="white"
                              />
                            </svg>
                            <IonText color="primary">Attend</IonText>
                          </IonButton>
                        )}
                      </IonCard>
                    </IonCard>
                  ))}
                </IonCard>
                {/* Table footer */}
                <IonCard className="table-footer">
                  <IonCard className="left-footer-content">
                    <IonText color="primary">Items per page</IonText>
                    <IonSelect
                      interface="popover"
                      className="num-option"
                      value="2"
                    >
                      <IonSelectOption value="1">1</IonSelectOption>
                      <IonSelectOption value="2">2</IonSelectOption>
                    </IonSelect>
                    <IonText color="primary" className="pl-1">
                      1-2 of 233 Notifications
                    </IonText>
                  </IonCard>
                  <IonCard className="right-footer-content">
                    <IonText color="primary">1 of 5 Pages</IonText>
                    <IonCard className="pagination-ctrl">
                      <IonButton
                        fill="clear"
                        className="page-btn page-back-btn"
                      >
                        <IonIcon icon={chevronBack} color="primary" />
                      </IonButton>
                      <IonSelect
                        interface="popover"
                        className="num-option"
                        value="1"
                      >
                        <IonSelectOption value="1">1</IonSelectOption>
                        <IonSelectOption value="2">2</IonSelectOption>
                      </IonSelect>
                      <IonButton
                        fill="clear"
                        className="page-btn page-forward-btn"
                      >
                        <IonIcon icon={chevronForward} color="primary" />
                      </IonButton>
                    </IonCard>
                  </IonCard>
                </IonCard>
              </IonCard>
            </IonCard>
          </IonCard>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Notifications;
