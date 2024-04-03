import {Home, Error, Auth, NGAuth} from './pages'
import {Navbar, Footer} from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<Error />} />
              <Route path="/businessAuth" element={<Auth />} />
              <Route path="/ngoAuth" element={<NGAuth />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
