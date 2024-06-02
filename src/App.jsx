import Pages from './pages/Pages'
import './App.css'
import Category from './components/Category'
import Search from './components/Search'
import { Link } from 'react-router-dom'
import { GiFoodTruck } from "react-icons/gi";
function App() {

  return (
    <>
      <nav className='py-8 text-xl '>
        <Link className='flex gap-2' to={'/'}>
        <GiFoodTruck className='text-2xl  text-red-500'/>
          <p className='text-red-800'>Recipes</p> 
        <GiFoodTruck className='text-2xl  text-red-500'/>
        </Link>
      </nav>
      <Search />
      <Category />
      <Pages />
    </>
  )
}

export default App
