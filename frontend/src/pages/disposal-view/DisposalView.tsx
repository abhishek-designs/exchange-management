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

import { arrowBack, checkmark, arrowForward, pencil } from "ionicons/icons";
import totalLogo from "../../assets/icons/total-logo.png";
import shellIcon from "../../assets/icons/shell.svg";
import calenderLogo from "../../assets/icons/calender.svg";

import item1 from "../../assets/img/items/item-1.png";
import item2 from "../../assets/img/items/item-2.png";
import item3 from "../../assets/img/items/item-3.png";

import "./DisposalView.css";

const DisposalView = () => {
  const history = useHistory();
  return (
    <>
      <Header />
      <IonContent className="disposal-view-contain">
        <IonCard className="container">
          <IonCard className="top-header">
            <IonButton
              routerDirection="back"
              fill="clear"
              onClick={() => history.goBack()}
            >
              <IonIcon icon={arrowBack} color="primary" />
            </IonButton>
            <IonText color="primary-alt">Disposal/</IonText>
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
                    Date of Purchase
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
                  <IonText className="stat-heading">
                    Estimated Salvage Value
                  </IonText>
                  <IonText className="stat-name">₦ 100,000 Per Unit</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading">Method of Disposal</IonText>
                  <IonText className="stat-name">Prep for Bidding</IonText>
                </IonCard>
              </IonCard>
              <IonCard className="bottom-content">
                <IonCard className="item-stat">
                  <IonText className="stat-heading">
                    Reasons for Disposal
                  </IonText>
                  <IonText className="stat-name">
                    Item can now be considered as scrap as it is way past its
                    shelf life.
                  </IonText>
                </IonCard>
              </IonCard>
              <IonCard className="very-bottom-content">
                <IonCard className="item-stat-contain">
                  <IonCard className="item-stat operator-contain">
                    <IonText className="stat-heading" color="primary-alt">
                      Operator
                    </IonText>
                    <IonCard className="origin">
                      <IonText className="stat-name">Shell</IonText>
                      <IonImg
                        src={shellIcon}
                        alt="shell logo"
                        className="operator-icon"
                      />
                    </IonCard>
                  </IonCard>
                  <IonCard className="item-stat">
                    <IonText className="stat-heading" color="primary-alt">
                      Status
                    </IonText>
                    <IonCard className="status-card danger-light">
                      <IonText color="danger">Scrap</IonText>
                    </IonCard>
                  </IonCard>
                  <IonCard className="item-stat">
                    <IonText className="stat-heading" color="primary-alt">
                      Disposal Status
                    </IonText>
                    <IonCard>
                      <IonText className="stat-name">
                        Inspection Scheduled (20%)
                      </IonText>
                      <IonIcon icon={checkmark} color="primary" />
                    </IonCard>
                  </IonCard>
                </IonCard>
                <IonButton className="update-disposal-btn">
                  <IonIcon
                    icon={pencil}
                    color="light"
                    className="update-icon"
                  />
                  <IonText color="light">Update disposal request</IonText>
                </IonButton>
              </IonCard>
            </IonCard>

            {/* Tracking tab */}
            <IonCard className="tracking-tab custom-card">
              <IonCard className="app-card primary-light">
                <IonText color="primary">Disposal History</IonText>
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

export default DisposalView;
