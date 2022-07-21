import { Calendar } from '@joshuadotson/features';
import { useState } from 'react';
import { today, getLocalTimeZone } from '@internationalized/date';
import { useDateFormatter } from '@react-aria/i18n';

export default function Web() {
  const defaultDate = today(getLocalTimeZone());
  let [date, setDate] = useState(defaultDate);
  let formatter = useDateFormatter({ dateStyle: 'full' });

  return (
    <div>
      <Calendar value={date} onChange={setDate} />
      <h4>Selected Date: {formatter.format(date.toDate(getLocalTimeZone()))}</h4>
    </div>
  );
}
