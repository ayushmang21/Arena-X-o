import React, { useEffect, useState } from 'react';

const Paid_tour = () => {

  const [TourList, setTourList] = useState([]);

  const getTournamentData = async () => {

    const res = await fetch('http://localhost:5000/tournament/getpaid');
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setTourList(data);
  }

  useEffect(() => {
    getTournamentData();
  }, []);

  // display the data in form of cards
  const displayTournamentCards = () => {
    return TourList.map((tour) => {
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


  return (
    <div>

      <div className='form_head2 transbox py-3'>
        Paid Tournaments
      </div>

      <div className='container-fluid homepg-bg py-5 px-5 w-100 mx-0'>
        <div className="row g-5">
          {displayTournamentCards()}
        </div>
      </div>
    </div>
  )
}

export default Paid_tour;