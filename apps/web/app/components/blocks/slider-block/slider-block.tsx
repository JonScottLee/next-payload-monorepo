'use client'

import { FC } from 'react'
import { RichText } from '../../fields/rich-text/rich-text'
import { StripBlockFields } from '@utils/strip-block-fields'

import { ISlider, type Page } from '@org/cms'
import { TestimonialBlock } from '../testimonial-block/testimonial-block'
import { CallToActionBlock } from '../call-to-action-block/call-to-action-block'
import { FancyTextBlock } from '../fancy-text-block/fancy-text-block'
import { FormBlock } from '../../form-builder/form'
import { MediaBlock } from '../media-block/media-block'
import { NumberToutBlock } from '../number-tout-block/number-tout-block'
import { TextBlock } from '../text-block/text-block'
import { normalizeBlocks } from '@/utils/normalize-blocks'
import { renderBlock } from '../block-helpers/render-blocks'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Block } from '@blocks/block'
import { ImageBlock } from '../image-block'

const childBlocks = {
  'call-to-action-block': CallToActionBlock,
  'fancy-text-block': FancyTextBlock,
  'form-block': FormBlock,
  'image-block': ImageBlock,
  'media-block': MediaBlock,
  'number-tout-block': NumberToutBlock,
  'testimonial-block': TestimonialBlock,
  'text-block': TextBlock,
}

export const SliderBlock: FC<StripBlockFields<ISlider>> = ({
  blockHeader,
  // blocks: _blocks,
}) => {
  return 'Slider Block'

  // if (!_blocks) return null

  // let blocks: Page['blocks'] = normalizeBlocks(_blocks)

  // return (
  //   <Block className="text-center mx-auto md:w-3/4 lg:w-2/3">
  //     <Block.Header {...blockHeader} />

  //     <Block.Body>
  //       <Swiper
  //         modules={[Navigation, Pagination, Scrollbar, A11y]}
  //         onSlideChange={() => console.log('slide change')}
  //         onSwiper={(swiper) => console.log(swiper)}
  //         pagination={{ clickable: true }}
  //         slidesPerView={3}
  //       >
  //         {blocks.map((block) => (
  //           <SwiperSlide key={block.id}>
  //             <div className="pb-10">{renderBlock({ componentMap: childBlocks, block })}</div>
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     </Block.Body>
  //   </Block>
  // )
}
