import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './routes/home/Home.tsx'
import { ErrorPage } from './routes/error-page/ErrorPage.tsx'
import { ProductDetails } from './routes/product-details/ProductDetails.tsx'
import { Login } from './routes/login/Login.tsx'
import Cart from './routes/cart/Cart.tsx'

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
      path: "/produto/:id",
      element: <ProductDetails />
    },
    {
      path: "/cart",
      element: <Cart />
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
