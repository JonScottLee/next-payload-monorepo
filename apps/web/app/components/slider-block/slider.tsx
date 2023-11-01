'use client'

import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { StripBlockFields } from '@/utils'

import { ISlider } from '@org/cms'
import { AllBlocks } from '../render-blocks/types'
import { TestimonialBlock } from '../testimonial-block/testimonial-block'
import { CallToActionBlock } from '../call-to-action-block/call-to-action-block'
import { FancyTextBlock } from '../fancy-text-block/fancy-text-block'
import { FormBlock } from '../form-builder/form'
import { MediaBlock } from '../media-block/media-block'
import { NumberToutBlock } from '../number-tout-block/number-tout-block'
import { TextBlock } from '../text-block/text-block'
import { normalizeBlocks } from '@/utils/normalize-blocks'
import { renderBlock } from '../render-blocks/render-blocks'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { BlockHeaderField } from '../block-header-field/block-header-field'

const childBlocks = {
  'call-to-action-block': CallToActionBlock,
  'fancy-text-block': FancyTextBlock,
  'form-block': FormBlock,
  'media-block': MediaBlock,
  'number-tout-block': NumberToutBlock,
  'text-block': TextBlock,
  'testimonial-block': TestimonialBlock,
}

export const SliderBlock: FC<StripBlockFields<ISlider>> = ({
  blockHeader,
  blocks: _blocks,
  trailingContent,
}) => {
  const { showHeader, headerText } = blockHeader || {}

  if (!_blocks) return null

  let blocks: AllBlocks[] = normalizeBlocks(_blocks)

  return (
    <>
      <BlockHeaderField showHeader={showHeader} headerText={headerText} />

      <div className="text-center mx-auto md:w-3/4 lg:w-1/3">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          {blocks.map((block) => (
            <SwiperSlide key={block.id}>
              <div className="pb-10">{renderBlock({ componentMap: childBlocks, block })}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-10">
        <RichText content={trailingContent} />
      </div>
    </>
  )
}
