import React from "react";
import { suppliers } from "./data/suppliers";

function App () {
    return (
      <table className="styled-table">
        <thead>
          <tr>
            <td>Company Name</td>
            <td>Contact Name</td>
            <td>Contact Title</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {suppliers &&
            suppliers.map((item) => {
              return (
                <tr className="active-row" key={item?.id}>
                  <td>{item?.companyName}</td>
                  <td>{item?.contactName}</td>
                  <td>{item?.contactTitle}</td>
                  <td>{item?.address?.phone}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    )
}

export default App