// ------------------------------------------------------ 7 page - Team

import React from 'react';
import * as LayoutStyle from './../styled-components/LayoutStyle';
import * as PageTeamStyle from './../styled-components/PageTeamStyle';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'

const ourTeamBlock = [
    { trainerName: `Vadim`, trainerPhoto: './img/photo1.jpg' },
    { trainerName: 'Maxim', trainerPhoto: './img/photo2.jpg' },
    { trainerName: 'Nikodim', trainerPhoto: './img/photo3.jpg' },
    { trainerName: 'Karim', trainerPhoto: './img/photo4.jpg' },
    { trainerName: 'Muslim', trainerPhoto: './img/photo5.jpg' },
    { trainerName: 'Aniddim', trainerPhoto: './img/photo6.jpg' },
    { trainerName: 'Serafim', trainerPhoto: './img/photo8.jpg' }
]
const ourTeam = ourTeamBlock.map((team_item, team_item_index) => {
    return <PageTeamStyle.TeamItem key={team_item_index}><p>{team_item.trainerName}</p></PageTeamStyle.TeamItem>
});

const SimpleSwiperWithParams = () => {
    const params = {
        modules: [Pagination, Navigation],
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        spaceBetween: 30,
        slidesPerView: 6,
        loop: true,
        autoplay: {
            delay: 3000,
          },
          breakpoints: {
            1366: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            //   spaceBetween: 10
            }
        }
      }
      return(
        <Swiper {...params}>
          {ourTeam}
        </Swiper>
      )
}

const PageTeam = (props) => <LayoutStyle.RectangleBlock screenHeight = {`auto`} bgColorStyle={`rgba(0,255,255,0.25)`}>
    <p>{`наши тренеры`}</p>
    <PageTeamStyle.WrapTeam>
        <SimpleSwiperWithParams/>
    </PageTeamStyle.WrapTeam>
    
</LayoutStyle.RectangleBlock>

export default PageTeam;