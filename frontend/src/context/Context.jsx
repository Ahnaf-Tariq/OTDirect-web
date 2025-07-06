import { createContext, useState } from "react";

export const Context = createContext();

const ShopContext = (props) => {
  const backendUrl = "http://localhost:4000";
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");
  const [showLogin, setShowLogin] = useState(false);
  const [showAreaConverter, setShowAreaConverter] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [sidebarDisplayUser, setSideBarDisplayUser] = useState(true);
  const [deleteAccount, setDeleteAccount] = useState(false);

  const value = {
    token,
    setToken,
    backendUrl,
    showLogin,
    setShowLogin,
    showAreaConverter,
    setShowAreaConverter,
    sideBar,
    setSideBar,
    sidebarDisplayUser,
    setSideBarDisplayUser,
    deleteAccount,
    setDeleteAccount,
  };
  return (
    <div>
      <Context.Provider value={value}>{props.children}</Context.Provider>
    </div>
  );
};

export default ShopContext;
