import { useCalendar } from '@react-aria/calendar';
import { useCalendarState } from '@react-stately/calendar';
import { useLocale } from '@react-aria/i18n';
import { createCalendar } from '@internationalized/date';
import { CalendarGrid } from './CalendarGrid';
import { useRef } from 'react';
import { Button } from '@joshuadotson/ui';

import styles from './Calendar.module.css';

export const Calendar = (props) => {
  const defaultDate = useRef(props.value);
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar
  });

  const ref = useRef(null);
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state);

  return (
    <div {...calendarProps} ref={ref}>
      <div className="header">
        <h2 style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Button {...prevButtonProps}>&lt;</Button>
          <Button {...nextButtonProps}>&gt;</Button>
          {title}
        </h2>
      </div>
      <CalendarGrid state={state} defaultDate={defaultDate} />
    </div>
  );
};
