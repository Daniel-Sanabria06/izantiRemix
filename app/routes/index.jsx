import { useLoaderData } from "react-router"
import { getIndex } from "~/models/marcas.server"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import Marca from "~/components/marca"
import armani from '../../public/img/armani.svg'
import truereligion from '../../public/img/true-religion.svg'
import tommyHilfiguer from '../../public/img/tommy.svg'
import bannerArmani from '../../public/img/banner-armani.jpg'
import bannertrue from '../../public/img/bannertrue.png'
import bannerTommy from '../../public/img/bannerTommy1.png'
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Izanti - Inicio',
    description: 'Izanti - Inicio'
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
  const marca = await getIndex()
  const marcaData = marca.data
  const marca2 = await fetch(`${process.env.API_URL}/armanis?filters[distintivo]=True%20Religion&fields=nombre&fields=precio&fields=distintivo&fields=url&fields=imagen&populate=imagen&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=8`)
  const resmarca2 = await marca2.json()
  const marca2Data = resmarca2.data
  const marca3 = await fetch(`${process.env.API_URL}/armanis?filters[distintivo]=Tommy%20Hilfiger&fields=nombre&fields=distintivo&fields=precio&fields=url&fields=imagen&populate=imagen&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=8`)
  const resmarca3 = await marca3.json()
  const marca3Data = resmarca3.data
  const resultado = {marcaData, marca2Data, marca3Data}
  return resultado
}

const Index = () => {

  const { marcaData, marca2Data, marca3Data }= useLoaderData()

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    
    <main className="contenedor">

            <div className='container text-center my-5 carruselpromocion'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active text-center mx-auto imagenesCarrusel">
                      <img src={bannerArmani} className="" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={bannerTommy} className="" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={bannertrue} className="" alt="..."/>
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

          <hr />
          
          <div className='container text-center '>
            <Link to='/armani'>
              <img className='logo mx-4' src={armani} alt="imagen logo" />
            </Link>   
          </div> 


          {marcaData?.length && (
            <div className="marcas-grid">
              {marcaData.map( marca => (
                <Marca 
                  key={marca?.id}
                  marca={marca?.attributes}
                />
              ))}
            </div>
          )}

          <div className="container text-center my-5">
            <Link to='/armani' className='botonVerMas my-5'>Ver Más</Link>
          </div>

          <hr />

          <div className='container text-center '>
            <Link to='/true'>
              <img className='logo mx-4' src={truereligion} alt="imagen logo" />
            </Link>   
          </div> 

          {marca2Data?.length && (
            <div className="marcas-grid">
              {marca2Data.map( marca => (
                <Marca 
                  key={marca?.id}
                  marca={marca?.attributes}
                />
              ))}
            </div>
          )}

          <div className="container text-center my-5">
            <Link to='/true' className='botonVerMas my-5'>Ver Más</Link>
          </div>

          <hr />

          <div className='container text-center '>
            <Link to='/tommy'>
              <img className='logo mx-4' src={tommyHilfiguer} alt="imagen logo" />
            </Link>   
          </div> 
            
          {marca3Data?.length && (
            <div className="marcas-grid">
              {marca3Data.map( marca => (
                <Marca 
                  key={marca?.id}
                  marca={marca?.attributes}
                />
              ))}
            </div>
          )}

          <div className="container text-center my-5">
            <Link to='/tommy' className='botonVerMas my-5'>Ver Más</Link>
          </div>

          <hr />

    </main>
  )
}

export default Index