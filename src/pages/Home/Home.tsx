import {Link} from "react-router-dom"
import {withOpacityTransition} from "../../hoc"

import './styles.css'

const Home = () => {
    return (
        <main className="home-container">
            <div className="home-content">
                <p className="home_text">Hi all. I am</p>
                <h1 className="home-head_text">Kirill Galkin</h1>
                <h4 className="home-subhead_text">{'> Frontend developer'}</h4>
                <p>{`// download my CV `}
                    <Link to="/kgalkin_en_cv.pdf" target="_blank" download className="home-link">en</Link>/
                    <Link to="/kgalkin_ru_cv.pdf" target="_blank" download className="home-link">ru</Link>
                </p>
                {/*<p>{'// You can play the game :)'}</p>*/}
                <p>{'// or go to'} <Link to={'/projects'} className="home-link">projects</Link> page
                </p>
                <p>{'// or '}<Link to={'/contacts'} className="home-link">contact_me</Link> page</p>
            </div>
            <div>

            </div>
        </main>
    )
}

export default withOpacityTransition(Home)
