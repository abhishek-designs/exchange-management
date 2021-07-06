import { useState, useEffect } from "react";
import {
  IonText,
  IonCard,
  IonInput,
  IonLabel,
  IonButton,
  IonImg,
} from "@ionic/react";
import { useHistory } from "react-router";
import layout1 from "../../assets/img/layouts/login-layout-1.svg";
import layout2 from "../../assets/img/layouts/login-layout-2.svg";
import mainLogo from "../../assets/icons/main-logo.svg";
import mainSubLogo from "../../assets/icons/main-sub-logo.svg";
import eyeClosed from "../../assets/icons/eye-closed.svg";
import eye from "../../assets/icons/eye.svg";
import compLogo from "../../assets/icons/comp-logo.svg";
import "./Login.css";

import { Login as LoginItem } from "../../types";

const Login = () => {
  const history = useHistory();

  // State for the input fields
  const [login, setLogin] = useState<LoginItem>({
    username: "",
    password: "",
  });
  // state to toggle password
  const [showPwd, setPwd] = useState<boolean>(false);

  // Function to set login credentials
  const loginUser = (e: any) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  // Function to redirect the user to dashboard
  const redirectUser = () => {
    if (login.username !== "" && login.password !== "") {
      history.push("/dashboard");
    } else {
      console.log("Please fill the credentials");
    }
  };

  useEffect(() => {
    console.log(login);
  }, [login]);

  return (
    <IonCard className="login-contain primary">
      {/* Login form */}
      <IonCard className="login-form-contain">
        <IonCard className="logo-contain">
          <IonImg src={mainLogo} className="exchange-logo" />
          <IonImg src={mainSubLogo} className="exchange-logo-2" />
        </IonCard>
        <IonCard className="form-box">
          <IonCard className="form-grp">
            <IonLabel color="primary">Username/Email</IonLabel>
            <IonInput
              value={login.username}
              name="username"
              type="text"
              className="input-field"
              onIonChange={e => loginUser(e)}
              required
            ></IonInput>
          </IonCard>
          <IonCard className="form-grp">
            <IonLabel color="primary">Password</IonLabel>
            <IonCard className="input-field pwd-field">
              <IonInput
                value={login.password}
                name="password"
                type={showPwd ? "text" : "password"}
                onIonChange={e => loginUser(e)}
                required
              ></IonInput>

              <IonButton
                fill="clear"
                onClick={() => setPwd(prevPwd => !prevPwd)}
              >
                <IonImg
                  slot="icon-only"
                  src={showPwd ? eye : eyeClosed}
                  className="show-pwd-btn"
                />
              </IonButton>
            </IonCard>
          </IonCard>
        </IonCard>
        <IonCard className="btn-grp">
          <IonButton fill="clear" className="btn-link">
            Forgot Password?
          </IonButton>
          <IonButton className="login-btn" onClick={() => redirectUser()}>
            Login
          </IonButton>
        </IonCard>
      </IonCard>
      {/* Login footer */}
      <IonCard className="login-footer">
        <IonCard className="logo-contain">
          <IonImg src={compLogo} className="company-logo" />
          <IonText color="light" className="company-logo-2">
            NAPIMS
          </IonText>
        </IonCard>
        <IonText color="light" className="copy-text">
          Copyright &copy; {new Date().getFullYear()} data exchange.
        </IonText>
      </IonCard>
      {/* Layouts */}
      <IonImg src={layout1} className="layout layout-1" />
      <IonImg src={layout2} className="layout layout-2" />
    </IonCard>
  );
};

export default Login;
