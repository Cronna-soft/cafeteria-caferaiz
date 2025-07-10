import { BrowserRouter as Router, Routes, Route } from "react-router"
import { HomePage, CartaPage, AboutPage } from "./pages"
import { FloatingButtons, Footer, Navbar } from "./components"

function App() {
// ESTAMOS HACIENDO LA PAGINA "SOBRE NOSOTROS"
  return (
    <Router>
      <header>
        <Navbar />  
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/carta" element={<CartaPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>

      {/*Otros componentes*/}
      <FloatingButtons />
    </Router>
  )
}

export default App
