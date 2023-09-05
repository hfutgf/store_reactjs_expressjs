import React from "react";
import { Link } from "react-router-dom";
import { AMDIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/constants";
import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";

const Navbar = observer(() => {
  const { userStore } = useContext(Context);
  const { pathname } = useLocation();
  return (
    <div className="bg-purple min-h-[100px] max-h-[100px] p-[10px]">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={SHOP_ROUTE} className="text-light text-[32px] font-[700] ">
          MyStore
        </Link>
        {userStore.isAuth ? (
          <>
            {pathname === "/login" || pathname === "/registration" ? (
              <div></div>
            ) : (
              <div className="text-light text-[20px] flex items-center gap-[16px] ">
                <Link
                  to={AMDIN_ROUTE}
                  className="border-[1px] border-solid border-light rounded-[5px] px-[10px] py-[5px]"
                >
                  Admin
                </Link>
                <Link
                  to={LOGIN_ROUTE}
                  className="border-[1px] border-solid border-light rounded-[5px] px-[10px] py-[5px]"
                >
                  Sign in
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            {pathname === "/login" ? (
              <div></div>
            ) : (
              <div className="text-light text-[20px] flex items-center gap-[16px] ">
                <Link
                  onClick={() => userStore.setIsAuth(true)}
                  className="border-[1px] border-solid border-light rounded-[5px] px-[10px] py-[5px]"
                >
                  Auth
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
});

export default Navbar;
