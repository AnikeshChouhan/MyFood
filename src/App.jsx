import React from 'react';
import {BrowserRouter  , Route , Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/*" element={<Error />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;