
import ReactDOM from 'react-dom/client'
import './index.css'
import './main.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import NoPage from './Pages/NoPage.jsx'
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import React from 'react'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '*',
        element: <NoPage />
    },
    {
        path: '/privacy-policy-indicadores-economicos-chile',
        element: <PrivacyPolicy />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
