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

import { arrowBack, checkmark, arrowForward } from "ionicons/icons";
import totalLogo from "../../assets/icons/total-logo.png";
import calenderLogo from "../../assets/icons/calender.svg";

import approveItem1 from "../../assets/img/items/approve-item-1.png";
import approveItem2 from "../../assets/img/items/approve-item-2.png";
import approveItem3 from "../../assets/img/items/approve-item-3.png";
import approveItem4 from "../../assets/img/items/approve-item-4.png";

import "./InventoryView.css";

const InventoryView = () => {
  const history = useHistory();
  return (
    <>
      <Header />
      <IonContent className="inventory-view-contain">
        <IonCard className="container">
          <IonCard className="top-header">
            <IonButton
              routerDirection="back"
              fill="clear"
              onClick={() => history.goBack()}
            >
              <IonIcon icon={arrowBack} color="primary" />
            </IonButton>
            <IonText color="primary-alt">Inventory/</IonText>
            <IonText color="primary">Item</IonText>
          </IonCard>
          <IonCard className="notif-view-parent">
            {/* Section tab */}
            <IonCard className="main-section custom-card">
              <IonCard className="section-head">
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Name & Type
                  </IonText>
                  <IonText className="stat-name sub-matter">
                    Air Clutch & WPT Clutch
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
                    Purchase Date
                  </IonText>
                  <IonText className="stat-name">12/02/2017</IonText>
                </IonCard>
                {/* <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Origin
                  </IonText>
                  <IonCard className="origin">
                    <IonText className="stat-name">Total</IonText>
                    <IonImg src={totalLogo} alt="total logo" />
                  </IonCard>
                </IonCard> */}
              </IonCard>
              <IonCard className="section-center">
                <IonImg src={approveItem1} alt="item" className="item-img" />
                <IonImg src={approveItem2} alt="item" className="item-img" />
                <IonImg src={approveItem3} alt="item" className="item-img" />
                <IonImg src={approveItem4} alt="item" className="item-img" />
              </IonCard>
              <IonCard className="section-bottom">
                <IonCard className="item-stat">
                  <IonText className="stat-heading">Mobility</IonText>
                  <IonText className="stat-name">Movable</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Operator
                  </IonText>
                  <IonCard className="origin">
                    <IonText className="stat-name">Total</IonText>
                    <IonImg
                      src={totalLogo}
                      alt="total logo"
                      className="operator-logo"
                    />
                  </IonCard>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading">Original Cost</IonText>
                  <IonText className="stat-name">₦ 200,000 Per Unit</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading">
                    Estimated Salvage Value
                  </IonText>
                  <IonText className="stat-name">₦ 100,000 Per Unit</IonText>
                </IonCard>
              </IonCard>
              <IonCard className="bottom-content">
                <IonText className="stat-heading">Status</IonText>
                <IonCard className="card-status-contain">
                  <IonCard className="status-card">
                    <IonText color="primary">23 Active</IonText>
                  </IonCard>
                  <IonCard className="status-card">
                    <IonText color="danger">10 Surplus</IonText>
                  </IonCard>
                  <IonCard className="status-card">
                    <IonText color="danger">
                      10 Surplus (Pending Approval)
                    </IonText>
                  </IonCard>
                </IonCard>
              </IonCard>
            </IonCard>

            {/* Tracking tab */}
            <IonCard className="tracking-tab custom-card">
              <IonCard color="primary-light" className="timeline">
                <IonCard className="timeline-label">
                  <IonImg
                    src={calenderLogo}
                    alt="calender logo"
                    className="calender-logo"
                  />
                  <IonText color="primary">Purchase Date</IonText>
                </IonCard>
                <IonCard className="timeline-main">
                  <IonCard className="dash"></IonCard>
                  <IonText color="primary">12/3/2000</IonText>
                  <IonIcon icon={arrowForward} color="primary" />
                  <IonText color="primary">12/3/2020</IonText>
                </IonCard>
              </IonCard>
              <IonCard className="tracking-section">
                <IonCard className="track-item app-card track-active">
                  <IonText className="track-time">12/2/2020</IonText>
                  <IonText>10 Items toggled inactive (Surplus)</IonText>
                </IonCard>
                <IonCard className="progress-line"></IonCard>
                <IonCard className="track-item app-card">
                  <IonText className="track-time">12/3/2007</IonText>
                  <IonText>6 Items toggled inactive (Surplus)</IonText>
                </IonCard>
                <IonCard className="progress-line"></IonCard>
                <IonCard className="track-item app-card">
                  <IonText className="track-time">12/3/2005</IonText>
                  <IonText>3 Items toggled inactive (Surplus)</IonText>
                </IonCard>
                <IonCard className="progress-line"></IonCard>
                <IonCard className="track-item app-card">
                  <IonText className="track-time">12/3/2002</IonText>
                  <IonText>10 Items toggled inactive (Surplus)</IonText>
                </IonCard>
                <IonCard className="progress-line"></IonCard>
                <IonCard className="track-item app-card">
                  <IonText className="track-time">12/3/2000</IonText>
                  <IonText>50 Items Procured from Exchange Platform</IonText>
                </IonCard>
              </IonCard>
            </IonCard>
          </IonCard>
        </IonCard>
      </IonContent>
    </>
  );
};

export default InventoryView;
