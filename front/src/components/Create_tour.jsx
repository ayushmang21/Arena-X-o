import React from 'react';
import './create.css';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';

const Create_tour = () => {

  const createTour = useFormik({
    initialValues: {
      game: '',
      entry_type: '',
      tournament_type: '',
      prize: '',
      team_size: '',
      region: '',
      platform: '',
      date_time: '',
      caption: ''
    },

    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/tournament/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      console.log(res.status);
      console.log(res.statusText);

      if (res.status === 200) {
        enqueueSnackbar('Tournament Created Successfully', { variant: 'success' });
      }
      else {
        enqueueSnackbar('Error Creating Tournament', { variant: 'error' });
      }

    }
  });

  return (
    <div className='createpg'>

      <div className='form_head py-3'>
        Create A New Tournament
      </div>

      <div className='container '>

        <form className='cform' onSubmit={createTour.handleSubmit}>

          <div className='form-control create_form'>

            <label htmlFor="">Select Game</label>
            <select className="form-select focus-ring focus-ring-light "
              aria-label="Default select example"
              id='game'
              onChange={createTour.handleChange}
              value={createTour.values.game}
              required
            >
              <option className='text-muted default'>Select Game Here</option>
              <option value="Call of Duty : Warzone">Call of Duty : Warzone</option>
              <option value="Call of Duty : Warzone 2.0">Call of Duty : Warzone 2.0</option>
              <option value="Valorant">Valorant</option>
              <option value="League of Legends">League of Legends</option>
              <option value="Fortnite">Fortnite</option>
              <option value="FIFA 23">FIFA 23</option>
            </select>

            <label htmlFor="">Entry Type</label>
            <select className="form-select focus-ring focus-ring-secondary "
              aria-label="Default select example"
              id='entry_type'
              onChange={createTour.handleChange}
              value={createTour.values.entry}
              required
            >
              <option className='text-muted default'>Select Entry Type</option>
              <option value="Paid">Paid</option>
              <option value="Free">Free</option>
            </select>

            <label htmlFor="">Tournament Type</label>
            <select className="form-select focus-ring focus-ring-secondary "
              aria-label="Default select example"
              id='tournament_type'
              onChange={createTour.handleChange}
              value={createTour.values.type}
              required
            >
              <option className='text-muted default'>Select Tournament Type</option>
              <option value="Community">Community</option>
              <option value="Cash">Cash</option>
              <option value="XP">XP</option>
            </select>

            <label htmlFor="">Prize</label>
            <input type="text" id='prize'
              onChange={createTour.handleChange} value={createTour.values.prize} placeholder='Enter Prize Money' style={{fontFamily: 'Saira'}}/>

            <label htmlFor="">Team Size</label>
            <select className="form-select focus-ring focus-ring-secondary "
              aria-label="Default select example"
              id='team_size'
              onChange={createTour.handleChange}
              value={createTour.values.team}
              required
            >
              <option className='text-muted default'>Select Team Size</option>
              <option value="1v1">1v1</option>
              <option value="2v2">2v2</option>
              <option value="4v4">4v4</option>
            </select>

            <label htmlFor="">Region</label>
            <select className="form-select focus-ring focus-ring-secondary "
              aria-label="Default select example"
              id='region'
              onChange={createTour.handleChange}
              value={createTour.values.region}
              required
            >
              <option className='text-muted default'>Select Region</option>
              <option value="Asia">Asia</option>
              <option value="NA">NA</option>
              <option value="SA">SA</option>
              <option value="PRC">PRC</option>
              <option value="EU West">EU West</option>
              <option value="EU East">EU East</option>
            </select>

            <label htmlFor="">Platform</label>
            <select className="form-select focus-ring focus-ring-secondary "
              aria-label="Default select example"
              id='platform'
              onChange={createTour.handleChange}
              value={createTour.values.platform}
              required
            >
              <option className='text-muted default'>Select Platform</option>
              <option value="PC">PC</option>
              <option value="Mobile">Mobile</option>
              <option value="Console">Console</option>
              <option value="Cross-Platform">Cross-Platform</option>
            </select>

            <label htmlFor="">Date & Time</label>
            <input type="datetime-local" id="date_time"
              onChange={createTour.handleChange}
              value={createTour.values.date}
              required />

            <label htmlFor="">Caption</label>
            <input type="text" id='caption'
              onChange={createTour.handleChange}
              value={createTour.values.caption}
              placeholder='Enter Tournament Caption'
              style={{fontFamily: 'Saira'}}
              required />

            <div>
              <button type="submit" className='create_btn px-5 py-2 '>Create</button>
            </div>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Create_tour;