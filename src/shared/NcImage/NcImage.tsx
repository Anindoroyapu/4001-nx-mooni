import React, { FC } from "react";
import Image, { ImageProps } from "next/image";

export interface NcImageProps extends Omit<ImageProps, "alt"> {
  containerClassName?: string;
  alt?: string;
  src: any;
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = "",
  alt = "nc-image",
  className = "object-cover w-full h-full",
  src,
  ...args
}) => {
  
  return (
    <div className={containerClassName}>
      <img className={className} alt={alt} src={src} {...args} />
    </div> 
  );
};

export default NcImage;
