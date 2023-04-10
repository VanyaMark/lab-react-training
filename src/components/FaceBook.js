import React from 'react';
import profiles from './../data/berlin.json';

const FaceBook = () => {
  return (
    <div>
      {profiles.map((profile) => {
        return (
          <div className="face-book row">
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
