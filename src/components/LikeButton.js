import {useState} from 'react'

const LikeButton = () => {
    const [count, setCount] =useState(0);
    const [color, setColor] = useState('purple')
    
    const colors = ['purple','blue','green','yellow','orange','red'];
    const handleClick = () => {
        setCount(count + 1);

        colors.forEach((arrayColor, index) =>{
            if (color === arrayColor) {
                if (index === colors.length-1) {
                    setColor(colors[0])
                }
                else {
                    setColor(colors[index+1])
                }
            }
        })
    }
  return (
    <button onClick={handleClick} style={{backgroundColor:color}}>{count} {count === 1 ? <>Like</> : <>Likes</>}</button>
  )
}

export default LikeButton