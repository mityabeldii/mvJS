/*eslint-disable no-unused-vars*/
import React from 'react'
import * as LayoutStyle from "./styled-components/LayoutStyle"
import * as PageFirstStyle from "./styled-components/PageFirstStyle"
import * as PageSecondStyle from "./styled-components/PageSecondStyle"
import * as PageThirdStyle from "./styled-components/PageThirdStyle"
import * as PageFourthStyle from "./styled-components/PageFourthStyle"

// first page
const PageFirst = (props) => {
    return (
        <LayoutStyle.RectangleBlock bgColorStyle={`purple`} />
    )
};

// second page
const PageSecond = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`green`}>
    <PageSecondStyle.WrapLevelOne heightStyle={`70%`} borderColor={`yellow`} />
    <PageSecondStyle.WrapLevelOne heightStyle={`30%`} borderColor={`red`}>
        <PageSecondStyle.WrapLevelTwo widthStyle={`50%`}>
            <p>Попробуйте сегодня</p>
        </PageSecondStyle.WrapLevelTwo>
        <PageSecondStyle.WrapLevelTwo widthStyle={`30%`} />
        <PageSecondStyle.WrapLevelTwo widthStyle={`20%`} />
    </PageSecondStyle.WrapLevelOne>
</LayoutStyle.RectangleBlock>

// third page
const PageThird = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`blue`}>
    <PageThirdStyle.WrapVideo />
    <PageThirdStyle.WrapTourWatch />
</LayoutStyle.RectangleBlock>

// fourth page
const PageFourth = (props) => <LayoutStyle.RectangleBlock bgColorStyle={`green`}>
    <PageFourthStyle.WrapContacts />
    <PageFourthStyle.WrapFooter>
        <PageFourthStyle.FooterFirstLine>
            <p>Текст футера 1</p>
        </PageFourthStyle.FooterFirstLine>
    </PageFourthStyle.WrapFooter>
</LayoutStyle.RectangleBlock>

let array_to_export = [
    {
        component: PageFirst,
        name: `entry`,
    },
    {
        component: PageSecond,
        name: `photo_page`,
    },
    {
        component: PageThird,
        name: `video_page`,
    },
    // {
    //     component: null,
    //     name: `children_programms`,
    // },
    // {
    //     component: null,
    //     name: `adults_programms`,
    // },
    // {
    //     component: null,
    //     name: `schedule`,
    // },
    // {
    //     component: null,
    //     name: `team`,
    // },
    // {
    //     component: null,
    //     name: `price`,
    // },
    {
        component: PageFourth,
        name: `contacts`,
    }]

export default array_to_export;
/*eslint-enable no-unused-vars*/