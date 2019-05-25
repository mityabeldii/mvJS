/*eslint-disable no-unused-vars*/
import React from 'react';
import * as LayoutStyle from "./styled-components/LayoutStyle";
import * as PageEntryStyle from "./styled-components/PageEntryStyle";
import * as PagePhotoStyle from "./styled-components/PagePhotoStyle";
import * as PageVideoStyle from "./styled-components/PageVideoStyle";
import * as PageScheduleStyle from "./styled-components/PageScheduleStyle";
import * as PageTeamStyle from "./styled-components/PageTeamStyle";
import * as PagePriceStyle from "./styled-components/PagePriceStyle";
import * as PageContactStyle from "./styled-components/PageContactStyle";

// ------------------------------------------------------ 1 page - ENTRY

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

// ------------------------------------------------------ 2 page - PHOTO

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

// ------------------------------------------------------ 3 page - VIDEO

const PageVideo = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`rgba(0,255,0,0.5)`}>
    <PageVideoStyle.WrapVideo />
    <PageVideoStyle.WrapTourWatch />
</LayoutStyle.RectangleBlock>

// ------------------------------------------------------ 4 page

// ------------------------------------------------------ 5 page

// ------------------------------------------------------ 6 page - Schedule

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

// ------------------------------------------------------ 7 page - Team

const ourTeamBlock = [
    { trainerName: `Vadim`, trainerPhoto: './img/photo1.jpg' }, '',
    { trainerName: 'Maxim', trainerPhoto: './img/photo2.jpg' }, '',
    { trainerName: 'Nikodim', trainerPhoto: './img/photo3.jpg' }, '',
    { trainerName: 'Karim', trainerPhoto: './img/photo4.jpg' }, '',
    { trainerName: 'Muslim', trainerPhoto: './img/photo5.jpg' }, '',
    { trainerName: 'Aniddim', trainerPhoto: './img/photo6.jpg' }, '',
    { trainerName: 'Serafim', trainerPhoto: './img/photo8.jpg' }, ''
]
const ourTeam = ourTeamBlock.map((team_item, team_item_index) => {
        if(team_item_index % 2 === 0){
            return <PageTeamStyle.TeamItem key={team_item_index}><p>{team_item.trainerName}</p></PageTeamStyle.TeamItem>
        } return <PageTeamStyle.TeamItemEmpty key={team_item_index}></PageTeamStyle.TeamItemEmpty>
    }
);
const PageTeam = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`rgba(0,255,255,0.25)`}>
    <p>{`наши тренеры`}</p>
    <PageTeamStyle.WrapTeam>
        {ourTeam}
    </PageTeamStyle.WrapTeam>
</LayoutStyle.RectangleBlock>

// ------------------------------------------------------ 8 page - Price

const priceRate = ['', 'первый', 'второй', 'третий', 'четвертый'];
const priceCost = ['100', '200', '300', '400', '500', '600', '700', '800'];
/* Элемент шапки таблицы прайса */ 
const price = priceRate.map((rate, priceRate_index) => {
    return <PagePriceStyle.PriceTableHeadItem key={priceRate_index}><p>{rate}</p></PagePriceStyle.PriceTableHeadItem>
});
/* Формирование таблицы расценок*/ 
const tablePrice = priceCost.map((cost_row, cost_row_index) => {
     /* Ряд таблицы расценок*/
    return <PagePriceStyle.PriceTableRow key={cost_row_index}>
                { 
                    /* Элемент таблицы расценок*/ 
                    priceRate.map((cost_column, cost_column_index) => {
                            return <PagePriceStyle.PriceTableItem key={cost_column_index}>
                                        <p>{ cost_column_index === 0 ? cost_row : `some data` }</p>
                                </PagePriceStyle.PriceTableItem>
                            }) 
                }
    </PagePriceStyle.PriceTableRow>
});

const PagePrice = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`rgba(0,255,0,0.5)`}>
    <PagePriceStyle.WrapPriceTable>
        <p>{`расценки`}</p>
        <PagePriceStyle.PriceTableHead>
            {price}     
        </PagePriceStyle.PriceTableHead>
        <PagePriceStyle.PriceTable>
            {tablePrice}
        </PagePriceStyle.PriceTable>
    </PagePriceStyle.WrapPriceTable>
</LayoutStyle.RectangleBlock>

// ------------------------------------------------------ 9 page - CONTACTS

const PageContact = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`rgba(255,0,0,0.5)`}>
    <PageContactStyle.WrapContacts />
    <PageContactStyle.WrapFooter>
        <PageContactStyle.FooterFirstLine>
            <p>Текст футера 1</p>
        </PageContactStyle.FooterFirstLine>
    </PageContactStyle.WrapFooter>
</LayoutStyle.RectangleBlock>

// ------------------------------------------------------ 

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
    {
        component: PageTeam,
        name: `team`
    },
    {
        component: PagePrice,
        name: `price`
    },
    {
        component: PageContact,
        name: `contacts`
    }
]

export default array_to_export;
/*eslint-enable no-unused-vars*/