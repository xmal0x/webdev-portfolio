import {Link} from "react-router-dom"
import './styles.css'

const Home = () => {
    return (
        <main className="flex justify-center items-center text-white w-full flex-1 bg-main-dark-bg">
            <div className="flex flex-col gap-1 text-base max-w-7xl p-4">
                <p className="text-2xl">Hi all. I am</p>
                <h1 className="text-7xl">Kirill Galkin</h1>
                <h4 className="mb-10 text-4xl text-blue-text">{'> Front-end developer'}</h4>
                <p>{`// download my CV `}
                    <Link to="/kg.pdf" target="_blank" download className="link">en</Link>/
                    <Link to="/kg.pdf" target="_blank" download className="link">ru</Link>
                </p>
                {/*<p>{'// You can play the game :)'}</p>*/}
                <p>{'// or go to'} <Link to={'/about'} className="link">about_me</Link> page
                </p>
                <p>{'// or '}<Link to={'/projects'} className="link">projects</Link> page</p>
            </div>
            <div>

            </div>
        </main>
    );
};

export default Home;
