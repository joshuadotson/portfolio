import { useCalendarCell } from '@react-aria/calendar';
import { useEffect, useRef } from 'react';
import { today, getLocalTimeZone } from '@internationalized/date';

import styles from './CalendarCell.module.css';

export const CalendarCell = ({ state, date, isDefaultDate }) => {
  const ref = useRef(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate
  } = useCalendarCell({ date }, state, ref);

  return (
    <td {...cellProps} align="center">
      <div
        {...buttonProps}
        ref={ref}
        // hidden={isOutsideVisibleRange}
        className={`${styles.cell} ${isSelected ? styles.selected : ''} ${
          isDisabled || isOutsideVisibleRange ? styles.disabled : ''
        } ${isUnavailable ? styles.unavailable : ''}
        ${isDefaultDate ? styles.defaultDate : ''}
        `}
      >
        {formattedDate}
      </div>
    </td>
  );
};
