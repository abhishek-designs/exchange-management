import React from "react";
import Header from "../../components/layouts/header/Header";
import { IonImg, IonContent, IonCard, IonText } from "@ionic/react";

import bgLayout from "../../assets/img/layouts/dashboard-layout-1.svg";
import bgLayout2 from "../../assets/img/layouts/dashboard-layout-2.svg";
import inventoryIcon from "../../assets/icons/inventory.svg";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Header />
      <IonContent className="dashboard-contain">
        {/* Background layout */}
        <IonImg src={bgLayout2} className="bg-layout" />
        <IonImg src={bgLayout} className="bg-layout" />
        {/* Background overlay */}
        <IonCard className="bg-overlay">
          <IonCard className="main-dashboard container">
            {[1, 2, 3, 4, 5].map(num => (
              <IonCard key={num} className="custom-card">
                <IonCard className="card-header">
                  <svg
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="status-icon"
                  >
                    <path
                      d="M24.375 0H1.625C1.19402 0 0.780698 0.171205 0.475951 0.475951C0.171205 0.780698 0 1.19402 0 1.625V19.5C0 19.931 0.171205 20.3443 0.475951 20.649C0.780698 20.9538 1.19402 21.125 1.625 21.125H24.375C24.806 21.125 25.2193 20.9538 25.524 20.649C25.8288 20.3443 26 19.931 26 19.5V1.625C26 1.19402 25.8288 0.780698 25.524 0.475951C25.2193 0.171205 24.806 0 24.375 0ZM1.625 19.5V1.625H24.375V19.5H1.625Z"
                      fill="white"
                    />
                    <path
                      d="M4.0625 5.6875H12.1875V17.0625H4.0625V5.6875ZM5.3625 15.7625H10.8875V11.2125H5.3625V15.7625ZM10.8875 6.9875H5.3625V9.9125H10.8875V6.9875Z"
                      fill="white"
                    />
                    <path
                      d="M13.8125 15.4375H21.9375V4.0625H13.8125V15.4375ZM15.1125 5.3625H20.6375V9.9125H15.1125V5.3625ZM20.6375 14.1375H15.1125V11.2125H20.6375V14.1375Z"
                      fill="white"
                    />
                  </svg>

                  <IonText className="card-label">Inventory</IonText>
                </IonCard>
                <IonCard className="card-section">
                  <IonCard color="medium" className="card-slot total-slot">
                    <IonText color="dark" className="num">
                      4.8k
                    </IonText>
                    <IonText color="dark" className="label">
                      Total Items
                    </IonText>
                  </IonCard>
                  <IonCard
                    color="primary-light"
                    className="card-slot active-slot"
                  >
                    <IonText color="primary" className="num">
                      3.6k
                    </IonText>
                    <IonText color="primary" className="label">
                      Items Active
                    </IonText>
                  </IonCard>
                  <IonCard
                    color="warning-light"
                    className="card-slot pending-slot"
                  >
                    <IonText color="warning" className="num">
                      1.2k
                    </IonText>
                    <IonText color="warning" className="label">
                      Status Pending
                    </IonText>
                  </IonCard>
                </IonCard>
              </IonCard>
            ))}
          </IonCard>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Dashboard;
