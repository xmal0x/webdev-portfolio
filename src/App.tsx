import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"

import {About, Contacts, Home, Projects} from "./pages"
import {Footer, Header} from "./components"
import Bio from "./pages/About/BIo/Bio";
import Education from "./pages/About/Education/Education";
import Experience from "./pages/About/Experience/Experience";

const App = () => {
    const Layout = () => (
        <div className="relative flex flex-col w-full min-h-screen overflow-hidden">
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
                // {
                //     path: '/about',
                //     element: <About/>
                // },
                {
                    element: <About/>,
                    children: [
                        {
                            path: "/bio",
                            element: <Bio/>
                        },
                        {
                            path: "/education",
                            element: <Education/>
                        },
                        {
                            path: "/experience",
                            element: <Experience/>
                        },
                    ]
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

export default App
