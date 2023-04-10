import {useState} from 'react'

const ClcikablePicture = ({img, imgClicked}) => {
    const [image, setImage] = useState('img')

    const handleClick = () => {
        image === img ? setImage(imgClicked) : setImage(img)
        console.log('image ', image)
    }

  return (
    <div>
    <img src={image} onClick={handleClick} alt="person" />
    </div>
  )
}

export default ClcikablePicture