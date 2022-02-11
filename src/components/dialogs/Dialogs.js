import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
// import { getUserData } from "../data";
// getUserData
import classNames from "./Dialogs.module.css";
import { selectUserData } from "./dialogsSlice";
import { useSelector } from "react-redux";
import QueryNavLink from "../QueryNavLink";

const Dialogs = () => {
  let userData = useSelector(selectUserData);
  let [searchParams, setSearchParams] = useSearchParams();
  console.log("userData", userData);

  return (
    <div className={classNames["wrapper"]}>
      <div className={classNames["dialogs"]}>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />

        {userData
          .filter((dialog) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let username = dialog.username.toLowerCase();
            return username.startsWith(filter.toLowerCase());
          })
          .map(({ username, id }) => (
            <QueryNavLink
              className={({ isActive }) => {
                return isActive ? `${classNames["item"]} ${classNames["active"]}` : classNames["item"];
              }}
              key={id}
              to={`/dialogs/${id}`}
            >
              {username}
            </QueryNavLink>
          ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Dialogs;
