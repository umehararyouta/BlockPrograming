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

    useEffect(() =>{
      const query = new URLSearchParams(location.search);
      const id = query.get('id');
      console.log(id)
      if (id) {
        setQueryid(id);
      }
    })
    const onClickFab=()=> navigate(`/programpage?id=${queryid}`)
    return (
      <Container sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ textAlign: "center" }}
        >
          <SwiperSlide><img src="http://placehold.jp/700x400.png?text=1" alt=""/></SwiperSlide>
          <SwiperSlide><img src="http://placehold.jp/700x400.png?text=2" alt=""/></SwiperSlide>
          <SwiperSlide><img src="http://placehold.jp/700x400.png?text=3" alt=""/></SwiperSlide>
          <SwiperSlide><img src="http://placehold.jp/700x400.png?text=4" alt=""/></SwiperSlide>
        </Swiper>
        <Fab
        color="primary"
        aria-label="next-page"
        variant='extended'
        onClick={onClickFab}
        style={{position: 'fixed',bottom: 20,right: 20,}}
        >
        問題を解いてみる
        </Fab>
      </Container>
    )
};
export default Education;