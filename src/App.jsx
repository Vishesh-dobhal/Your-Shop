
import './App.css'
import {lazy,Suspense} from 'react'
const Home = lazy(()=> import("./redux/Components/Home"))

function App() {

    return (
    <>
    <Suspense fallback={<h2 className='text-center font-bold text-red-600'>Loading...</h2>}>
      <Home/>
      </Suspense>
    </>
  )
}

export default App
