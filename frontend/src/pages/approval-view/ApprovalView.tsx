import Header from "../../components/layouts/header/Header";
import {
  IonContent,
  IonCard,
  IonButton,
  IonIcon,
  IonText,
  IonImg,
} from "@ionic/react";
import { useHistory } from "react-router";

import { arrowBack, pencilOutline } from "ionicons/icons";
import item1 from "../../assets/img/items/approve-item-1.png";
import item2 from "../../assets/img/items/approve-item-2.png";
import item3 from "../../assets/img/items/approve-item-3.png";
import item4 from "../../assets/img/items/approve-item-4.png";
import shellLogo from "../../assets/icons/shell.svg";

import "./ApprovalView.css";

const ApprovalView = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <IonContent className="approval-view-contain">
        <IonCard className="container">
          <IonCard className="top-header">
            <IonButton
              routerDirection="back"
              fill="clear"
              onClick={() => history.goBack()}
            >
              <IonIcon icon={arrowBack} color="primary" />
            </IonButton>
            <IonText color="primary-alt">Approvals /</IonText>
            <IonText color="primary">Approval view</IonText>
          </IonCard>
          <IonCard className="approval-section">
            {/* Section tab */}
            <IonCard className="main-section custom-card">
              <IonCard className="section-head">
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Approval
                  </IonText>
                  <IonText className="stat-name sub-matter">
                    Item Status Update
                  </IonText>
                  <IonText className="stat-part">Surplus</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonCard className="item-stat">
                    <IonText className="stat-heading" color="primary-alt">
                      Applicant
                    </IonText>
                    <IonCard className="origin">
                      <IonText className="stat-name">Shell</IonText>
                      <IonImg src={shellLogo} alt="total logo" />
                    </IonCard>
                  </IonCard>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Initiation Date
                  </IonText>
                  <IonText className="stat-name">12/03/2017</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Item
                  </IonText>
                  <IonText className="stat-name sub-matter">
                    Air Clutch & WPT Clutch
                  </IonText>
                  <IonText className="stat-name stat-part">SN/8733UB7</IonText>
                </IonCard>
              </IonCard>
              <IonCard className="section-center">
                <IonImg src={item1} alt="item" className="item-img" />
                <IonImg src={item2} alt="item" className="item-img" />
                <IonImg src={item3} alt="item" className="item-img" />
                <IonImg src={item4} alt="item" className="item-img" />
              </IonCard>
              <IonCard className="section-bottom">
                <IonCard className="item-stat">
                  <IonText className="stat-heading">Reason/Remark</IonText>
                  <IonText className="stat-name">
                    Too many of this item not in use but in stock.
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
                    <IonIcon icon={pencilOutline} color="light" />
                    <IonText color="light" className="btn-caption">
                      Update Approval Status
                    </IonText>
                  </IonButton>
                </IonCard>
              </IonCard>
            </IonCard>
          </IonCard>
        </IonCard>
      </IonContent>
    </>
  );
};

export default ApprovalView;
