import { Link } from "react-router-dom"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import armani from '../../public/img/armani.svg'
import truereligion from '../../public/img/logotruereligion.svg'
import tommyHilfiguer from '../../public/img/tommy.svg'
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Izanti - Nuestras Marcas',
    description: 'Izanti - Nuestras Marcas'
  }
}

export function links() {
    return [
        {
            rel  : 'stylesheet',
            href : styles
        }
    ]
}

const Marcas = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    
    <main className="contenedor">

      <h2 className="heading mb-1">Nuestras Marcas</h2>

      <div className='container text-center '>
        <Link to='/armani'>
          <img className='logo mx-4' src={armani} alt="imagen logo" />
        </Link>   
      </div> 

      <div className='container text-center '>
        <Link to='/true'>
          <img className='logo mx-4' src={truereligion} alt="imagen logo" />
        </Link>   
      </div> 

      <div className='container text-center '>
        <Link to='/tommy'>
          <img className='logo mx-4' src={tommyHilfiguer} alt="imagen logo" />
        </Link>   
      </div> 

    </main>
  )
}

export default Marcas