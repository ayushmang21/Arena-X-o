import React, { useEffect, useState } from 'react'

const Challenges_xp = () => {

  const [TourArray, setTourArray] = useState([]);

  const getTourData = async () => {

    const res = await fetch('http://localhost:5000/tournament/getxp');
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setTourArray(data);
  }

  useEffect(() => {
    getTourData();
  }, []);

  // func. to display the data in form of cards
  const displayTournamentCards = () => {
    return TourArray.map((tour) => {
      return (
        <div key={tour._id} className="col-md-12 col-sm-12 col-lg-6 mx-auto">
          <div className='card card-bg1'>
            <div className='card-body'>
              <div className='cardtop'>
                <img className='g-logo-1' src="https://www.checkmategaming.com/images/ladders/1701636905414.png" alt="" />

                <div className='prize'>
                  <span>
                    ${tour.prize}
                    <br />
                    <span>PRIZE</span>
                  </span>
                </div>

              </div>

              <div className='cardend'>
                <div className='foot'>
                  <div className='game_info'>
                    <span>
                      {tour.tournament_type} TOURNAMENT
                      <br />
                      <span>{tour.date_time}</span>
                      <br />
                      <span>{tour.caption}</span>
                    </span>
                  </div>

                  <div>
                    <button className='btn view_btn'>VIEW <span><i className="bi bi-box-arrow-right"></i></span></button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      );

    })
  }

  // display the data in form of cards
  return (
    <div>
      <div className='container'>
        <div className="row g-4">
          {displayTournamentCards()}
        </div>
      </div>
    </div>
  )
}

export default Challenges_xp;