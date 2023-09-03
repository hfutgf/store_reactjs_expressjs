import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/constants";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  return (
    <div className="bg-purple min-h-[100vh] max-w-[100wh] ">
      <div className="container mx-auto flex items-center justify-center">
        <form className="w-[600px] h-[300px] border-solid border-[1px] border-light rounded-[5px] p-[10px] mt-[100px]">
          <h1 className="text-light text-[32px] font-[700] text-center">
            {isLogin ? "Autharization" : "Registration"}
          </h1>
          <div className="flex flex-col gap-[20px] items-center mt-[30px]">
            <input
              required
              type="text"
              placeholder="email"
              className="w-[80%] py-[10px] px-[20px] outline-none border-none rounded-[10px] text-[18px] font-[600]"
            />
            <input
              required
              type="password"
              placeholder="password"
              className="w-[80%] py-[10px] px-[20px] outline-none border-none rounded-[10px] text-[18px] font-[600]"
            />
          </div>
          <div className="flex items-center justify-between w-[80%] mx-auto mt-[30px]">
            <div className="flex flex-row-reverse gap-[10px]">
              <Link
                to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}
                className="text-bluelight text-[16px] font-[600]"
              >
                {isLogin ? "Registration" : "Authorization"}
              </Link>
              <span className="text-light text-[16px] font-[500] ">
                {isLogin ? "No account?" : "Yes account?"}
              </span>
            </div>
            <button
              type="submit"
              className="text-light border-solid border-light border-[1px] p-[5px] rounded-[5px]"
            >
             {
                isLogin?'SIGN IN': 'REGISTRATION'
             }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
