// ------------------------------------------------------ 6 page - Schedule

import React from 'react';
import * as LayoutStyle from './../styled-components/LayoutStyle';
import * as PageScheduleStyle from './../styled-components/PageScheduleStyle';

const week = ['', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const dayTime = ['9-00', '10-00', '11-00', '12-00', '13-00', '14-00', '15-00', '16-00', '17-00', '18-00', '19-00', '20-00', '21-00'];
/* Элемент шапки таблицы расписания */ 
const weekDay = week.map((elem, index) => {
    return <PageScheduleStyle.ScheduleTableHeadItem key={index}><p>{elem}</p></PageScheduleStyle.ScheduleTableHeadItem>
});
/* Формирование таблицы расписания */ 
const tableWeek = dayTime.map((row, row_index) => {
     /* Ряд таблицы расписания*/
    return <PageScheduleStyle.ScheduleTableRow key={row_index}>
                { 
                    /* Элемент таблицы расписания*/ 
                    week.map((column, column_index) => {
                            return <PageScheduleStyle.ScheduleTableItem key={column_index}>
                                        <p>{ column_index === 0 ? row : `some data` }</p>
                                </PageScheduleStyle.ScheduleTableItem>
                            }) 
                }
    </PageScheduleStyle.ScheduleTableRow>
});

const day = 'суббота';
const PageSchedule = (props) => <LayoutStyle.RectangleBlock screenHeight = {`auto`} bgColorStyle={`rgba(0,0,255,0.5)`}>
    <PageScheduleStyle.WrapScheduleTable>
        <p>{`расписание на ${day}`}</p>
        <PageScheduleStyle.ScheduleTableHead>
            {weekDay}     
        </PageScheduleStyle.ScheduleTableHead>
        <PageScheduleStyle.ScheduleTable>
            {tableWeek}
        </PageScheduleStyle.ScheduleTable>
    </PageScheduleStyle.WrapScheduleTable>
</LayoutStyle.RectangleBlock>

export default PageSchedule;