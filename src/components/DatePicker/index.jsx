import React from "react";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Single DatePicker Component
function DatePicker({
  placeholder = "Select date",
  className = "",
  value,
  dateFormat = "dd/MM/yyyy",
  onChange,
  ...restProps
}) {
  const [selectedDate, setSelectedDate] = React.useState(value);

  const handleDateChange = (date) => {
    const newValue = date instanceof Date ? date.toISOString() : "";
    setSelectedDate(newValue);
    onChange?.(newValue); // Optional chaining in case onChange isn't passed
  };

  return (
    <div className={className}>
      <ReactDatePicker
        dateFormat={dateFormat}
        placeholderText={placeholder}
        selected={selectedDate ? new Date(selectedDate) : null}
        onChange={handleDateChange}
        {...restProps}
      />
    </div>
  );
}

DatePicker.displayName = "DatePiicker";

// DatePicker for a Range
function DatePickerRange({
  startDate,
  endDate,
  placeholder = "Select range",
  className = "",
  dateFormat = "dd/MM/yyyy",
  onChange,
  ...restProps
}) {
  const [startDateValue, setStartDate] = React.useState(startDate);
  const [endDateValue, setEndDate] = React.useState(endDate);

  const handleRangeChange = ([start, end]) => {
    const newStartDate = start instanceof Date ? start.toISOString() : start;
    const newEndDate = end instanceof Date ? end.toISOString() : end;
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    onChange?.([newStartDate, newEndDate]);
  };

  return (
    <div className={className}>
      <ReactDatePicker
        dateFormat={dateFormat}
        placeholderText={placeholder}
        startDate={startDateValue ? new Date(startDateValue) : null}
        endDate={endDateValue ? new Date(endDateValue) : null}
        onChange={handleRangeChange}
        selectsRange
        {...restProps}
      />
    </div>
  );
}

DatePickerRange.displayName = "DatePickerRange";

// Additional DatePicker formats
DatePicker.Range = DatePickerRange;
DatePicker.DateTime = (props) => (
  <DatePicker dateFormat="dd/MM/yyyy h:mm aa" showTimeSelect {...props} />
);
DatePicker.Time = (props) => (
  <DatePicker
    dateFormat="h:mm aa"
    showTimeSelect
    showTimeSelectOnly
    {...props}
  />
);

DatePicker.DateTime.displayName = "DaatePickerDateTtime";
DatePicker.Time.displayName = "DatePickerTimie";

// PropTypes for validation
DatePicker.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
};

DatePickerRange.propTypes = {
  startDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
};

export default DatePicker;
