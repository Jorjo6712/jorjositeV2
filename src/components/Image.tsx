interface ImageProps {
  imgUrl: string,
  imageWidth?: string,
  imageHeight?: string,
  style?: string
}

export const Image : React.FC<ImageProps> = (props: ImageProps) => {
  return (
    <>
      <img className={props.style} src={props.imgUrl as string} width={props.imageWidth} height={props.imageHeight}/>      
    </>
  )
}
