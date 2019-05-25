// ------------------------------------------------------ 9 page - CONTACTS

import React from 'react';
import * as LayoutStyle from './../styled-components/LayoutStyle';
import * as PageContactStyle from './../styled-components/PageContactStyle';

const PageContact = (props) => <LayoutStyle.RectangleBlock screenHeight = {`100vh`} bgColorStyle = {`rgba(255,0,0,0.5)`}>
    <PageContactStyle.WrapContacts />
    <PageContactStyle.WrapFooter>
        <PageContactStyle.FooterFirstLine>
            <p>Текст футера 1</p>
        </PageContactStyle.FooterFirstLine>
    </PageContactStyle.WrapFooter>
</LayoutStyle.RectangleBlock>

export default PageContact;