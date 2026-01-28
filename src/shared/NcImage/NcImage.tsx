import { ImageProps } from 'next/image'
import { FC } from 'react'

export interface NcImageProps extends Omit<ImageProps, 'alt'> {
  containerClassName?: string
  alt?: string
  src: any
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = '',
  alt = 'nc-image',
  className = 'object-cover w-full h-full',
  src,
  ...args
}) => {
  return (
    <div className={containerClassName}>
      {/* <img className={className} alt={alt} src={src?.src} {...args} /> */}
      <img className={className} alt={alt} src={typeof src === 'string' ? src : src?.src} />
    </div>
  )
}

export default NcImage
