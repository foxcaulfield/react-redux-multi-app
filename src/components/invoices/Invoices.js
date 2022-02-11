import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
// import { getInvoices } from "./../data";
import QueryNavLink from '../QueryNavLink';
import { useSelector } from 'react-redux';
import { selectInvoices } from './invoicesSlice';

const Invoices = () => {
  let invoices = useSelector(selectInvoices);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
      </main>
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
      <div>
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <QueryNavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  //   margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {" "}
              {invoice.name}
            </QueryNavLink>
          ))}
      </div>
      <Outlet />
    </>
  );
};

export default Invoices;
