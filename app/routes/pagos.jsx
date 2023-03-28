import { Link } from '@remix-run/react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import nequi from '../../public/img/nequi.svg'
import bancolombia from '../../public/img/bancolombia.svg'
import paypal from '../../public/img/paypal.svg'
import contraentrega from '../../public/img/contraentrega.svg'
import styles from '~/styles/index.css'

export function meta() {
  return {
    title: 'Izanti - Pagos',
    description: 'Izanti - Pagos'
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

const Pagos = () => {
    
    const location = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [location.pathname])

  return (
    <div  className="container text-center pagos mt-5">
        <div className="row mx-auto">
            <div className='bg-gray mb-5 d-flex text-center'>
                <div className="col-6 d-flex mx-auto">
                    <img className='imagenpago' src={nequi} alt="nequi" />
                </div>
                <div className=" d-flex">
                    <p className='h3 mx-5 my-auto'>+573026060889</p>
                </div>
            </div>

            <hr />

            <div className='my-5 d-flex text-center'>
                <div className="col-6 d-flex mx-auto">
                    <img className='imagenpago' src={bancolombia} alt="Bancolombia" />
                </div>
                <div className=" d-flex">
                    <p className='h3 mx-5 my-auto'>13654931520</p>
                </div>
            </div>

            <hr />

            <div className='my-5 d-flex text-center'>
                <div className="col-6 d-flex mx-auto">
                    <img className='imagenpago' src={paypal} alt="Paypal" />
                </div>
                <div className=" d-flex">
                    <Link className='h3 mx-5 my-auto'>Link de paypal</Link>
                </div>
            </div>

            <hr />

            <div className='my-5 d-flex text-center'>
                <div className="col-6 d-flex mx-auto">
                    <img className='imagenpago w-50 mx-auto' src={contraentrega} alt="Contraentrega" />
                </div>
                <div className=" d-flex">
                   <p className='h3 mx-5 my-auto'>Pago Contraentrega en Cali y Tuluá</p>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Pagos