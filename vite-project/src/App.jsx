import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from "./componets/Nav"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Products from "./pages/Products"
import DefaultLayout from "./layouts/defaultLayout"
import { LoginLayout } from "./layouts/loginLayout"

function App() {

  return (
    <>
      <Router>  
        <Routes>

          <Route path="/login" element={<LoginLayout />}>
            <Route path="" element={<Login />} />
          </Route>

          <Route path="/" element={<DefaultLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App;
