import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home';
import Animals from './pages/Animals';
import Feed from './pages/Feed';5
import Update from './pages/Update';
import FeedUpdate from './pages/FeedUpdate';
const App = () => {
  return (
    <div className=' dark:bg-[#18211E]'>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='animal' element={<Animals/>}/>
        <Route path='animals/:id' element={<Update/>}/>
        <Route path='feed' element={<Feed/>}/>
        <Route path='feed/:id' element={<FeedUpdate/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;