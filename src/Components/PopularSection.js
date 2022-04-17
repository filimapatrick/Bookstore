import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import BookItem from './BookItem';
import 'swiper/swiper-bundle.min.css';
import Popular from '../assets/Popular';


// install Swiper modules
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`

h1{
  margin-top:2rem;
  margin-bottom:-3rem;
  margin-left:5rem;
}

  .swiper-container {
    padding-top: 5rem;
    max-width: 100%;
    
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 30px;
    width: 30px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 3rem;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
 
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export default function PopularSection() {
  // console.log(projects);
  return (
    <ProjectSectionStyle>
      
      <div className="container">
      <h1>popular</h1>
         <div className="projects__allItems">
        
     <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >

     {
       Popular.map((Populars,index)=>{
         if(index>=7) return;
         return(
           <SwiperSlide key={Populars.id}>
              <BookItem
              title={Populars.name}
              img={Populars.img}

              />
           </SwiperSlide>
         )
       })
     }
     </Swiper>
     </div> 
      </div>
    </ProjectSectionStyle>
  );
}
