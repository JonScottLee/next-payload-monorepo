'use client'

import { StripBlockFields } from '@/utils/strip-block-fields'
import { IImageGalleryBlock, type Media } from '@org/cms'
import { FC, useState } from 'react'
import { Block } from '@blocks/block'
import { Image } from '../../image/image'
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export const ImageGalleryBlock: FC<StripBlockFields<IImageGalleryBlock>> = ({
  blockHeader,
  images = [],
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null)
  const [swiperClasses, setSwiperClasses] = useState<string>('invisible')

  return (
    <Block>
      <Block.Header {...blockHeader} />

      <Block.Body className={`w-1/2 ${swiperClasses}`}>
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: !thumbsSwiper?.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          onAfterInit={() => setSwiperClasses('')}
        >
          {images.map((imageRoot, id) => {
            const imageProps = imageRoot.image as unknown as Media
            return (
              <SwiperSlide>
                <Image key={id} {...imageProps} />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="image-gallery-swiper"
        >
          {images.map((imageRoot, id) => {
            const imageProps = imageRoot.image as unknown as Media
            return (
              <SwiperSlide>
                <Image key={id} {...imageProps} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Block.Body>
    </Block>
  )
}
