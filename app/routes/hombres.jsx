import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Marca from "~/components/marca"
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Izanti - Hombres',
    description: 'Izanti - Hombres'
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

    const hombres = await fetch(`${process.env.API_URL}/armanis?filters[genero]=Hombre&fields=nombre&fields=distintivo&fields=precio&fields=url&fields=imagen&populate=imagen&sort=createdAt:desc`)
    const resHombres = await hombres.json()
    return resHombres.data 
}

const Hombres = () => {

  const marcas = useLoaderData()

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    
    <main className="contenedor">

      <h2 className="heading mb-5">Sección Hombres</h2>

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

export default Hombres