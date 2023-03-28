import styles from '~/styles/index.css'

export function meta() {
  return {
    title: 'Izanti - Nosotros',
    description: 'Izanti - Nosotros'
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

const nosotros = () => {

  return (
    <div  className="container nosotros">
        <p>Somos un emprendimiento de ropa importada de Estados Unidos 100% original, creada y conformada por una pareja que busca satisfacer las necesidades de nuestros clientes, garantizando seguridad, servicio y calidad al mejor precio</p>
    </div>
  )
}

export default nosotros