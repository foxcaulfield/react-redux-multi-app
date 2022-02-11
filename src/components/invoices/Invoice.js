import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// import { getInvoice } from "../data";
// import { deleteInvoice } from "./../data";

import { useSelector, useDispatch } from "react-redux";
import { remove, selectInvoice } from "./invoicesSlice";

const Invoice = () => {
  let params = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  //   console.log("navigate", navigate);

  // let { amount, due, name, number } = getInvoice(parseInt(params.invoiceId, 10));
  let { amount, due, name, number } = useSelector(selectInvoice(parseInt(params.invoiceId, 10)));
  // console.log('invoice', invoice);
  return (
    <main>
      <h2>Total Due: {amount}</h2>
      <p>
        {name}:{number}
      </p>
      <p>Due Date: {due}</p>
      <p>
        <button
          onClick={() => {
            dispatch(remove(number));
            // deleteInvoice(number);
            navigate("/invoices");
          }}
        >
          {" "}
          Delete it from the face of the Earth
        </button>
      </p>
    </main>
  );
};

export default Invoice;
