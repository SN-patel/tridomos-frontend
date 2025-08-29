import './App.css'
import { RouterProvider } from 'react-router'
import { routers } from './routes'

function App() {

  return (
    <>
      <RouterProvider router={routers}/>
    </>
  )
}

export default App
