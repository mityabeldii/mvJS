// ------------------------------------------------------ 1 page - ENTRY

import React from 'react';
import * as LayoutStyle from './../styled-components/LayoutStyle';
import * as PageEntryStyle from './../styled-components/PageEntryStyle';


const PageEntry = (props) => {
    return (
        <LayoutStyle.RectangleBlock screenHeight = {`100vh`} bgColorStyle={`rgba(255,0,255,0.5)`}>

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

export default PageEntry;