import React, { useState, forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/DatePicker.css";
import { BsCalendar } from "react-icons/bs";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="custom-date-input" onClick={onClick} ref={ref}>
      <input type="text" readOnly value={value} className="date-input-field" />
      <BsCalendar className="calendar-icon" />
    </div>
  ));

  return (
    <div className="date-picker">
      <label htmlFor="date">Choose Date:</label>
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        customInput={<CustomInput />}
      />
    </div>
  );
};

export default DatePicker;
