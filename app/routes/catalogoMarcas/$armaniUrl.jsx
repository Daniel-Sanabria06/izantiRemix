import { useLoaderData } from 'react-router'
import { getArmani } from "~/models/marcas.server"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Marca from "~/components/marca"
import Precio from '../../components/precio'
import styles from '~/styles/marcas.css'

export async function loader({params}) {
  const { armaniUrl } = params
  const armani = await getArmani( armaniUrl )
  const respuesta = { armani }
  const armaniTotal = respuesta.armani
  const distintivo = armani.data[0].attributes.distintivo
  const publicacionesSimilares = await fetch(`${process.env.API_URL}/armanis?filters[distintivo]=${distintivo}&fields=nombre&fields=distintivo&fields=precio&fields=url&fields=imagen&populate=imagen&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=8`)
  const respublicacionesSimilares = await publicacionesSimilares.json()
  const publicacionesSimilaresData = respublicacionesSimilares.data
  const resultado = { armaniTotal, publicacionesSimilaresData }
  return resultado
}

export function links() {
  return [
      {
          rel  : 'stylesheet',
          href : styles
      }
  ]
}


const ArmaniUrl = () => {

if (typeof window !== 'undefined') {

  const { armaniTotal, publicacionesSimilaresData }= useLoaderData()

  const { nombre, descripcion, color, stock, imagen, imagen2, precio, tallas, distintivo } = armaniTotal.data[0].attributes

  const location = useLocation()

  const rutaTotal = window.location.href
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const precioConFormato = precio.toLocaleString('es-CO', {currency: 'COP'});

  const linkWhatsapp = `http://wa.me/573176028128?text=Hola!%20Estoy%20interesado%20en%20el%20producto%20${rutaTotal}`

  //Precio promoción

  const descuento = ( precio * 15 ) / 100;

  const precioDescuento = precio - descuento;

  const precioPromocionFinal = precioDescuento.toLocaleString('es-CO', {currency: 'COP'});

  return (
    <>
      <div className='vistaProducto mt-5'>
        <div className='mt-5'>
          <div className="boton-modal carrusel container text-center">
            <label htmlFor="btn-modal">

              <div className='container text-center my-5'>
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active text-center mx-auto ">
                      <img src={imagen.data.attributes.url} className="" alt="..."/> 
                      </div>
                      <div className="carousel-item">
                      <img src={imagen2.data.attributes.url} className="" alt="..."/> 
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
              </div>

            </label>
          </div>

          <input type="checkbox" id="btn-modal"/>
          
          <div className="container-modal">
            <div className="content-modal">
              <div className="btn-cerrar">
                <label htmlFor="btn-modal" className='mx-1 my-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </label>
              </div>

              <div className='container text-center my-5'>
                  <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active text-center mx-auto ">
                      <img src={imagen.data.attributes.url} className="" alt="..."/> 
                      </div>
                      <div className="carousel-item">
                      <img src={imagen2.data.attributes.url} className="" alt="..."/> 
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
              </div>

            </div>
            <label htmlFor="btn-modal" className="cerrar-modal"></label>
          </div>
        </div>
                
        <div className='contenido mb-5'>
          <p className='h1 mb-5'>Marca: {distintivo}</p>
          <p className='h2 mb-5'>{nombre}</p>
          <p className='h3 mb-3'>Tallas Disponibles</p>
          <p className='xs:fs-2 mb-5 fs-1'>{tallas}</p>
          <p className='h3 mb-5'>Color: {color}</p>
          <p className='h3 mb-5'>Stock: <small>{stock}</small></p>

          <p className='precio mb-2'><small><s>Precio: ${precioConFormato} COP</s></small></p>
          <p className='precio mb-2'>Precio: ${precioPromocionFinal} COP</p>
          <small>¡Por tiempo limitado!</small>
         <hr className='my-5'/>

          <a className='botonCompra my-5' href={linkWhatsapp} target="_blank" rel="noopener noreferrer">Comprar</a>
          <div className='w-50 mt-5 text-center mx-auto'>
            <div className='mt-5'> 
              <Precio />
            </div>
          </div>
           
        </div>

       
      </div>

      <div className='text-center descrip my-5'>
        <p className='h1 mt-5'>Descripción</p>
          <p className='texto mx-auto mt-5'>{descripcion}</p>
      </div>

      <hr />

      <div className='container text-center'>
        <h1 className='my-5'>Publicaciones Similares de {distintivo}</h1>
      </div>

 
      <div className='container'>
        {publicacionesSimilaresData?.length && (
          <div className="marcas-grid">
            {publicacionesSimilaresData.map( marca => (
              <Marca 
                key={marca?.id}
                 marca={marca?.attributes}
              />
            ))}
          </div>
        )}
      </div>
     
      <hr />

    </>
  )
}
}
export default ArmaniUrl

