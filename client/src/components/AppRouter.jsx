import React from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../main";
import { SHOP_ROUTE } from "../utils/constants";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const { userStore } = useContext(Context);

  return (
    <>
      <Routes>
        {userStore.isAuth &&
          authRoutes.map(({ path, Component }, i) => (
            <Route key={i} path={path} element={<Component />} />
          ))}
        {publicRoutes.map(({ path, Component }, i) => (
          <Route key={1} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
      </Routes>
    </>
  );
});

export default AppRouter;
