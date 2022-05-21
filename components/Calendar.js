import React, { useState } from 'react';
import DatePicker from 'sassy-datepicker';

function CalendarComponent(props) {
    const [date, setDate] = useState(new Date());

    const onChange = newDate => {
      console.log(`New date selected - ${newDate.toString()}`);
      setDate(newDate);
    };
    return (
        <div>
<DatePicker onChange={onChange} selected={date} />
        
        </div>
    );
}

export default CalendarComponent;


