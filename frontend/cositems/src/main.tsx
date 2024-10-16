import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPage/ErrorPage.tsx'
import { Home } from './pages/Home/Home.tsx'
import { Login } from './pages/Login/Login.tsx'
import { ProductDetails } from './pages/ProductDetails/ProductDetails.tsx'
import { Cart } from './pages/Cart/Cart.tsx'
import { FilteredProducts } from './pages/FilteredProducts/FilteredProducts.tsx'
import { Register } from './pages/Register/Register.tsx'
import { UsersList } from './pages/UsersList/UsersList.tsx'
import { ProductsList } from './pages/ProductsList/ProductsList.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: < Register/>
    },
    {
      path: "/produto/:id",
      element: <ProductDetails />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/search/:name?",
      element: <FilteredProducts />
    },
    {
      path: "/usuarios",
      element: <UsersList />
    },
    {
      path: "/produtos",
      element: <ProductsList />
    }
    ]

  }
])

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
