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

import "./TaskView.css";

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
            <IonText color="primary-alt">Task /</IonText>
            <IonText color="primary">Task view</IonText>
          </IonCard>
          <IonCard className="approval-section">
            {/* Section tab */}
            <IonCard className="main-section custom-card">
              <IonCard className="section-head">
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Task
                  </IonText>
                  <IonText className="stat-name sub-matter">
                    Inspection Report
                  </IonText>
                  <IonText className="stat-part">Disposal</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Task No.
                  </IonText>
                  <IonText className="stat-name">TSK006</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Initiation Date
                  </IonText>
                  <IonText className="stat-name">12/03/2017</IonText>
                </IonCard>
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Assigner
                  </IonText>
                  <IonText className="stat-name">Manager Procurement</IonText>
                </IonCard>
              </IonCard>
              <IonCard className="section-center">
                <IonCard className="item-stat">
                  <IonText className="stat-heading" color="primary-alt">
                    Description
                  </IonText>
                  <IonText className="stat-name">
                    Generating Inspection Report for inspection carried out on
                    disposal request.
                  </IonText>
                </IonCard>
              </IonCard>
              <IonCard className="main-footer">
                <IonText className="stat-heading">Task Status</IonText>
                <IonCard className="stat-contain">
                  <IonCard className="progress-contain">
                    <IonText color="primary" className="item-status">
                      In Progress
                    </IonText>
                    <IonIcon icon={sync} color="primary" />
                  </IonCard>

                  <IonButton className="attend-btn">
                    <IonIcon icon={pencilOutline} color="light" />
                    <IonText color="light" className="btn-caption">
                      Update Task Status
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
