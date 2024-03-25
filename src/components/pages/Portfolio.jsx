import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import NoteTaker from '../../assets/notetaker.png'
import PwGenerator from '../../assets/passwordgenerator.png'
import WDcalendar from '../../assets/workcalendar.png'
import Cocktail from '../../assets/cocktailcompass.png'
import { Container, Row, Col } from 'react-bootstrap';
import Weather from '../../assets/Weather.png';
import Recipes from '../../assets/ryans-recipes.png'


function ProjectCards() {
    return (<div> <h1>Portfolio</h1><div className='cards-container'>
        <Card className='cards'>
            <img src={NoteTaker}></img>
            <h3 className='card-h3'>Note Taker</h3>
            <h5 className='card-h5'>This is an application designed to show the use of saving and retrieving data from an Express server.</h5>
            {/* <button className='button:hover button'>Repo</button> */}
            <a href="https://github.com/Zdgemmill/Note-taker" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Repo</a>
            <a href="https://zachs-note-taker-16a5e1608433.herokuapp.com/" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Deplyed Link</a>
        </Card>
        <Card className='cards'>
            <img src={PwGenerator}></img>
            <h3 className='card-h3'>Password Generator</h3>
            <h5 className='card-h5'>This application is designed to create a secure password based off of user inputs for password criteria.</h5>
            <a href="https://github.com/Zdgemmill/password-generator" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Repo</a>
            <a href="https://zdgemmill.github.io/password-generator/" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Deplyed Link</a>
        </Card>
        <Card className='cards'>
            <img src={WDcalendar}></img>
            <h3 className='card-h3'>Work Day Scheduler</h3>
            <h5 className='card-h5'>This is an application designed to show the use of saving information to local storage.</h5>
            <a href="https://github.com/Zdgemmill/calendar" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Repo</a>
            <a href="https://zdgemmill.github.io/calendar/" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Deplyed Link</a>
        </Card>
        <Card className='cards'>
            <img src={Cocktail}></img>
            <h3 className='card-h3'>Cocktail Compass</h3>
            <h5 className='card-h5'>This application collaboratation build howcasing the use of github branches with collaborators as well as working with pulling data from a 3rd party API.</h5>
            <a href="https://github.com/sfmacdonald/Cocktail-Compass" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Repo</a>
            <a href="https://sfmacdonald.github.io/Cocktail-Compass/" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Deplyed Link</a>
        </Card>
        <Card className='cards'>
            <img src={Weather}></img>
            <h3 className='card-h3'>Weather App</h3>
            <h5 className='card-h5'>This is an application designed to show the use pulling data from an API and saving information to local storage.</h5>
            <a href="https://github.com/Zdgemmill/WeatherApp" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Repo</a>
            <a href="https://zdgemmill.github.io/WeatherApp/" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Deplyed Link</a>
        </Card>
        <Card className='cards'>
            <img src={Recipes}></img>
            <h3 className='card-h3'>Ryans Recipes</h3>
            <h5 className='card-h5'>This is a team collaboration project that is designed to show the use of authentication and saving users posts to a data base to be retrieved client side.</h5>
            <a href="https://github.com/maverickwolfe21/ryans-recipes" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Repo</a>
            <a href="https://asu-ryans-recipes-b97a1cee621f.herokuapp.com/" className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Deplyed Link</a>
        </Card>
    </div>
    </div>)

}

export default ProjectCards;