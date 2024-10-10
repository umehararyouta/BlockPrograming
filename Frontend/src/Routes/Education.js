import { BrowserRouter as Router, Routes, Route, useNavigate,useLocation } from 'react-router-dom';
import React, { useState,useEffect } from  'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import { Navigation, Pagination } from "swiper/modules";
import { Container, Fab } from '@mui/material';
import axios from 'axios';

function Education() {
    const [queryid,setQueryid] = useState(null);
    const [activeindex,setActiveindex] = useState(0);
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

    const onClickFab=async()=>{
      try{
      const token = localStorage.getItem('token')
      console.log('start get progress')
      const res = await axios.get('http://127.0.0.1:5000/getprogress',{headers: { Authorization: `Bearer ${token}`}})
      console.log('get progress done',res.data)
      const bitProgress = res.data.progress |(1<<queryid-1);
      console.log('start save progress')
      const ress = await axios.post('http://127.0.0.1:5000/saveprogress',{ progress: bitProgress },{headers: { Authorization: `Bearer ${token}`}})
      console.log('saveprogess done',bitProgress,ress.data)
      }catch(error){
        console.log(error);
      }
      navigate(`/education?id=${Number(queryid)+1}`)
    }

    const onSlideChange = (swiper) => {
      setActiveindex(swiper.activeIndex);
      console.log(swiper.activeIndex)
    }
    return (
      <Container sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ textAlign: "center"}}
        onSlideChange={onSlideChange}
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
        // disabled={images.map(((image,index)=>index.length -1 !== activeindex))}
        disabled={activeindex !== images.length - 1}
        >
        次の資料を見る
        </Fab>
      </Container>
    )
};
export default Education;