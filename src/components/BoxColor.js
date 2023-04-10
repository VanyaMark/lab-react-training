import React from 'react'

const BoxColor = ({r, g, b}) => {
    const rgbToHexConverter = (el) => {
        let hexCol = el.toString(16)
        if (hexCol.length < 2) {
            hexCol = 0 + hexCol
        }
        console.log('hexCol: ', el.toString(16))
        return hexCol;
    }
  return (
<div style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
        <h3>rgb({r},{g},{b})</h3>
        <br/>
        <h3>#{rgbToHexConverter(r)}{rgbToHexConverter(g)}{rgbToHexConverter(b)}</h3>
    </div>
  )
}

export default BoxColor