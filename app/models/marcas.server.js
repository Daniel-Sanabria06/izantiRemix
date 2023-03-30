export async function getMarcas() {
  const respuesta = await fetch(`${process.env.API_URL}/armanis?filters[distintivo]=Armani%20Exchange&fields=nombre&fields=precio&fields=url&fields=imagen&populate=imagen&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=8`)
  return await respuesta.json()
}

export async function getCatalogo() {
  const respuesta = await fetch(`${process.env.API_URL}/armanis?fields=nombre&fields=precio&fields=url&fields=imagen&populate=imagen&sort=createdAt:desc`)
  return await respuesta.json()
}

export async function getIndex() {
  const respuesta = await fetch(`${process.env.API_URL}/armanis?filters[distintivo]=Armani%20Exchange&fields=nombre&fields=precio&fields=distintivo&fields=url&fields=imagen&populate=imagen&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=8`)
  return await  respuesta.json() 
}

export async function getIndex2() {
  const respuesta = await fetch(`${process.env.API_URL}/armanis?filters[distintivo]=True%20Religion&fields=nombre&fields=precio&fields=url&fields=imagen&populate=imagen&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=8`)
  return await respuesta.json()
}

export async function getArmani(url) {
    const respuesta = await fetch(`${process.env.API_URL}/armanis?filters[url]=${url}&fields=nombre&fields=precio&fields=descripcion&fields=color&fields=stock&fields=imagen&fields=imagen2&fields=tallas&fields=distintivo&fields=url&populate=imagen&populate=imagen2`)
    return await respuesta.json()
}
