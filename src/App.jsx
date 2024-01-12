import React from 'react';
import ScrollingTower from './webview/ScrollingTower.js'
import Test from './Test.js'
import Member from './pages/MemberPage.js'
import History from './pages/HistoryPage.js'
import Contact from './pages/ContactPage.js'
import NewsLetter from './pages/NewsLetterPage.js'
import Resources from './pages/ResourcesPage.js'

import { Routes, Route } from 'react-router-dom';

 function App() {
  return (
   <div className='App'>
            <Routes>
                
                <Route path='/' element={<ScrollingTower />} />
                <Route path='/test' element={<Test />} />
                <Route path='/member' element={<Member />} />
                <Route path='/history' element={<History />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/newsletter' element={<NewsLetter />} />
                <Route path='/resources' element={<Resources />} />



           
            </Routes>
        </div>
  );
}
export default App;
// Log to console
console.log('Hello console')