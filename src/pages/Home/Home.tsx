import {Link} from "react-router-dom"
import './styles.css'

const Home = () => {
    return (
        <main className="home-container">
            <div className="home-content">
                <p className="home_text">Hi all. I am</p>
                <h1 className="home-head_text">Kirill Galkin</h1>
                <h4 className="home-subhead_text">{'> Frontend developer'}</h4>
                <p>{`// download my CV `}
                    <Link to="/kg.pdf" target="_blank" download className="home-link">en</Link>/
                    <Link to="/kg.pdf" target="_blank" download className="home-link">ru</Link>
                </p>
                {/*<p>{'// You can play the game :)'}</p>*/}
                <p>{'// or go to'} <Link to={'/about'} className="home-link">about_me</Link> page
                </p>
                <p>{'// or '}<Link to={'/projects'} className="home-link">projects</Link> page</p>
            </div>
            <div>

            </div>
        </main>
    );
};

export default Home;
