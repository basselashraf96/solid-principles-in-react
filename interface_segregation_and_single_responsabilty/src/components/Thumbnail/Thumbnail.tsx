import React from 'react'

interface ThumbnailProps{
    image:string;
    alt:string;
    width:number;
    height:number;
}
//only image and alt came from products api we dont need the whole api
// this is the interface segregation
const Thumbnail = ({image,alt,width,height}:ThumbnailProps) => {
  return (
    <div>
        <img src={image} alt={alt} width={width} height={height}/>
    </div>
  )
}

export default Thumbnail
