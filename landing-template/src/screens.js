/*eslint-disable no-unused-vars*/
import React from 'react';
// import * as LayoutStyle from "./styled-components/LayoutStyle";

// ------------------------------------------------------ 1 page - Entry

import PageEntry from "./components/PageTemplateEntry";

// ------------------------------------------------------ 2 page - Photo

import PagePhoto from "./components/PageTemplatePhoto";

// ------------------------------------------------------ 3 page - Video

import PageVideo from "./components/PageTemplateVideo";

// ------------------------------------------------------ 4 page - Child

// import PageChild from "./components/PageTemplateChild";

// ------------------------------------------------------ 5 page - Adult

// import PageAdult from "./components/PageTemplateAdult";

// ------------------------------------------------------ 6 page - Schedule

import PageSchedule from "./components/PageTemplateSchedule";

// ------------------------------------------------------ 7 page - Team

import PageTeam from "./components/PageTemplateTeam";

// ------------------------------------------------------ 8 page - Price

import PagePrice from "./components/PageTemplatePrice";

// ------------------------------------------------------ 9 page - Contacts

import PageContact from "./components/PageTemplateContact";

// ------------------------------------------------------ 

const array_to_export = [
    { component: PageEntry, name: `entry` },
    { component: PagePhoto, name: `photo_page` },
    { component: PageVideo, name: `video_page` },
    // { component: PageChildProgram, name: `children_programms` },
    // { component: PageAdultdProgram, name: `adults_programms` },
    { component: PageSchedule, name: `schedule` },
    { component: PageTeam, name: `team` },
    { component: PagePrice, name: `price` },
    { component: PageContact, name: `contacts` }
]

export default array_to_export;
/*eslint-enable no-unused-vars*/