import { useLoaderData } from "react-router"
import { getCatalogo } from "~/models/marcas.server"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Marca from "~/components/marca"
import AlertaPromocion from "../components/alertaPromocion"
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Izanti - Nuestro Catálogo',
    description: 'Izanti - Nuestro Catálogo'
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
  const marcas = await getCatalogo()
  return marcas.data 
  
}

const Catalogo = () => {

  const marcas = useLoaderData()

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    
    <main className="contenedor">
  
     <AlertaPromocion/>

      <h2 className="heading mb-5">Nuestro Catálogo</h2>
      
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

export default Catalogo