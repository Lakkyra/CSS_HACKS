import {Home, Error, Auth, NGO, NGAuth} from './pages'
import {Navbar, Footer} from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/ngo" element={<NGO />} />
              <Route path="/businessAuth" element={<Auth />} />
              <Route path="/ngoAuth" element={<NGAuth />} />
              <Route path="/*" element={<Error />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
