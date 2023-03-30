import { Link } from 'react-router-dom'
import nequi from '../../public/img/nequi.svg'
import bancolombia from '../../public/img/bancolombia.svg'
import paypal from '../../public/img/paypal.svg'
import contraentrega from '../../public/img/contraentrega.svg'
import {AiOutlineArrowDown} from 'react-icons/ai'

const Precio = () => {
  return (
        <div className="text-center">

            <div className=' mx-auto border border-dark d-flex text-center'>
                <button className="d-flex gap-3 iconosPagos btn btn-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                   <p className='h4'>Métodos de pago disponibles</p> 
                   <span className='mx-2'>
                       <AiOutlineArrowDown className='spanPrecio'/> 
                   </span>
                </button>               
            </div>

            <div className="collapse" id="collapseExample">
                <div className="card card-body block">
                    <div className="row mx-auto">                            
                        <div className='bg-gray mb-5 d-flex text-center'>
                            <div className="mx-auto">
                                <img className='imagenpago' src={nequi} alt="nequi" />
                                <p className='h3 linkPaypal mt-2'>+573028365520</p>
                            </div>
                        </div>

                        <hr />

                        <div className='my-5 d-flex text-center'>
                            <div className="text-center">
                                <img className='imagenpago' src={bancolombia} alt="Bancolombia" />
                                <p className='h3 linkPaypal mt-2'>13654931520</p>
                            </div>
                        </div>

                       <hr />

                        <div className='my-5 d-flex text-center'>
                            <div className="">
                                <img className='imagenpago' src={paypal} alt="Paypal" />
                                <Link to={'https://www.paypal.com/paypalme/DSan4bria'} target="_blank" rel="noopener noreferrer" className='h3 linkPaypal  my-auto'>@DSan4bria</Link>
                            </div>
                        </div>

                        <hr />

                        <div className='my-5 d-flex text-center'>
                            <div className="">
                                <img className='imagenpago w-50 mx-auto' src={contraentrega} alt="Contraentrega" />
                                <p className='h3 mt-2'>Pago Contraentrega en Cali y Tuluá</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Precio