import { DateTimePicker } from "@wordpress/components";
import { Popover } from "../components";
import { useState } from "@wordpress/element";
import ControlContainer from "../containers/ControlContainer";
const moment = require("moment");

const MyDateTimePicker = ({ value, format, placeholder, ...ControlContainer }) => {
  const [datePopover, setDatePopover] = useState(false);

  const dateFormat = format || "YYYY-MM-DD, h:mm:ss a";
  const date = moment(value).format(dateFormat);

  const handleOnKeyDown = (e) => {
    if (e.type === "keydown" && e.key === "Enter") {
      setDatePopover(true);
    }
  };

  console.debug({ value })

  return (
    <Popover
      content={<DateTimePicker currentDate={value} {...ControlContainer} />}
    >
      <input
        tabIndex={0}
        value={date === "Invalid date" ? "" : date}
        className="cw__date-picker__date-input"
        type="text"
        readOnly
        placeholder={placeholder || dateFormat}
        onClick={() => setDatePopover(!datePopover)}
        onKeyDown={handleOnKeyDown}
      />
    </Popover>
  );
};

export default (props) => {
  return ControlContainer(MyDateTimePicker)(props);
};
