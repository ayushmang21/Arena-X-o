import React from 'react';
import './App.css';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Paid_tour from './components/Paid_tour';
import Free_tour from './components/Free_tour';
import Create_tour from './components/Create_tour';
import Faq from './components/faq';
import Leaderboard from './components/leaderboard';
import Wiki from './components/Wiki';
import Footer from './components/Footer';
import Challenges_cash from './components/Challenges_cash';
import Challenges_xp from './components/Challenges_xp';
import ManageTour from './components/ManageTour';

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>

            <Route path='/' element={< Home />} />
            <Route path='/paid' element={< Paid_tour/>} />
            <Route path='/free' element={< Free_tour/>} />
            <Route path='/create' element={< Create_tour/>} />
            <Route path='/manage' element={< ManageTour/>} />
            <Route path='/challenges_cash' element={< Challenges_cash/>} />
            <Route path='/challenges_xp' element={< Challenges_xp/>} />
            {/* <Route path='/wiki' element={< Wiki/>} /> */}
            {/* <Route path='/leaderboard' element={< Leaderboard/>} /> */}
            {/* <Route path='/faq' element={< Faq/>} /> */}
            

          </Routes>

          <Footer />

        </BrowserRouter>
      </SnackbarProvider>

    </div>
  )
}

export default App;