import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload
} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'
import logo from '../public/img/logoredondo.png'

export function meta() {
  return (
    {
      charset: 'utf-8',
      title: 'Izanti',
      viewport: 'width=device-width, initial-scale=1',
      
    }
  )
}


export function links() {
  return [
    {
      rel  : 'stylesheet',
      href :"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      integrity : "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
      crossOrigin : "true" 
    },
    {
      rel  : 'stylesheet',
      href : 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel  : 'preconnect',
      href : 'href="https://fonts.googleapis.com"'
    },
    {
      rel  : "preconnect", 
      href : "https://fonts.gstatic.com",
      crossOrigin : 'true'
    },
    {
      rel  :' stylesheet',
      href : 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet'
    },
    {
      rel  : 'stylesheet',
      href : styles
    }

  ]
}


export default function App() {
  
  return (
     <Document>
        <Outlet/>
     </Document>
  );
}

function Document ({children}) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href={logo} type="image/x-icon" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
        <Meta/>
        <Links/>
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        <Scripts/>
        <LiveReload/>
      </body>
    </html>
  )
}