import {Home, Error, Auth} from './pages'
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
              <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
