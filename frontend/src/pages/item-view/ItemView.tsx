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

import { arrowBack, pencilOutline, sync } from "ionicons/icons";
import item1 from "../../assets/img/items/approve-item-1.png";
import item2 from "../../assets/img/items/approve-item-2.png";
import item3 from "../../assets/img/items/approve-item-3.png";
import item4 from "../../assets/img/items/approve-item-4.png";
import shellLogo from "../../assets/icons/shell.svg";

import "./ItemView.css";

const ItemView = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <IonContent className="item-view-contain">
        <IonCard className="container">
          <IonCard className="top-header">
            <IonButton
              routerDirection="back"
              fill="clear"
              onClick={() => history.goBack()}
            >
              <IonIcon icon={arrowBack} color="primary" />
            </IonButton>
            <IonText color="primary-alt">Item Settings/</IonText>
            <IonText color="primary">Item</IonText>
          </IonCard>
          <IonCard className="approval-section">
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
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Item No.
                  </IonText>
                  <IonText className="stat-name">IN/8893UB7</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Mobility
                  </IonText>
                  <IonText className="stat-name">Movable</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Type
                  </IonText>
                  <IonText className="stat-name">Spare Part</IonText>
                </IonCard>
              </IonCard>
              <IonCard className="section-center">
                <IonImg src={item1} alt="item" className="item-img" />
                <IonImg src={item2} alt="item" className="item-img" />
                <IonImg src={item3} alt="item" className="item-img" />
                <IonImg src={item4} alt="item" className="item-img" />
              </IonCard>
              <IonCard className="main-footer">
                <IonButton className="edit-item-btn">
                  <IonIcon
                    icon={pencilOutline}
                    color="light"
                    className="edit-icon"
                  />
                  <IonText color="light">Edit Item</IonText>
                </IonButton>
              </IonCard>
            </IonCard>
          </IonCard>
        </IonCard>
      </IonContent>
    </>
  );
};

export default ItemView;
