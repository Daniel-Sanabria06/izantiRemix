import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Marca from "~/components/marca"
import armani from '../../public/img/armani.svg'

import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Izanti - Armani',
    description: 'Izanti - Armani'
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

export async function loader() {
    const armani = await fetch(`${process.env.API_URL}/armanis?filters[distintivo]=Armani%20Exchange&fields=nombre&fields=distintivo&fields=precio&fields=url&fields=imagen&populate=imagen&sort=createdAt:desc`)
    const resArmani = await armani.json()
    return resArmani.data 
}

const Armani = () => {

  const marcas = useLoaderData()

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    
    <main className="contenedor">

      <h2 className="heading mb-1">Sección Armani</h2>

      <div className='text-center'>
        <img className='logo' src={armani} alt="imagen logo" />
      </div>

      

      {marcas?.length && (
        <div className="marcas-grid">
          {marcas.map( marca => (
            <Marca 
              key={marca?.id}
              marca={marca?.attributes}
            />
          ))}
        </div>
      )}

    </main>
  )
}

export default Armani