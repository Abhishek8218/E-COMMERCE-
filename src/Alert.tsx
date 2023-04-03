import { FC } from "react";
import { useEffect } from "react";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { withAlert } from "./withProvider";
import { GoAlert, GoThumbsup } from "react-icons/go";

const themeMap = {
  success: {
    color: "bg-green-400",
    Icon: GoThumbsup,
  },
  error: {
    color: "bg-primary-default",
    Icon: GoAlert,
  },
};

type AlertProps = {
  alert: { message: string; type: string };
  handleAlertRemove: any;
};

const AlertCard: FC<AlertProps> = ({ alert, handleAlertRemove }) => {
  useEffect(
    function () {
      if (alert) {
        const timeout = setTimeout(handleAlertRemove, 5 * 1000);
        return function () {
          clearTimeout(timeout);
        };
      }
    },
    [alert]
  );

  if (!alert) {
    return <div></div>;
  }

  const { message, type } = alert;
  const { Icon, color } = themeMap[type];

  return (
    <div className="max-w-5xl mx-auto mb-2 bg-white border-4 border-primary-dark">
      <div
        className={
          " flex items-center justify-between md:h-10 h-16 mx-auto text-center " +
          color
        }
      >
        <div className="flex items-center justify-center w-16 h-full text-center bg-gray-500 border border-primary-default md:w-10">
          <Icon className="text-3xl text-primary-default" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{type}</h1>
        </div>
        <div className="font-bold md:text-xl">{message}:</div>
        <div>
          <MdOutlineDoNotDisturbOn
            onClick={handleAlertRemove}
            className="text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default withAlert(AlertCard);