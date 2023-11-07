import { StripBlockFields } from '@/utils/strip-block-fields'
import { IImageBlock, Media } from '@org/cms'
import { FC } from 'react'
import { Block } from '../block'
import { Image } from '../../image/image'

export const ImageBlock: FC<StripBlockFields<IImageBlock>> = ({ image, blockHeader }) => (
  <Block>
    <Block.Header {...blockHeader} />
    <Block.Body>
      <Image key={(image as Media).id} {...(image as Media)} />
    </Block.Body>
  </Block>
)
