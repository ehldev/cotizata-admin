import React, { useState } from 'react'
import {
  Carousel as CarouselBasic,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap'
import sliderImage1 from '../../assets/images/pages/content-img-1.jpg'
import sliderImage2 from '../../assets/images/pages/content-img-2.jpg'
import sliderImage3 from '../../assets/images/pages/content-img-3.jpg'

import styles from './styles.module.css'

const images = [
  {
    src: sliderImage1,
    id: 1
  },
  {
    src: sliderImage2,
    id: 2
  },
  {
    src: sliderImage3,
    id: 3
  }
]

const Carrousel = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(0)

  const onExiting = () => {
    setAnimating(true)
  }

  const onExited = () => {
    setAnimating(false)
  }

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = images.map((item) => {
    return (
      <CarouselItem
        // className="w-100"
        onExiting={onExiting}
        onExited={onExited}
        key={item.id}
      >
        <img
          alt={item.id}
          src={item.src}
          className={`rounded mx-auto d-block ${styles['image-carousel']}`}
        />
      </CarouselItem>
    )
  })
  return (
    <CarouselBasic activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={images}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </CarouselBasic>
  )
}

export default Carrousel
