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

import item1 from "../../assets/img/items/item-1.png";
import item2 from "../../assets/img/items/item-2.png";
import item3 from "../../assets/img/items/item-3.png";

import "./ExchangeView.css";

const ExchangeView = () => {
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
            <IonText color="primary-alt">Exchange Platform/</IonText>
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
                    Purchase Date
                  </IonText>
                  <IonText className="stat-name">12/02/2018</IonText>
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
                <IonImg src={item1} alt="item" className="item-img" />
                <IonImg src={item2} alt="item" className="item-img" />
                <IonImg src={item3} alt="item" className="item-img" />
              </IonCard>
              <IonCard className="section-bottom">
                <IonCard className="item-stat">
                  <IonText className="stat-heading">Original Cost</IonText>
                  <IonText className="stat-name">₦ 200,000 Per Unit</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Mobility
                  </IonText>
                  <IonText className="stat-name">Movable</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading">Status</IonText>
                  <IonCard className="status-card danger-light">
                    <IonText color="danger">Surplus</IonText>
                  </IonCard>
                </IonCard>
              </IonCard>
              <IonCard className="bottom-content">
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Original Cost
                  </IonText>
                  <IonText className="stat-name">₦ 200,000 Per Unit</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Estimated Salvage Value
                  </IonText>
                  <IonText className="stat-name">₦ 100,000 Per Unit</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Method of Disposal
                  </IonText>
                  <IonText className="stat-name">Prep for Bidding</IonText>
                </IonCard>
              </IonCard>
              <IonCard className="very-bottom-content">
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Reasons for Disposal
                  </IonText>
                  <IonText className="stat-name">
                    Item can now be considered as scrap as it is way past its
                    shelf life.
                  </IonText>
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
                  <IonText color="primary">Item History</IonText>
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

export default ExchangeView;
