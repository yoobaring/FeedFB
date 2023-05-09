import React, { useState, useEffect } from "react";
import moment from "moment";
import 'moment/locale/th';
import { FaCalendarAlt } from 'react-icons/fa';
import { setFormatDateGMT, setFormatDateTime, setFormatDayDateTime } from '../function/function';


export const Calendar = () => {
      const [date, setDate] = useState(moment());

      useEffect(() => {
      moment.locale('th');
      const timer = setInterval(() => {
            setDate(moment());
      }, 1000 * 60);

      return () => clearInterval(timer);
      }, []);
            
      const calendar = (
            <>
                  &emsp;<FaCalendarAlt/>
                  <a>&emsp;{setFormatDateTime(setFormatDateGMT(date))}</a>

            </>
      )
      return calendar
}

export const Image = ({ item, style_, styles, style }) => {
      const content = (
            <div className={style_}>
                  <img className={styles} src={item} style={style}/>
            </div>
      )
      return content
}

