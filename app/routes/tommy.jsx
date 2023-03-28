import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Marca from "~/components/marca"
import tommy from '../../public/img/tommy.svg'
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Izanti - Tommy Hilfiger',
    description: 'Izanti - Tommy Hilfiger'
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

    const tommy = await fetch(`${process.env.API_URL}/armanis?filters[distintivo]=Tommy%20Hilfiger&fields=nombre&fields=distintivo&fields=precio&fields=url&fields=imagen&populate=imagen&sort=createdAt:desc`)
    const resTommy = await tommy.json()
    return resTommy.data 
}

const Tommy = () => {

  const marcas = useLoaderData()

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    
    <main className="contenedor">

      <h2 className="heading mb-1">Sección Tommy Hilfiger</h2>

      <div className='text-center'>
        <img className='logo' src={tommy} alt="imagen logo" />
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

export default Tommy