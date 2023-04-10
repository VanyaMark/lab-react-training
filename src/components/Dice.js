import {useState} from 'react'

const Dice = () => {
    const diceArr = ['./../../dice-empty.png', './../../dice1.png', './../../dice2.png', './../../dice3.png', './../../dice4.png', './../../dice5.png', './../../dice6.png']
    let index = Math.floor(Math.random()*6)+1;
    const [dice, setDice] = useState(diceArr[index])
    
    const handleClick = () => {
        setDice(diceArr[0]);
        setTimeout(() => {
            setDice(diceArr[index])
        }, 1000)
    } 

  return (
    <div>
        <img className='dice' src={dice} alt="dice" onClick={handleClick} />
    </div>
  )
}

export default Dice