import {Home, Error, NGO, Auth} from './pages'
import {Navbar, Footer} from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/NGO" element={<NGO />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
