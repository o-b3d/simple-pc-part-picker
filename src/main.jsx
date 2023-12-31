import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/about.jsx'
import { partLoader } from './utils/partloader.js'
import { PartsPage } from './pages/partselectorpage.jsx'
import ContactUs from './pages/contact.jsx'
import Home from './pages/home.jsx'
import { AuthProvider } from './utils/context/auth-context.jsx'
import RequireAuth from './utils/require-auth.jsx'
import Private from './private.jsx'
import { Login } from './pages/login.jsx'
import PCBuilder from './pages/pcbuild.jsx'
import { buildLoader } from './utils/helpers.js'
import { Provider } from 'react-redux'
import store from './utils/store.js'

const withAuthProvider = (Component, requireAuth = false) => {
    return (
        <AuthProvider>
            {requireAuth ? (
                <RequireAuth>
                    <Component />
                </RequireAuth>
            ) : (
                <Component />
            )}
        </AuthProvider>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: withAuthProvider(App),
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/build/:buildId',
                element: <PCBuilder />,
                loader: buildLoader,
            },
            {
                path: '/build/:buildId/part/:part',
                element: <PartsPage />,
                loader: partLoader,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <ContactUs />,
            },
        ],
    },
    {
        path: '/login',
        element: withAuthProvider(Login),
    },
    {
        path: '/private',
        element: withAuthProvider(Private, true),
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
