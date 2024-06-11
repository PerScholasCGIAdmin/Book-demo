import React, {createContext, useState} from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import Home from './pages/Home'
import About from './pages/About'
import Quiz from "./pages/Quiz";
import Root from "./Root.jsx";
import NotFound from './pages/NotFoundPage.jsx'
import ErrorPage from "./pages/ErrorPage.jsx";
import Search from "./pages/Search/index.jsx";
import UserPage from "./pages/User/index.jsx";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import {CurrentUserContext} from "./utils/UserContext.js";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Root />} errorElement={<ErrorPage/>}>
            <Route path="/" element={<UserPage />} />
            <Route path="about" element={<About />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default function App() {

    const [userContext, setUserContext] = useState(null);
    const queryClient = new QueryClient()
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <CurrentUserContext.Provider value={{ userContext, setUserContext }}>
                    <RouterProvider router={router} />
                </CurrentUserContext.Provider>
            </QueryClientProvider>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
