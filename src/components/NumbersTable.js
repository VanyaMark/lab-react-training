import React from 'react'

const NumbersTable = ({limit}) => {
    const arrNumbers = [];

    const createArr = (max) => {
        let i = 1;
        while (i<=max) {
            arrNumbers.push(i)
            i++
        }
        console.log('arrNumbers ', arrNumbers)
        return arrNumbers;
    }
    createArr(limit)

  return (
    <div className="number-table">
        {arrNumbers.map(el => {
            return el%2===0 ? ( <div className="even cell"><p>{el}</p></div>) :  (<div className="uneven cell"><p>{el}</p></div>)
        })}
    </div>
  )
}

export default NumbersTable