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
  console.log(src, 'src2')
  const isFill = (args as any).fill

  return (
    <div className={containerClassName}>
      <img
        alt={'alt'}
        src={src}
        className={className}
        {...(isFill ? { fill: true } : { width: 100, height: 100 })}
        sizes="100vw"
        {...args}
      />
    </div>
  )
}

export default NcImage
