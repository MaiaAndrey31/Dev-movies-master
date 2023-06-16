import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Cards'
import { Container } from './style'

function Slider({ info, title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabcursor
        spaceBetween={15}
        slidePerView={'auto'}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
export default Slider
