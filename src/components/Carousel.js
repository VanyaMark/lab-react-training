import {useState} from 'react'

const Carousel = ({images}) => {

    const [previousIndex, setPreviousIndex] = useState(0);
    const [randomIndex, setRandomIndex] = useState(0);

    const generateRandomIndex = () => {
        let newIndex = previousIndex
        while (newIndex === previousIndex) {
            newIndex = Math.floor(Math.random()*4)
        }
        setPreviousIndex(newIndex)
        setRandomIndex(newIndex)
    }

  return (
    <div>
        <img src={images[randomIndex]} alt="random" />
        <div>
        <button onClick={generateRandomIndex}>Left</button>
        <button onClick={generateRandomIndex}>Right</button>
        </div>
    </div>
  )
}

export default Carousel