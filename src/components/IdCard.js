import React from 'react'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
  return (
    <div className="row border">
        <div className="col-md-4 picture">
            <img src={picture} alt="profile"/>
        </div>
        <div className="col-md-8 data d-flex flex-column">
            <span><b>First name:</b> {firstName}</span>
            <span><b>Last name:</b> {lastName}</span>
            <span><b>Gender:</b> {gender}</span>
            <span><b>Height:</b> {height}</span>
            <span><b>Birth:</b> {birth.toUTCString().slice(0,16)}</span>

        </div>
    </div>
  )
}

export default IdCard