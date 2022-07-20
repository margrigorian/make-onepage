import logo from './logo.svg';
import './App.css';
// import "./font-awesome.css";
import React from 'react';

class OnePage extends React.Component{
  render() {
    const menuElements = ["Home", "About", "Services", "Portfolio", "Team", "Pricing", "Drop Down", "Contact"];
    return (
      <div>
        <header className='header'>
          <div className='logo'>OnePage</div>
          <div className='nav'>
            <ul className='menu'>
              {menuElements.map((menuEl, i) => 
                i !== 6 ? <li key={`MenuEl ${i}`} className={i === 0 ? "colorOfMenuEl" : "nothing"}>
                {menuEl}</li> : <li key={`MenuEl ${i}`}>{menuEl} <span className='drop'>&#x25BC;</span></li>
                // <i class="fa fa-chevron-down" aria-hidden="true"></i>
              )}
            </ul>
            <button className='button'>Get started</button>
          </div>
        </header>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//        </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default OnePage;
