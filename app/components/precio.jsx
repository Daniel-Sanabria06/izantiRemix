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
                            </div>
                        </div>

                        <hr />

                        <div className='my-5 d-flex text-center'>
                            <div className="mx-auto">
                                <img className='imagenpago' src={bancolombia} alt="Bancolombia" />
                            </div>
                        </div>

                       <hr />

                        <div className='my-5 d-flex text-center'>
                            <div className="mx-auto">
                                <img className='imagenpago' src={paypal} alt="Paypal" />
                            </div>
                        </div>

                        <hr />

                        <div className='my-5 d-flex text-center'>
                            <div className="mx-auto">
                                <img className='imagenpago w-50 mx-auto' src={contraentrega} alt="Contraentrega" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Precio