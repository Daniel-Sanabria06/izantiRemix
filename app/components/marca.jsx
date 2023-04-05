import { Link } from '@remix-run/react'

export default function Marca({marca}) {

    const { imagen, precio, url, nombre, distintivo } = marca

    const precioConFormato = precio.toLocaleString('es-CO', {currency: 'COP'});

    //Lógica para precio de promoción

    const descuento = ( precio * 15 ) / 100;

    const precioDescuento = precio - descuento;

    const precioPromocionFinal = precioDescuento.toLocaleString('es-CO', {currency: 'COP'});

    return (
    <Link className='marca text-center' to={`/catalogoMarcas/${url}`}>
        <img src={imagen.data.attributes.url} className='marcaImagen' alt={'Imagen Publicación &{nombre}'} />
        <div className='contenido'>
            <p className='distintivo'>{distintivo}</p>
            <p className='texto'>{nombre}</p>
            <p className='precio'><s>$ {precioConFormato} COP</s></p>
            <p className='precio'>$ {precioPromocionFinal} COP</p>
            <small>Por tiempo limitado</small>
        </div>
    </Link>
  )
}