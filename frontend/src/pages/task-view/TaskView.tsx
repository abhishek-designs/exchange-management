import { useState } from "react";
import Header from "../../components/layouts/header/Header";
import {
  IonContent,
  IonCard,
  IonButton,
  IonIcon,
  IonText,
  IonModal,
  IonLabel,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useHistory } from "react-router";

import { arrowBack, pencilOutline, sync } from "ionicons/icons";

import "./TaskView.css";

const TaskView = () => {
  const history = useHistory();
  // State for the update form modal
  const [openModal, setModal] = useState<boolean>(false);

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

                  <IonButton
                    className="attend-btn"
                    onClick={() => setModal(true)}
                  >
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
      {/* Modal to update the task status */}
      <IonModal
        isOpen={openModal}
        onDidDismiss={() => setModal(false)}
        backdropDismiss
        cssClass="inspection-modal"
      >
        <IonCard className="task-update-form-contain">
          <IonCard className="top-content">
            <IonCard className="modal-top-header">
              <IonIcon
                icon={pencilOutline}
                color="primary"
                className="edit-icon"
              />
              <IonText color="primary">Update Task Status</IonText>
            </IonCard>
            <IonText color="primary" className="modal-header">
              Inspection Report
            </IonText>
          </IonCard>
          <IonCard className="form-contain">
            <IonCard className="form-grp">
              <IonLabel color="primary" className="form-label">
                New Status
              </IonLabel>
              <IonSelect
                className="status-select"
                value="in progress"
                interface="popover"
              >
                <IonSelectOption color="primary-light" value="in progress">
                  In Progress
                </IonSelectOption>
              </IonSelect>
            </IonCard>
            <IonCard className="form-grp">
              <IonLabel color="primary" className="form-label">
                Upload Requirements (.pdf, .docx)
              </IonLabel>
              <IonInput
                type="text"
                className="input-field"
                placeholder="Inspection report"
                required
              ></IonInput>
            </IonCard>
            <IonCard className="form-grp">
              <IonLabel color="primary" className="form-label">
                Date of Completion
              </IonLabel>
              <IonInput
                type="date"
                className="input-field"
                placeholder="dd/mm/yyyy"
                required
              ></IonInput>
            </IonCard>
            <IonCard className="form-grp">
              <IonLabel color="primary" className="form-label">
                Remarks
              </IonLabel>
              <IonTextarea
                className="input-field"
                placeholder="Enter Remarks"
                required
              ></IonTextarea>
            </IonCard>
          </IonCard>
          <IonCard className="btn-grp">
            <IonButton
              color="danger"
              fill="outline"
              className="form-btn"
              onClick={() => setModal(false)}
            >
              <IonText color="danger">Cancel</IonText>
            </IonButton>
            <IonButton color="primary" className="form-btn">
              <IonText color="light">Update Status</IonText>
            </IonButton>
          </IonCard>
        </IonCard>
      </IonModal>
    </>
  );
};

export default TaskView;
