import { useState } from "react";
import Header from "../../components/layouts/header/Header";
import { IonImg, IonContent, IonCard, IonText } from "@ionic/react";

import bgLayout from "../../assets/img/layouts/dashboard-layout-1.svg";
import bgLayout2 from "../../assets/img/layouts/dashboard-layout-2.svg";
import inventoryIcon from "../../assets/icons/inventory.svg";
import approvedMenu from "../../assets/icons/approved-menu.svg";
import taskCompleteIcon from "../../assets/icons/task-complete.svg";

import "./Dashboard.css";

interface AppLink {
  id: number;
  title: string;
  link: string;
  icon: string;
}

// const [appLinks] = useState<AppLink[]>([
//   {
//     id: 1,
//     title: 'Inventory',
//     link: '/inventory',
//     icon: inventoryIcon
//   },
//   {
//     id: 2,
//     title: 'Approvals/Requests',
//     link: '/approvals',
//     icon: approvedMenu
//   },
// ])

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
            <IonCard routerLink="/inventory" className="custom-card">
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
                <IonCard color="medium" className="card-slot total-slot medium">
                  <IonText color="dark" className="num">
                    4.8k
                  </IonText>
                  <IonText color="dark" className="label">
                    Total Items
                  </IonText>
                </IonCard>
                <IonCard
                  color="primary-light"
                  className="card-slot active-slot primary-light"
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
                  className="card-slot pending-slot warning-light"
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

            <IonCard routerLink="/approvals" className="custom-card">
              <IonCard className="card-header">
                <svg
                  className="status-icon"
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.1115 11.241H6.4425V12.9833H25.1115C25.3425 12.9833 25.5641 12.8915 25.7275 12.7281C25.8909 12.5648 25.9827 12.3432 25.9827 12.1121C25.9827 11.8811 25.8909 11.6595 25.7275 11.4961C25.5641 11.3327 25.3425 11.241 25.1115 11.241Z"
                    fill="white"
                  />
                  <path
                    d="M25.1115 18.2102H6.4425V19.9525H25.1115C25.3425 19.9525 25.5641 19.8607 25.7275 19.6974C25.8909 19.534 25.9827 19.3124 25.9827 19.0814C25.9827 18.8503 25.8909 18.6287 25.7275 18.4654C25.5641 18.302 25.3425 18.2102 25.1115 18.2102Z"
                    fill="white"
                  />
                  <path
                    d="M11.1903 6.01405H25.1289C25.3599 6.01405 25.5815 5.92227 25.7449 5.75889C25.9083 5.59552 26.0001 5.37394 26.0001 5.14289C26.0001 4.91184 25.9083 4.69026 25.7449 4.52689C25.5815 4.36351 25.3599 4.27173 25.1289 4.27173H12.9326L11.1903 6.01405Z"
                    fill="white"
                  />
                  <path
                    d="M12.9762 0.281848C12.8878 0.192557 12.7827 0.12167 12.6668 0.0732902C12.5509 0.0249108 12.4266 0 12.301 0C12.1754 0 12.0511 0.0249108 11.9352 0.0732902C11.8193 0.12167 11.7142 0.192557 11.6259 0.281848L4.6043 7.30341L1.65977 4.13238C1.48649 3.94639 1.24641 3.83685 0.992366 3.82787C0.738319 3.81888 0.491107 3.91118 0.305115 4.08447C0.119123 4.25775 0.00958524 4.49782 0.000599641 4.75187C-0.00838595 5.00592 0.0839164 5.25313 0.257201 5.43912L4.56074 10.0563L12.9762 1.65828C13.0684 1.56894 13.1417 1.46198 13.1917 1.34376C13.2418 1.22553 13.2676 1.09845 13.2676 0.970065C13.2676 0.841676 13.2418 0.714596 13.1917 0.596371C13.1417 0.478146 13.0684 0.371188 12.9762 0.281848Z"
                    fill="white"
                  />
                </svg>

                <IonText className="card-label">Approvals/Requests</IonText>
              </IonCard>
              <IonCard className="card-section">
                <IonCard color="medium" className="card-slot total-slot medium">
                  <IonText color="dark" className="num">
                    1.4k
                  </IonText>
                  <IonText color="dark" className="label">
                    Total Approvals
                  </IonText>
                </IonCard>
                <IonCard
                  color="primary-light"
                  className="card-slot active-slot primary-light"
                >
                  <IonText color="primary" className="num">
                    0
                  </IonText>
                  <IonText color="primary" className="label">
                    Total Requests
                  </IonText>
                </IonCard>
                <IonCard
                  color="danger-light"
                  className="card-slot pending-slot danger-light"
                >
                  <IonText color="danger" className="num">
                    20
                  </IonText>
                  <IonText color="danger" className="label">
                    Total Unattended
                  </IonText>
                </IonCard>
              </IonCard>
            </IonCard>

            <IonCard routerLink="/disposal" className="custom-card">
              <IonCard className="card-header">
                <svg
                  className="status-icon"
                  width="26"
                  height="28"
                  viewBox="0 0 26 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.07027 13.2754C3.24316 13.3619 3.32961 13.3619 3.5025 13.3619C3.67539 13.3619 3.84828 13.2754 3.93473 13.2754L9.98594 9.73117C10.2453 9.55828 10.4182 9.29894 10.4182 8.95315C10.4182 8.60737 10.2453 8.34803 9.98594 8.17514L7.8248 6.87845L9.64016 3.59351C9.98594 2.98839 10.5046 2.46971 11.1097 2.12393C12.8387 1.17302 14.9998 1.86459 15.9507 3.59351C16.21 4.02574 16.7287 4.11218 17.161 3.85284H17.2474C17.5932 3.59351 17.6796 3.07483 17.5067 2.72905C16.9881 1.86459 16.2965 1.08658 15.432 0.654346C12.8387 -0.728788 9.64016 0.135671 8.25703 2.72905L5.83654 6.79201C5.5772 7.22424 5.75009 7.74291 6.09588 8.00225L7.8248 9.0396L4.36696 11.1143V5.32243C4.36696 4.80375 4.02118 4.45797 3.5025 4.45797C3.07027 4.54441 2.72449 4.8902 2.72449 5.40887V12.5839C2.72449 12.8432 2.89738 13.1026 3.07027 13.2754Z"
                    fill="white"
                  />
                  <path
                    d="M25.2869 16.3876L22.2613 11.0279C22.1748 10.855 21.9155 10.6821 21.7426 10.5957C21.4832 10.5093 21.3104 10.5957 21.051 10.6821L19.1492 11.8059V7.74299L23.9037 10.5957C23.9902 10.5957 23.9902 10.6821 24.0766 10.6821C24.5089 10.855 25.0275 10.6821 25.2004 10.2499C25.3733 9.81769 25.2004 9.29901 24.7682 9.12612L18.717 5.49539C18.4576 5.3225 18.1119 5.3225 17.8525 5.49539C17.5067 5.58184 17.4203 5.84118 17.4203 6.18696V13.362C17.4203 13.7078 17.5067 14.0535 17.7661 14.2264C18.0254 14.3993 18.3712 14.3993 18.6305 14.2264L21.1375 12.7568L23.7308 17.3385C24.336 18.4623 24.336 19.759 23.7308 20.8828C23.2122 21.9201 22.0884 22.5252 20.9646 22.5252H20.1866C19.7543 22.5252 19.1492 22.871 19.1492 23.3897C19.2357 23.9084 19.6679 24.2542 20.1866 24.2542H20.9646C22.7799 24.2542 24.4224 23.3032 25.2869 21.7472C26.2378 20.0183 26.2378 18.03 25.2869 16.3876Z"
                    fill="white"
                  />
                  <path
                    d="M16.9015 22.6116L10.8503 18.9808C10.591 18.8079 10.2452 18.8079 9.98585 18.9808C9.72651 19.1537 9.64007 19.4131 9.64007 19.7588V22.6116H5.40422C4.10753 22.5251 2.89729 21.8335 2.29217 20.6233C1.6006 19.4131 1.6006 17.857 2.29217 16.6468C2.5515 16.2146 2.37861 15.6959 1.94638 15.4365C1.51415 15.1772 0.995477 15.3501 0.736139 15.7823C-0.301211 17.5977 -0.214766 19.7588 0.822585 21.4878C1.77349 23.1302 3.58885 24.1676 5.49066 24.1676H10.5045C11.0232 24.1676 11.369 23.8218 11.369 23.3031V21.2284L14.8268 23.3031L9.98585 26.1558C9.72651 26.3287 9.55362 26.5881 9.55362 26.9339C9.55362 27.4525 9.98585 27.7983 10.4181 27.7983C10.591 27.7983 10.6774 27.7119 10.8503 27.6254L16.9015 23.9947C17.0744 23.9082 17.1609 23.8218 17.2473 23.6489C17.5066 23.3031 17.3338 22.7844 16.9015 22.6116Z"
                    fill="white"
                  />
                </svg>

                <IonText className="card-label">Disposal</IonText>
              </IonCard>
              <IonCard className="card-section">
                <IonCard color="medium" className="card-slot total-slot medium">
                  <IonText color="dark" className="num">
                    906
                  </IonText>
                  <IonText color="dark" className="label">
                    Total Items in Disposal
                  </IonText>
                </IonCard>
                <IonCard
                  color="warning-light"
                  className="card-slot active-slot warning-light"
                >
                  <IonText color="warning" className="num">
                    80
                  </IonText>
                  <IonText color="warning" className="label">
                    Total Inspected
                  </IonText>
                </IonCard>
                <IonCard
                  color="primary-light"
                  className="card-slot pending-slot primary-light"
                >
                  <IonText color="primary" className="num">
                    320
                  </IonText>
                  <IonText color="primary" className="label">
                    Total Finalized
                  </IonText>
                </IonCard>
              </IonCard>
            </IonCard>

            <IonCard routerLink="/tasks" className="custom-card">
              <IonCard className="card-header">
                <svg
                  className="status-icon"
                  width="22"
                  height="28"
                  viewBox="0 0 22 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5531 27.0835H1.44692C1.25802 27.0846 1.07075 27.0485 0.8958 26.9772C0.720851 26.906 0.561652 26.801 0.427292 26.6682C0.292932 26.5354 0.186043 26.3774 0.112728 26.2033C0.0394131 26.0292 0.00110792 25.8424 0 25.6535V3.97503C0.0050224 3.76572 0.0543772 3.55985 0.144807 3.37101C0.235237 3.18217 0.364687 3.01465 0.524612 2.87951C0.684538 2.74437 0.871304 2.64469 1.07259 2.58703C1.27387 2.52938 1.48509 2.51506 1.69231 2.54503H3.38462V4.23734H1.69231V25.3912H20.3077V4.23734H18.6154V2.54503H20.5192C20.711 2.53939 20.9019 2.57215 21.0807 2.64137C21.2596 2.7106 21.4228 2.8149 21.5608 2.94814C21.6988 3.08138 21.8087 3.24087 21.8841 3.41722C21.9596 3.59358 21.999 3.78323 22 3.97503V25.6535C21.9989 25.8424 21.9606 26.0292 21.8873 26.2033C21.814 26.3774 21.7071 26.5354 21.5727 26.6682C21.4383 26.801 21.2792 26.906 21.1042 26.9772C20.9293 27.0485 20.742 27.0846 20.5531 27.0835Z"
                    fill="white"
                  />
                  <path
                    d="M9.86612 20.1113L5.33074 15.5759C5.19318 15.4131 5.12216 15.2043 5.13186 14.9914C5.14156 14.7785 5.23128 14.577 5.38307 14.4274C5.53487 14.2777 5.73755 14.1909 5.95061 14.1842C6.16367 14.1775 6.3714 14.2515 6.53227 14.3913L9.86612 17.7252L17.1769 10.4144C17.3388 10.2758 17.547 10.2033 17.7599 10.2116C17.9729 10.2198 18.1749 10.3081 18.3256 10.4588C18.4763 10.6095 18.5646 10.8115 18.5728 11.0244C18.581 11.2374 18.5086 11.4456 18.37 11.6075L9.86612 20.1113Z"
                    fill="white"
                  />
                  <path
                    d="M17.7693 7.62202H4.23083V4.51664C4.23306 3.99444 4.44149 3.49426 4.81075 3.12501C5.18 2.75576 5.68017 2.54732 6.20237 2.5451H7.71699C7.9034 1.81705 8.32681 1.17176 8.92048 0.710941C9.51415 0.250125 10.2443 0 10.9958 0C11.7474 0 12.4775 0.250125 13.0712 0.710941C13.6649 1.17176 14.0883 1.81705 14.2747 2.5451H15.7893C16.313 2.54509 16.8153 2.75254 17.1864 3.12203C17.5575 3.49153 17.7671 3.99297 17.7693 4.51664V7.62202ZM5.92314 5.92971H16.077V4.51664C16.077 4.44258 16.0476 4.37156 15.9952 4.31919C15.9428 4.26682 15.8718 4.23741 15.7978 4.23741H12.6924V3.39125C12.6924 2.94242 12.5141 2.51198 12.1967 2.19461C11.8793 1.87724 11.4489 1.69894 11.0001 1.69894C10.5512 1.69894 10.1208 1.87724 9.80342 2.19461C9.48605 2.51198 9.30776 2.94242 9.30776 3.39125V4.23741H6.20237C6.1657 4.23741 6.12939 4.24463 6.09552 4.25866C6.06164 4.27269 6.03086 4.29326 6.00493 4.31919C5.979 4.34512 5.95843 4.3759 5.9444 4.40978C5.93037 4.44366 5.92314 4.47997 5.92314 4.51664V5.92971Z"
                    fill="white"
                  />
                </svg>

                <IonText className="card-label">Tasks</IonText>
              </IonCard>
              <IonCard className="card-section">
                <IonCard
                  color="warning-light"
                  className="card-slot total-slot warning-light"
                >
                  <IonText color="warning" className="num">
                    20
                  </IonText>
                  <IonText color="warning" className="label">
                    Total Tasks Assigned
                  </IonText>
                </IonCard>
                <IonCard
                  color="primary-light"
                  className="card-slot active-slot primary-light"
                >
                  <IonText color="primary" className="num">
                    1
                  </IonText>
                  <IonText color="primary" className="label">
                    Total Tasks Done
                  </IonText>
                </IonCard>
                <IonCard
                  color="danger-light"
                  className="card-slot pending-slot danger-light"
                >
                  <IonText color="danger" className="num">
                    2
                  </IonText>
                  <IonText color="danger" className="label">
                    Total On Hand
                  </IonText>
                </IonCard>
              </IonCard>
            </IonCard>

            <IonCard routerLink="/exchange_platform" className="custom-card">
              <IonCard className="card-header">
                <svg
                  className="status-icon"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3125 15.95V9.44995C20.3125 9.01897 20.1413 8.60565 19.8365 8.3009C19.5318 7.99616 19.1185 7.82495 18.6875 7.82495H7.3125C6.88152 7.82495 6.4682 7.99616 6.16345 8.3009C5.85871 8.60565 5.6875 9.01897 5.6875 9.44995V15.95C5.6875 16.3809 5.85871 16.7943 6.16345 17.099C6.4682 17.4037 6.88152 17.575 7.3125 17.575H18.6875C19.1185 17.575 19.5318 17.4037 19.8365 17.099C20.1413 16.7943 20.3125 16.3809 20.3125 15.95ZM7.3125 9.44995H18.6875V15.95H7.3125V9.44995Z"
                    fill="white"
                  />
                  <path
                    d="M13.8125 2.94995H17.0625V4.57495H13.8125V2.94995Z"
                    fill="white"
                  />
                  <path
                    d="M18.6957 2.94995H20.2963V4.57495H18.6957V2.94995Z"
                    fill="white"
                  />
                  <path
                    d="M3.0875 4.57502H12.0819V2.95002H3.14437L4.69625 1.39002C4.7724 1.31449 4.83285 1.22462 4.8741 1.12561C4.91535 1.0266 4.93659 0.920404 4.93659 0.813144C4.93659 0.705884 4.91535 0.599686 4.8741 0.500675C4.83285 0.401665 4.7724 0.311801 4.69625 0.236269C4.54402 0.0849402 4.33809 0 4.12344 0C3.90879 0 3.70286 0.0849402 3.55062 0.236269L0 3.76252L3.55062 7.33752C3.70286 7.48885 3.90879 7.57379 4.12344 7.57379C4.33809 7.57379 4.54402 7.48885 4.69625 7.33752C4.84758 7.18529 4.93252 6.97936 4.93252 6.76471C4.93252 6.55006 4.84758 6.34413 4.69625 6.19189L3.0875 4.57502Z"
                    fill="white"
                  />
                  <path
                    d="M22.4331 18.1276C22.2809 17.9763 22.075 17.8914 21.8603 17.8914C21.6457 17.8914 21.4397 17.9763 21.2875 18.1276C21.2113 18.2032 21.1509 18.293 21.1097 18.392C21.0684 18.491 21.0472 18.5972 21.0472 18.7045C21.0472 18.8118 21.0684 18.918 21.1097 19.017C21.1509 19.116 21.2113 19.2058 21.2875 19.2814L22.8313 20.8251H13.8125V22.4501H22.9125L21.2875 24.0751C21.1362 24.2274 21.0512 24.4333 21.0512 24.6479C21.0512 24.8626 21.1362 25.0685 21.2875 25.2208C21.4388 25.3709 21.6431 25.4555 21.8562 25.4564C21.9632 25.457 22.0692 25.4365 22.1682 25.3961C22.2672 25.3556 22.3572 25.2961 22.4331 25.2208L26 21.6783L22.4331 18.1276Z"
                    fill="white"
                  />
                  <path
                    d="M8.9375 20.825H12.1875V22.45H8.9375V20.825Z"
                    fill="white"
                  />
                  <path
                    d="M5.6875 20.825H7.28813V22.45H5.6875V20.825Z"
                    fill="white"
                  />
                </svg>

                <IonText className="card-label">Exchange Platform</IonText>
              </IonCard>
              <IonCard className="card-section">
                <IonCard color="medium" className="card-slot total-slot medium">
                  <IonText color="dark" className="num">
                    2.5k
                  </IonText>
                  <IonText color="dark" className="label">
                    Total Available Items
                  </IonText>
                </IonCard>
                <IonCard
                  color="danger-light"
                  className="card-slot active-slot danger-light"
                >
                  <IonText color="danger" className="num">
                    40
                  </IonText>
                  <IonText color="danger" className="label">
                    Items Approaching Overdue
                  </IonText>
                </IonCard>
                <IonCard
                  color="warning-light"
                  className="card-slot pending-slot warning-light"
                >
                  <IonText color="warning" className="num">
                    303
                  </IonText>
                  <IonText color="warning" className="label">
                    Ongoing Inspections
                  </IonText>
                </IonCard>
                <IonCard
                  color="primary-light"
                  className="card-slot pending-slot primary-light"
                >
                  <IonText color="primary" className="num">
                    33
                  </IonText>
                  <IonText color="primary" className="label">
                    Inspected
                  </IonText>
                </IonCard>
              </IonCard>
            </IonCard>
          </IonCard>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Dashboard;
