// ------------------------------------------------------ 3 page - VIDEO

import React from 'react';
import * as LayoutStyle from './../styled-components/LayoutStyle';
import * as PageVideoStyle from './../styled-components/PageVideoStyle';

const PageVideo = (props) => <LayoutStyle.RectangleBlock screenHeight = {`100vh`} bgColorStyle={`rgba(0,255,0,0.5)`}>
    <PageVideoStyle.WrapVideo />
    <PageVideoStyle.WrapTourWatch />
</LayoutStyle.RectangleBlock>

export default PageVideo;
