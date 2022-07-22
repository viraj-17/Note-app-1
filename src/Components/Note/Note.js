import React from "react";
// first import path and then use it in react
import deleteIcon from "../../assets/delete.png";
import "./Note.css";

let timer = 500,
  timeout;
function Note(props) {
  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? hrs - 12 : hrs;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();
    let month = monthName[date.getMonth()];

    return `${hrs}:${min} ${amPm}  ${day} ${month}`;
  };
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };
  return (
    <div className='note' style={{ backgroundColor: props.note.color }}>
      <textarea
        className='note_text'
        defaultValue={props.note.text}
        placeholder='Note'
        //add dbounce to minimize rerender to keep app smooth
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className='note_footer'>
        <p>{formatDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt='DELETE'
          //arrow function should be called()=>
          // if you called onClick={()=>props.deleteNote{props.note.id}}} - run on cick
          // if you calledonClick={ props.deleteNote{props.note.id}}} - run at compile time
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
