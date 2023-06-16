import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from './styles'

function Slider({ info, title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabcursor
        spaceBetween={10}
        slidePerView={'auto'}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <div>{item.original_title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
export default Slider
