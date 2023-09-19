import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {About, Contacts, Home, Projects} from "./pages";
import {Footer, Header} from "./components";

const App = () => {
    const Layout = () => (
        <div className="relative flex flex-col w-full min-h-screen overscroll-none">
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    )

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/about',
                    element: <About/>
                },
                {
                    path: '/projects',
                    element: <Projects/>
                },
                {
                    path: '/contacts',
                    element: <Contacts/>
                },
            ]
        }
    ])

    return <RouterProvider router={router}/>
}

export default App;
