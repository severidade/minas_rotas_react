import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "swiper/css/effect-fade";

import'./Slider.css'

export default function Slider( { settings, children }) {
  return <Swiper modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}{...settings}>
    { children }
  </Swiper>;
}