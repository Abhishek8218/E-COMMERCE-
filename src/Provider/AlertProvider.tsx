import { FC, useState } from "react";
import { Alertcontext } from "../Contexts";

type AlertProviderProps = { children: any };

const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
  const [alert, setAlert] = useState();

  const handleAlertRemove = () => {
    setAlert(undefined);
  };

  return (
    <Alertcontext.Provider value={{ alert, setAlert, handleAlertRemove }}>
      {children}
    </Alertcontext.Provider>
  );
};

export default AlertProvider;