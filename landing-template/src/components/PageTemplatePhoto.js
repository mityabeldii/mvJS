// ------------------------------------------------------ 2 page - PHOTO

import React from 'react';
import * as LayoutStyle from './../styled-components/LayoutStyle';
import * as PagePhotoStyle from './../styled-components/PagePhotoStyle';

const PagePhoto = (props) => <LayoutStyle.RectangleBlock screenHeight = {`100vh`} bgColorStyle={`rgba(0,255,255,0.25)`}>
<PagePhotoStyle.WrapLevelOne heightStyle={`70%`} borderColor={`yellow`} />
<PagePhotoStyle.WrapLevelOne heightStyle={`30%`} borderColor={`red`}>
    <PagePhotoStyle.WrapLevelTwo widthStyle={`50%`}>
        <p>Попробуйте сегодня</p>
    </PagePhotoStyle.WrapLevelTwo>
    <PagePhotoStyle.WrapLevelTwo widthStyle={`30%`} />
    <PagePhotoStyle.WrapLevelTwo widthStyle={`20%`} />
</PagePhotoStyle.WrapLevelOne>
</LayoutStyle.RectangleBlock>

export default PagePhoto;