import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Marca from "~/components/marca"
import religion from '../../public/img/true-religion.svg'
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Izanti - True Religion',
    description: 'Izanti - True Religion'
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
  const religion = await fetch(`${process.env.API_URL}/armanis?filters[distintivo]=True%20Religion&fields=nombre&fields=distintivo&fields=precio&fields=url&fields=imagen&populate=imagen&sort=createdAt:desc`)
  const resReligion = await religion.json()
  return resReligion.data 
}

const True = () => {

  const marcas = useLoaderData()

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    
    <main className="contenedor">

      <h2 className="heading mb-1">Sección True Religion</h2>

      <div className='text-center'>
        <img className='logo' src={religion} alt="imagen logo" />
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

export default True