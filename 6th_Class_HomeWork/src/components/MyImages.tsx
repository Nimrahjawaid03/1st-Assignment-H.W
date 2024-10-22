import Image from "next/image"
import myImage from '@/images/home page-01.jpeg'

function MyImage() {
  return (
    <div>
      <Image className="filter" src={myImage} alt='nmj1' width={400} height={900} />
    </div>
  )
}

export default MyImage
