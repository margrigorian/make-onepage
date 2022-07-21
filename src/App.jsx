import './App.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faCubes, faShekelSign } from '@fortawesome/free-solid-svg-icons';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';

class OnePage extends React.Component{
  render() {
    const menuElements = ["Home", "About", "Services", "Portfolio", "Team", "Pricing", "Drop Down", "Contact"];
    const icons = [<FontAwesomeIcon icon={faFolderOpen} />, <FontAwesomeIcon icon={faCubes} />, 
    <FontAwesomeIcon icon={faAccusoft} />, <FontAwesomeIcon icon={faShekelSign} />];
    const blockNames = ["Lorem lpsum", "Sed ut perspiciatis", "Magni Dolores", "Nemo Enim"];
    const blockText = ["So delightful up dissimilar by unreserved it",
                        "Stronger unpacked felicity to of mistaken",
                      "Raptures stanhill my greatest mistaken or",
                    "Discourse otherwise disposing as it of strangers forfeited"];
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
          </div>
        </header>
        <div className='content'>
          <div className='firstPartOfContentWithLargeText'>
            <p className='largeText colorDarkBlue'>One Page Bootstrap</p>
            <p className='largeText colorDarkBlue'>Website Template</p>
            <p className='textTeamDesigners colorDarkGrey'>We are team of talanted designers</p>
            {createButton()}
          </div>
          <div className='secondPartOfContentWithBlocks'>
            {icons.map((icon, i) => (
              <div className='containerOfBlock' key={`Block ${i}`}>
                <p className='icon'>{icon}</p> 
                <p className='blockName colorDarkBlue'>{blockNames[i]}</p>
                <p className='blockText'>{blockText[i]}</p>
              </div>
            ))}
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

export default OnePage;
