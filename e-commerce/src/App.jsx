import './App.css'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'  
import { BrowserRouter } from 'react-router-dom'


function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Header  />
      <MainContent />
      </BrowserRouter>
      <Footer  /> 
      
    </div>
  )
}

export default App
