import React, { useState } from "react";
import plusIcon from "../../assets/plus.png";
import "./Sidebar.css";

function Sidebar(props) {
  const colors = [
    "#B2A4FF",
    "#9DD6DF",
    "#e4ee91",
    "#FFB4B4",
    "#FFE69A",
    "#A78A7F",
  ];
  const [listOpen, setListOpen] = useState(false);
  return (
    <div className='sidebar'>
      <img src={plusIcon} alt='add' onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className='sidebar_list_item'
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
