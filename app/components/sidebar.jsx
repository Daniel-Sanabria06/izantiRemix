import { Link } from "@remix-run/react"
import logo from '../../public/img/logoredondo.jpg'


const Sidebar = () => {
  return (
    <>

        <div className="row d-flex mb-2">

            <div className="col ml-4">
               <div className="ml-5">
                    <Link to='/'>
                        <img className='ml-2 logo' src={logo} alt="imagen logo"/>
                    </Link>
                </div>
            </div>
            

            <div className="col text-center">
              <nav className="navbar navbar-expand-lg navbar-light mt-2 menu">

                <button className="mt-4 mr-2 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
              </nav>
            </div>

            <div className="col-sm">

               <nav className="navbar navbar-expand-lg navbar-light mb-2">
                <div className="collapse navbar-collapse linksMenuSidebar " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto d-flex justify-content-center d-flex-sm gap-5">

                    <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" >
                        <Link className="nav-link text-white" to='/'>Inicio</Link >
                    </li>

                    <li className="nav-item dropdown" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <Link className="text-white nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Catálogo
                        </Link>
                            <div className="dropdown-menu text-center bg-black5" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item text-white mb-3 fs-2" to='/catalogo'>Todos</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='/hombres'>Hombres</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='/mujeres'>Mujeres</Link>
                            </div>
                        </li>

                        <li className="nav-item"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <Link className="nav-link text-white" to='/marcas'>Marcas</Link >
                        </li>

                </ul>

                </div>
            </nav>
        </div>
        </div>
        
    </>
  )
}

export default Sidebar