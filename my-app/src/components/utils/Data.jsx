const productos = [
  {
    id: 1,
    name: "Shampoo ColorMaster Neutro",
    category:'oferta',
    price: 100,
    description:"Alguna descripcion del producto",
    img:
      "https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/P/R/PR29539BI19724_PS131738_BLENDS_OF_MANY_REBAL_TONIC_100ml_SZ1.png",
    stock: 20,
  },
  {
    id: 2,
    name: "Shampoo CAVIAR 1L",
    category:'oferta',
    price: 100,
    description:"Alguna descripcion del producto",
    img:
      "https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/P/R/PR29539BI19724_PS131738_BLENDS_OF_MANY_REBAL_TONIC_100ml_SZ1.png",
    stock: 25,
  },
  {
    id: 3,
    name: "Shampoo Caviar ARGAN",
    category:'oferta',
    price: 100,
    description:"Alguna descripcion del producto",
    img:
      "https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/P/R/PR29539BI19724_PS131738_BLENDS_OF_MANY_REBAL_TONIC_100ml_SZ1.png",
    stock: 30,
  },
  {
    id: 4,
    name: "Crema de Peinar Caviar",
    category:'oferta',
    price: 500,
    description:"Alguna descripcion del producto",
    img:
      "https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/P/R/PR29539BI19724_PS131738_BLENDS_OF_MANY_REBAL_TONIC_100ml_SZ1.png",
    stock: 32,
  },
  {
    id: 5,
    name: "Ampollas Fidelite",
    category:'nuevos',
    price: 500,
    description:"Alguna descripcion del producto",
    img:
      "https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/P/R/PR29539BI19724_PS131738_BLENDS_OF_MANY_REBAL_TONIC_100ml_SZ1.png",
    stock: 16,
  },
  {
    id: 6,
    name: "Ampollas Semi di Lino",
    category:'nuevo',
    price: 500,
    description:"Alguna descripcion del producto",
    img:
      "https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/P/R/PR29539BI19724_PS131738_BLENDS_OF_MANY_REBAL_TONIC_100ml_SZ1.png",
    stock: 21,
  },
  {
    id: 7,
    name: "Shampoo semi DiLino",
    category:'oferta',
    price: 1000,
    description:"Alguna descripcion del producto",
    img:
      "https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/P/R/PR29539BI19724_PS131738_BLENDS_OF_MANY_REBAL_TONIC_100ml_SZ1.png",
    stock: 3,
  },
  {
    id: 8,
    name: "Mascara Loreal",
    category:'vendidos',
    price: 1000,
    description:"Alguna descripcion del producto",
    img:
      "https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/P/R/PR29539BI19724_PS131738_BLENDS_OF_MANY_REBAL_TONIC_100ml_SZ1.png",
    stock: 40,
  },
  {
    id: 9,
    name: "Shampoo Loreal",
    category:'oferta',
    price: 1000,
    description:"Alguna descripcion del producto",
    img:
      "https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/P/R/PR29539BI19724_PS131738_BLENDS_OF_MANY_REBAL_TONIC_100ml_SZ1.png",
    stock: 35,
  },
  ]

   export const data = new Promise((resolve, reject) => {
    //acciones
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject(' Error 504! ')
      }

    },)

  })