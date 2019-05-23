/*eslint-disable no-unused-vars*/
import React from 'react';
import * as LayoutStyle from "./styled-components/LayoutStyle";
import * as PageEntryStyle from "./styled-components/PageEntryStyle";
import * as PagePhotoStyle from "./styled-components/PagePhotoStyle";
import * as PageVideoStyle from "./styled-components/PageVideoStyle";
import * as PageScheduleStyle from "./styled-components/PageScheduleStyle";
import * as PageContactStyle from "./styled-components/PageContactStyle";

// 1 page - ENTRY
const PageEntry = (props) => {
    return (
        <LayoutStyle.RectangleBlock bgColorStyle={`rgba(255,0,255,0.5)`}>

            <PageEntryStyle.EntryWrap>

                <PageEntryStyle.EntryBlock>

                    <PageEntryStyle.EntryLogo/>
                    
                    <PageEntryStyle.EntryExerciseWrap>
                        <PageEntryStyle.EntryExercise>

                        </PageEntryStyle.EntryExercise>

                        <PageEntryStyle.EntryKnowMore>

                        </PageEntryStyle.EntryKnowMore>
                    </PageEntryStyle.EntryExerciseWrap>

                </PageEntryStyle.EntryBlock>

                <PageEntryStyle.EntryBlock>

                    <PageEntryStyle.EntryCall/>
                    <PageEntryStyle.EntryExerciseWrap>
                        <PageEntryStyle.EntryExercise>

                        </PageEntryStyle.EntryExercise>
                        <PageEntryStyle.EntryKnowMore>

                        </PageEntryStyle.EntryKnowMore>
                    </PageEntryStyle.EntryExerciseWrap>

                </PageEntryStyle.EntryBlock>

            </PageEntryStyle.EntryWrap>

        </LayoutStyle.RectangleBlock>
    )
};

// 2 page - PHOTO
const PagePhoto = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`rgba(0,255,255,0.25)`}>
    <PagePhotoStyle.WrapLevelOne heightStyle={`70%`} borderColor={`yellow`} />
    <PagePhotoStyle.WrapLevelOne heightStyle={`30%`} borderColor={`red`}>
        <PagePhotoStyle.WrapLevelTwo widthStyle={`50%`}>
            <p>Попробуйте сегодня</p>
        </PagePhotoStyle.WrapLevelTwo>
        <PagePhotoStyle.WrapLevelTwo widthStyle={`30%`} />
        <PagePhotoStyle.WrapLevelTwo widthStyle={`20%`} />
    </PagePhotoStyle.WrapLevelOne>
</LayoutStyle.RectangleBlock>

// 3 page - VIDEO
const PageVideo = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`rgba(0,255,0,0.5)`}>
    <PageVideoStyle.WrapVideo />
    <PageVideoStyle.WrapTourWatch />
</LayoutStyle.RectangleBlock>

// 4 page

// 6 page - Schedule
const week = ['', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const dayTime = ['9-00', '10-00', '11-00', '12-00', '13-00', '14-00', '15-00', '16-00', '17-00', '18-00', '19-00', '20-00', '21-00'];
/* Элемент шапки таблицы */ 
const weekDay = week.map((elem, index) => {
    return <PageScheduleStyle.ScheduleTableHeadItem key={index}><p>{elem}</p></PageScheduleStyle.ScheduleTableHeadItem>
});
/* Формирование таблицы */ 
const tableWeek = dayTime.map((row, row_index) => {
     /* Ряд таблицы */
    return <PageScheduleStyle.ScheduleTableRow key={row_index}>
                { 
                    /* Элемент таблицы */ 
                    week.map((column, column_index) => {
                            return <PageScheduleStyle.ScheduleTableItem key={column_index}>
                                        <p>{ column_index === 0 ? row : `some data` }</p>
                                </PageScheduleStyle.ScheduleTableItem>
                            }) 
                }
    </PageScheduleStyle.ScheduleTableRow>
});

const day = 'суббота';
const PageSchedule = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`rgba(0,0,255,0.5)`}>
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

// 8 page - CONTACTS
const PageContact = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`rgba(255,0,0,0.5)`}>
    <PageContactStyle.WrapContacts />
    <PageContactStyle.WrapFooter>
        <PageContactStyle.FooterFirstLine>
            <p>Текст футера 1</p>
        </PageContactStyle.FooterFirstLine>
    </PageContactStyle.WrapFooter>
</LayoutStyle.RectangleBlock>

let array_to_export = [
    {
        component: PageEntry,
        name: `entry`
    },
    {
        component: PagePhoto,
        name: `photo_page`
    },
    {
        component: PageVideo,
        name: `video_page`
    },
    // {
    //     component: PageChildProgram,
    //     name: `children_programms`
    // },
    // {
    //     component: PageAdultdProgram,
    //     name: `adults_programms`
    // },
    {
        component: PageSchedule,
        name: `schedule`
    },
    // {
    //     component: PageTeam,
    //     name: `team`
    // },
    // {
    //     component: PagePrice,
    //     name: `price`
    // },
    {
        component: PageContact,
        name: `contacts`
    }
]

export default array_to_export;
/*eslint-enable no-unused-vars*/