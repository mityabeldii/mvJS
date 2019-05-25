// ------------------------------------------------------ 8 page - Price

import React from 'react';
import * as LayoutStyle from './../styled-components/LayoutStyle';
import * as PagePriceStyle from './../styled-components/PagePriceStyle';

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

const PagePrice = (props) => <LayoutStyle.RectangleBlock screenHeight = {`auto`} bgColorStyle={`rgba(0,255,0,0.5)`}>
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

export default PagePrice;