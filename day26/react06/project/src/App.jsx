
import All from './All'
import Fullstack from './Fullstack'
import Cyberscure from './Cyberscure'
import Career from './Career'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes  } from "react-router-dom"



// import Course from './Course'

function App() {
  
  return (
    <>
    
     <Router>
      <div>
        <nav className='nav-elements'>
          
          <ul>
            <li><Link to="/all">All</Link></li>
            <li><Link to="/fullstack">FullStack</Link></li>
            <li><Link to="/cyberscurty">Cyber Secruity</Link></li>
            <li><Link to="/career">Career</Link></li>
           
          </ul>
         

            </nav>

            <Routes>
              <Route path ="/all" exact Component={All} ></Route>
              <Route path ="/fullstack"  Component={Fullstack} ></Route>
              <Route path ="/cyberscurty"  Component={Cyberscure} ></Route>
              <Route path ="/career"  Component={Career} ></Route>
            
            </Routes>
 
      </div>
     </Router>
    </>
  )
}

export default App










// import All from './All'
// import Fullstack from './Fullstack'
// import Datasci from './Datasci'
// import Cyberscure from './Cyberscure'
// import Career from './Career'

 {/* <Link to="/course/all">ALL</Link>
          <br/>
          <Link to="/course/full">fullstack</Link>
          <br/>
          <Link to="/course/data">datascience</Link>
          <br/>
          <Link to="/course/cyber">cyberscuerity</Link> */}