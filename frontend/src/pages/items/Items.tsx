import { useState } from "react";
import {
  IonContent,
  IonCard,
  IonImg,
  IonIcon,
  IonButton,
  IonText,
  IonBadge,
  IonSelect,
  IonSelectOption,
  IonSearchbar,
  IonCheckbox,
  IonModal,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
} from "@ionic/react";
import Header from "../../components/layouts/header/Header";
import AppTable from "../../components/layouts/app-table/AppTable";

import approveItem1 from "../../assets/img/items/approve-item-1.png";
import exchangeItem1 from "../../assets/img/items/exchange-item-1.png";
import exchangeItem2 from "../../assets/img/items/exchange-item-2.png";
import calenderLogo from "../../assets/icons/calender.svg";
import importData from "../../assets/icons/import-data.svg";
import exportData from "../../assets/icons/export-data.svg";
import {
  arrowForward,
  chevronBack,
  chevronForward,
  addOutline,
  cloudUploadOutline,
} from "ionicons/icons";

import { TableHead, Item as ItemData } from "../../types";

import "./Items.css";

const Items = () => {
  // State for search
  const [search, setSearch] = useState<string>("");
  // State for table headers
  const [approveHeader] = useState<TableHead[]>([
    {
      id: 1,
      title: "Name",
      isSortable: true,
    },
    {
      id: 2,
      title: "Item No.",
      isSortable: false,
    },
    {
      id: 3,
      title: "Type",
      isSortable: false,
    },
    {
      id: 4,
      title: "Mobility",
      isSortable: false,
    },
    {
      id: 5,
      title: "Description",
      isSortable: false,
    },
  ]);
  // State for the current operator
  const [items] = useState<ItemData[]>([
    {
      id: 1,
      itemImg: exchangeItem1,
      title: "TCI Tricone drill bits",
      itemNo: "IN/8893UB7",
      type: "Spare Part",
      mobility: "Movable",
      description: "TC1 Tricone Drill Bits",
      checked: false,
    },
    {
      id: 2,
      itemImg: approveItem1,
      title: "Air Clutch & WPT Clutch",
      itemNo: "IN/8733UB7",
      type: "Spare Part",
      mobility: "Movable",
      description: "Air Clutch & WPT Clutch",
      checked: false,
    },
    {
      id: 3,
      itemImg: exchangeItem2,
      title: "Jet Mud Mixer",
      itemNo: "IN/8753UA8",
      type: "Spare Part",
      mobility: "Movable",
      description: "Jet Mud Mixer",
      checked: false,
    },
  ]);
  // State for the add item modal
  const [openModal, setModal] = useState<boolean>(false);

  return (
    <>
      <Header />
      <IonContent className="page-contain items-contain">
        <IonCard className="container">
          {/* Header */}
          <IonCard className="main-header">
            {/* Stats */}
            <IonCard className="main-header-left">
              <IonCard color="primary-light" className="main-stats">
                <IonCard className="num-stat new-num">
                  <IonText color="primary" className="stat-num">
                    505
                  </IonText>
                  <IonText color="primary">Items</IonText>
                </IonCard>
                <IonCard className="divider"></IonCard>
                <IonCard className="num-stat total-num">
                  <IonText color="primary" className="stat-num">
                    380
                  </IonText>
                  <IonText color="primary">Movable</IonText>
                </IonCard>
                <IonCard className="num-stat total-num">
                  <IonText color="primary" className="stat-num">
                    125
                  </IonText>
                  <IonText color="primary">Non movable</IonText>
                </IonCard>
              </IonCard>

              <IonCard className="header-select-contain">
                <IonSelect
                  placeholder="Item Type"
                  interface="popover"
                  className="main-select-box"
                >
                  <IonSelectOption value="1">Type 1</IonSelectOption>
                  <IonSelectOption value="2">Type 2</IonSelectOption>
                </IonSelect>
              </IonCard>
            </IonCard>
            <IonCard className="main-header-right">
              {/* Import button */}
              <IonCard className="btn-contain">
                <IonButton
                  fill="outline"
                  color="primary"
                  className="inventory-btn"
                >
                  <IonImg src={importData} alt="import doc" />
                  <IonText color="light" className="btn-caption">
                    Import data
                  </IonText>
                </IonButton>
                {/* <IonBadge color="light" className="request-badge">
                    3
                    </IonBadge> */}
              </IonCard>
              {/* export button */}
              <IonCard className="btn-contain">
                <IonButton
                  fill="outline"
                  color="primary"
                  className="inventory-btn"
                >
                  <IonImg src={exportData} alt="import doc" />
                  <IonText color="light" className="btn-caption">
                    Export data
                  </IonText>
                </IonButton>
                <IonBadge color="light" className="request-badge">
                  2
                </IonBadge>
              </IonCard>

              {/* Add item button */}
              <IonButton
                className="inventory-btn add-item-btn"
                onClick={() => setModal(true)}
              >
                <IonIcon icon={addOutline} color="light" />
                <IonText color="light">Add Item</IonText>
              </IonButton>
            </IonCard>
          </IonCard>

          <IonCard className="page-section inventory-section">
            <IonCard className="section-header">
              <IonSearchbar
                color="primary-light"
                value={search}
                onIonChange={e => setSearch(e.detail.value!)}
                className="search-field"
              />
              <IonCard className="section-header-right">
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
              </IonCard>
            </IonCard>

            <IonCard className="section-main">
              {/* Table */}
              <IonCard className="main-table approval-table">
                {/* Table header */}
                <IonCard className="table-header">
                  {/* Header row */}
                  <IonCard className="header-row">
                    <IonCard className={`row row-0`}>
                      <IonCheckbox />
                    </IonCard>
                    <IonCard className={`row row-0`}></IonCard>
                    {/* Notification */}
                    {approveHeader.map(row => (
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
                  {items.map(data => (
                    <IonCard
                      key={data.id}
                      className={`data-row data-row-${data.id}`}
                    >
                      <IonCard className="row row-0">
                        <IonCheckbox checked={data.checked} />
                      </IonCard>
                      {/* Item img */}
                      <IonCard className="row row-1">
                        <IonImg src={data.itemImg} />
                      </IonCard>
                      {/* Name */}
                      <IonCard className="row row-2">
                        <IonText color="primary" className="approve-msg">
                          {data.title}
                        </IonText>
                      </IonCard>
                      {/* Item No. */}
                      <IonCard className="row row-3">
                        <IonText color="primary" className="notif-date">
                          {data.itemNo}
                        </IonText>
                        {/* <IonText color="primary">{data.timestamp.time}</IonText> */}
                      </IonCard>
                      <IonCard className="row row-3">
                        <IonText color="primary" className="notif-date">
                          {data.type}
                        </IonText>
                        {/* <IonText color="primary">{data.timestamp.time}</IonText> */}
                      </IonCard>
                      {/* Purchase date */}
                      <IonCard className="row row-4">
                        <IonText color="primary">{data.mobility}</IonText>
                      </IonCard>
                      {/* Quantity */}
                      <IonCard className="row row-4">
                        <IonText color="primary">{data.description}</IonText>
                        <IonButton
                          routerLink={`/items/${data.id}`}
                          fill="outline"
                          color="primary"
                        >
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
                      value="3"
                    >
                      <IonSelectOption value="1">1</IonSelectOption>
                      <IonSelectOption value="2">2</IonSelectOption>
                      <IonSelectOption value="3">3</IonSelectOption>
                    </IonSelect>
                    <IonText color="primary" className="pl-1">
                      1-3 of 500 Materials
                    </IonText>
                  </IonCard>
                  <IonCard className="right-footer-content">
                    <IonText color="primary">1 of 200 Pages</IonText>
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
                        value="3"
                      >
                        <IonSelectOption value="1">1</IonSelectOption>
                        <IonSelectOption value="2">2</IonSelectOption>
                        <IonSelectOption value="3">3</IonSelectOption>
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
      {/* Modal to add an item */}
      <IonModal
        isOpen={openModal}
        onDidDismiss={() => setModal(false)}
        backdropDismiss
        cssClass="form-modal"
      >
        <IonCard className="add-form-contain">
          <IonText color="primary" className="form-head">
            Add Item
          </IonText>
          <IonCard className="form-contain">
            <IonCard className="form-grp">
              <IonLabel color="primary" className="input-label">
                Item Name*
              </IonLabel>
              <IonInput
                type="text"
                className="input-field"
                placeholder="New Item Name"
                required
              ></IonInput>
            </IonCard>
            <IonCard className="form-grp">
              <IonLabel color="primary" className="input-label">
                Date of purchase
              </IonLabel>
              <IonInput
                type="date"
                className="input-field"
                placeholder="dd/mm/yy"
              ></IonInput>
            </IonCard>
            <IonCard className="form-grp">
              <IonLabel color="primary" className="input-label">
                Item Description*
              </IonLabel>
              <IonTextarea
                // type="text"
                placeholder="Select new item status"
                className="input-field"
                // multiple
                required
              ></IonTextarea>
            </IonCard>
            <IonCard className="form-grp">
              <IonLabel color="primary" className="input-label">
                Estimated Salvage Value
              </IonLabel>
              <IonInput
                type="text"
                placeholder="Estimated Salvage Value"
                className="input-field"
              ></IonInput>
            </IonCard>
            <IonCard className="form-grp">
              <IonLabel color="primary" className="input-label">
                Upload Item Pictures
              </IonLabel>
              <IonTextarea
                // type="text"
                placeholder="Item Pictures"
                className="input-field"
                // multiple
              >
                {/* <IonIcon
                  icon={cloudUploadOutline}
                  color="primary-alt"
                /> */}
              </IonTextarea>
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
              <IonIcon icon={addOutline} color="light" />
              <IonText color="light">Add Item</IonText>
            </IonButton>
          </IonCard>
        </IonCard>
      </IonModal>
    </>
  );
};

export default Items;
