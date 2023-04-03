import { useState, useEffect, FC } from "react";
import { loginUserContext } from "../Contexts";
import axios from "axios";
import Loading from "../Loading";

type UseProviderProps = { children: any };

const UserProvider: FC<UseProviderProps> = ({ children }) => {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");
  const [loadingUser, setLoadingUser] = useState(true);
  const [myName, setMyName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoadingUser(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
  }, []);

  if (loadingUser) {
    return <Loading />;
  }

  return (
    <loginUserContext.Provider
      value={{
        user,
        setUser,
        setMyName,
        myName,
        setLoadingUser,
        loadingUser,
        isLoggedIn: !!token,
        loading,
        setLoading,
      }}
    >
      {children}
    </loginUserContext.Provider>
  );
};

export default UserProvider;