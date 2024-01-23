import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div>
            <div className="show-counter flex items-stretch gap-[10px] py-[7px] text-red-500">
      
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
        </div>
    );
}

export default ShowCounter;
