/** @format */

import { useState } from "react";

/** @format */
const initialData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

const App = () => {
  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);
  const sortData = (sortBy) => {
    let sortedData = [...data];
    sortedData.sort((a, b) => {
      if (sortBy === "date") {
        if (a.date === b.date) {
          return b.views - a.views;
        }
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === "views") {
        if (a.views === b.views) {
          return new Date(b.date) - new Date(a.date);
        }
        return b.views - a.views;
      }
      return 0;
    });
    setData(sortedData);
  };
  return (
    <div>
      <h1>Date and Views Table</h1>
      <button
        onClick={() => {
          setSortBy("date");
          sortData("date");
        }}
      >
        Sort by Date
      </button>

      <button
        onClick={() => {
          setSortBy("views");
          sortData("views");
        }}
      >
        Sort by Views
      </button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
