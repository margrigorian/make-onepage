import './App.css';
// import "./font-awesome.css";
import React from 'react';

class OnePage extends React.Component{
  render() {
    const menuElements = ["Home", "About", "Services", "Portfolio", "Team", "Pricing", "Drop Down", "Contact"];
    return (
      <div>
        <header className='header'>
          <div className='logo colorDarkBlue'>OnePage</div>
          <div className='nav'>
            <ul className='menu'>
              {menuElements.map((menuEl, i) => 
                i !== 6 ? <li key={`MenuEl ${i}`} className={i === 0 ? "colorOfMenuEl" : "colorDarkGrey"}>
                {menuEl}</li> : <li key={`MenuEl ${i}`} className="colorDarkGrey">{menuEl} <span className='drop'>&#x25BC;</span></li>
                // <i class="fa fa-chevron-down" aria-hidden="true"></i>
              )}
            </ul>
            {createButton()}
            {/* <button className='button'>Get started</button> */}
          </div>
        </header>
        <div className='content'>
          <div className='firstPartOfContentWithLargeText'>
            <p className='largeText colorDarkBlue'>One Page Bootstrap</p>
            <p className='largeText colorDarkBlue'>Website Template</p>
            <p className='textTeamDesigners colorDarkGrey'>We are team of talanted designers</p>
            {createButton()}
          </div>
        </div>
      </div>
    )
  }
}

function createButton() {
  return  ( // при создании react компонента функция не читается
    <button className='button'>Get started</button>
  )
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
