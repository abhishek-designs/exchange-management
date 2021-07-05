import { useState } from "react";
import { IonContent, IonText, IonCard, IonImg } from "@ionic/react";
import Header from "../../components/layouts/header/Header";

import "./Operators.css";
import shellLogo from "../../assets/img/shell-logo.png";
import exxonLogo from "../../assets/img/exxon-logo.png";
import petrobrasLogo from "../../assets/img/petrobras-logo.png";
import totalLogo from "../../assets/img/total-logo.png";
import chevronLogo from "../../assets/img/chevron-logo.png";
import addaxLogo from "../../assets/img/addax-logo.png";

interface Operator {
  id: number;
  title: string;
  img: string;
}

const Operators = () => {
  // State for operators
  const [operators, setOperators] = useState<Operator[]>([
    {
      id: 1,
      title: "Shell",
      img: shellLogo,
    },
    {
      id: 2,
      title: "ExxonMobil",
      img: exxonLogo,
    },
    {
      id: 3,
      title: "Petrobras",
      img: petrobrasLogo,
    },
    {
      id: 4,
      title: "Total",
      img: totalLogo,
    },
    {
      id: 5,
      title: "Chevron",
      img: chevronLogo,
    },
    {
      id: 6,
      title: "Addax Petroleum",
      img: addaxLogo,
    },
  ]);

  return (
    <>
      <Header />
      <IonContent>
        <IonCard className="container">
          <IonCard className="operators-contain">
            {operators.map(operator => (
              <IonCard
                routerLink={`/operators/${operator.id}`}
                key={operator.id}
                className="custom-card"
              >
                <IonImg
                  src={operator.img}
                  alt={operator.title}
                  className="operator-logo"
                />
              </IonCard>
            ))}
          </IonCard>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Operators;
