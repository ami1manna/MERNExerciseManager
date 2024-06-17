import {BrowserRouter,Routes,Route} from 'react-router-dom'
//pages and component
import Home from './pages/Home'
import NavBar from './components/NavBar'

import './App.css'
function App() {

  return (
    <>
     <div className="App">
      <BrowserRouter>
          <NavBar/>
          <div className="pages">
            <Routes>
              <Route
              path="/"
              element={<Home/>}
              />
            </Routes>
          </div>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
