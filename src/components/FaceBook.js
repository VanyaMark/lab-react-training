import {useState} from 'react';
import profiles from './../data/berlin.json';

const FaceBook = () => {
    const [countryChoice, setCountryChoice] = useState(null);

    const countryArr = profiles.map((el)=> el.country)

    const countryArrDef = [];
    const getCountryArrDef = () => {
        for (let i=0; i<countryArr.length; i++) {
            let elExists = countryArrDef.includes(countryArr[i])
            if (!elExists) {
                countryArrDef.push(countryArr[i])
            }
        }
        console.log('countryArrDef ', countryArrDef)
    }
    getCountryArrDef();

const handleClick = (country) => {
    console.log('country ', country)
    for (let i=0; i<profiles.length;i++) {

        if (country === profiles.country)
        console.log(profiles.firstName)
    }
    }

  return (
    <div>
    {countryArrDef.map(country => {
        return (
            <button onClick={() => handleClick({country})}>{country}</button>
        )
    })}
      {profiles.map((profile) => {
        return (
          <div key={profile.lastName} className="face-book row">
            <div className="col-md-4">
              <img src={profile.img} alt="profile" />
            </div>
            <div className="col-md-8 data d-flex flex-column p-4">
              <p>
                <b>First name:</b> {profile.firstName}
              </p>
              <p>
                <b>Last name:</b> {profile.lastName}
              </p>
              <p>
                <b>Country:</b> {profile.country}
              </p>
              <p>
                <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaceBook;
