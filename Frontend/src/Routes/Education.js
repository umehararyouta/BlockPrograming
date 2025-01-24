import { BrowserRouter as Router, Routes, Route, useNavigate,useLocation } from 'react-router-dom';
import React, { useState,useEffect,useRef } from  'react';

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
    const swiperRef = useRef(null);

    const image = {
      '1':['/img/1/1 はじめに_01.jpeg','/img/1/1 はじめに_02.jpeg','/img/1/1 はじめに_03.jpeg','/img/1/1 はじめに_04.jpeg','/img/1/1 はじめに_05.jpeg','/img/1/1 はじめに_06.jpeg',],
      '2':['/img/2/2 Pythonについて_01.jpeg','/img/2/2 Pythonについて_02.jpeg','/img/2/2 Pythonについて_03.jpeg','/img/2/2 Pythonについて_04.jpeg','/img/2/2 Pythonについて_05.jpeg','/img/2/2 Pythonについて_06.jpeg','/img/2/2 Pythonについて_07.jpeg','/img/2/2 Pythonについて_08.jpeg','/img/2/2 Pythonについて_09.jpeg',],
      '3':['/img/3/3 入力と出力_01.jpeg','/img/3/3 入力と出力_02.jpeg','/img/3/3 入力と出力_03.jpeg','/img/3/3 入力と出力_04.jpeg','/img/3/3 入力と出力_05.jpeg','/img/3/3 入力と出力_06.jpeg',],
      '4':['/img/5/5 変数と代入_01.jpeg','/img/5/5 変数と代入_02.jpeg','/img/5/5 変数と代入_03.jpeg','/img/5/5 変数と代入_04.jpeg','/img/5/5 変数と代入_05.jpeg','/img/5/5 変数と代入_06.jpeg',],
      '5':['/img/7/7 プログラムと計算_01.jpeg','/img/7/7 プログラムと計算_02.jpeg','/img/7/7 プログラムと計算_03.jpeg','/img/7/7 プログラムと計算_04.jpeg','/img/7/7 プログラムと計算_05.jpeg','/img/7/7 プログラムと計算_06.jpeg',],
      '6':[],
      '7':[],
      '8':[],
      '9':[],
      '10':[],
      '11':[],
      '12':[],
      '13':[],
      '14':[],
      '15':[],
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
      if (swiperRef.current) {
        swiperRef.current.slideTo(0);
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
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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