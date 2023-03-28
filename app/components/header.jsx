import { Link } from '@remix-run/react'
import logo from '../../public/img/logoredondo.png'

const Header = () => {

  return (

    <header className="header">

        <div className="contenedor barra">
            <Link to='/'>
                <img className='logo' src={logo} alt="imagen logo" />
            </Link>

            <nav className="navegacion">
                <Link to='/' >
                    Inicio
                </Link>

                <Link to='/catalogo'>
                    Catálogo
                </Link>

                <Link to='/marcas'>
                    Marcas
                </Link>
            </nav>
        </div>
        
    </header>
  )
}

export default Header