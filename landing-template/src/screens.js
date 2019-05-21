/*eslint-disable no-unused-vars*/
import React from 'react'
import * as LayoutStyle from "./styled-components/LayoutStyle"
import * as PageEntryStyle from "./styled-components/PageEntryStyle"
import * as PagePhotoStyle from "./styled-components/PagePhotoStyle"
import * as PageVideoStyle from "./styled-components/PageVideoStyle"
import * as PageContactStyle from "./styled-components/PageContactStyle"

// first page
const PageEntry = (props) => {
    return (
        <LayoutStyle.RectangleBlock bgColorStyle={`purple`}>
            <PageEntryStyle.EntryWrap>
                <PageEntryStyle.EntryBlock/>
                <PageEntryStyle.EntryBlock/>
            </PageEntryStyle.EntryWrap>
        </LayoutStyle.RectangleBlock>
    )
};

// second page
const PagePhoto = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`green`}>
    <PagePhotoStyle.WrapLevelOne heightStyle={`70%`} borderColor={`yellow`} />
    <PagePhotoStyle.WrapLevelOne heightStyle={`30%`} borderColor={`red`}>
        <PagePhotoStyle.WrapLevelTwo widthStyle={`50%`}>
            <p>Попробуйте сегодня</p>
        </PagePhotoStyle.WrapLevelTwo>
        <PagePhotoStyle.WrapLevelTwo widthStyle={`30%`} />
        <PagePhotoStyle.WrapLevelTwo widthStyle={`20%`} />
    </PagePhotoStyle.WrapLevelOne>
</LayoutStyle.RectangleBlock>

// third page
const PageVideo = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`blue`}>
    <PageVideoStyle.WrapVideo />
    <PageVideoStyle.WrapTourWatch />
</LayoutStyle.RectangleBlock>

// fourth page
const PageContact = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`green`}>
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
    // {
    //     component: PageSchedule,
    //     name: `schedule`
    // },
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