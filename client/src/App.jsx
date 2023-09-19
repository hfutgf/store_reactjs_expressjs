import { useContext } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { observer } from "mobx-react-lite";
import { Context } from "./main";
import { useState } from "react";
import { useEffect } from "react";
import { check } from "./http/userAPI";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const App = observer(() => {
  const { userStore } = useContext(Context);
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  localStorage.setItem("route", JSON.stringify(pathname));
  const route = JSON.parse(localStorage.getItem("route"));

  
  useEffect(() => {
    navigate(route);
    check()
      .then((res) => {
        userStore.setUser(true);
        userStore.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, [route]);

  if (loading) {
    <h2>Loading...</h2>;
  }
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
});

export default App;
