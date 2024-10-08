import { BrowserRouter as Router, Routes, Route, useNavigate,useLocation } from 'react-router-dom';
import React, { useState,useEffect } from  'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import { Navigation, Pagination } from "swiper/modules";
import { Container, Fab } from '@mui/material';

function Education() {
    const [queryid,setQueryid] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const image = {
      // '1':['./img/',''],
      '1':['/img/1/1.jpg','/img/1/2.jpg','/img/1/3.jpg','/img/1/4.jpg','/img/1/5.jpg','/img/1/6.jpg','/img/1/7.jpg'],
      '2':['/img/2/1.jpg','/img/2/2.jpg','/img/2/3.jpg','/img/2/4.jpg','/img/2/5.jpg','/img/2/6.jpg','/img/2/7.jpg'],

    }
    const images = image[queryid] || [];

    useEffect(() =>{
      const query = new URLSearchParams(location.search);
      const id = query.get('id');
      if (id) {
        setQueryid(id);
      }
    }, [location])
    const onClickFab=()=>{
    navigate(`/education?id=${Number(queryid)+1}`)}
    return (
      <Container sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ textAlign: "center"}}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index+1}`} style={{ width: "100%", height: "auto", maxWidth: "960px", maxHeight: "540px" }}/>
            </SwiperSlide>
        ))}
        </Swiper>
        <Fab
        color="primary"
        aria-label="next-page"
        variant='extended'
        onClick={onClickFab}
        style={{position: 'fixed',bottom: 20,right: 20,}}
        >
        次の資料を見る
        </Fab>
      </Container>
    )
};
export default Education;