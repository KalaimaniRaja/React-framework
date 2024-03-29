import React from "react";
import "./table.scss";

const Table = ({ cols, data, bordered, hoverable, striped, isDark }) => {
  return (
    <table
      className={`${"table "}${bordered ? "table-bordered" : ""}${
        hoverable ? "table-hover" : ""
      }${striped ? "table-striped" : ""}${isDark ? "table-dark" : ""}`.trim()}
    >
      <thead>
        <tr>
          {cols.map((headerItem, index) => (
            <th key={index}>{headerItem.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {cols.map((col, key) => (
              <td key={key}>{col.render(item)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
