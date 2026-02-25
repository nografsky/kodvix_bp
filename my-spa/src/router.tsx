import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/projects', element: <Projects /> },
            { path: '/contacts', element: <Contacts /> },
            { path: '*', element: <NotFound /> },
        ],
    },
])