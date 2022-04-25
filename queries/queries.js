import fetchData from "../helpers/fetchData";
import {useRouter} from "next/router"

export const getPharmaceuticCategories = async (language, id) => {
console.log(id)
    
  const data = await fetchData(
      `
      query {
        categories (sort: "name:asc", pagination: { start: 0, limit: 100 }, locale:"${language}") {
          data {
            attributes
            {
              name
              slug
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
              icon{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }  
        }
      }
      `,
      {
          variables: {}
      }
  )
  //console.log(data.data)
  return data.data.categories
}


export const getPharmaceuticProducts = async (language, slug) => {
      
    const data = await fetchData(
        `
        query {
          pharmaceuticsProducts  (filters:{pharmaceutics_category:{slug:{eq:"${slug}"}} }, locale:"${language}", pagination: { start: 0, limit: 100 }){
            data {  
              attributes{
                title
                slug
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
                type_of_sale{
                  data{
                    attributes{
                      title
                    }
                  }
                }
                pharmaceutics_category{
                  data{
                    attributes{
                      name
                      slug
                      icon{
                        data{
                          attributes{
                            url
                          }
                        }

                      }
                    }
                  }
                }
              }
            }
          }
        }
        `,
        {
            variables: {}
        }
    )
   
    return data.data.pharmaceuticsProducts
  }
  

  export const getProductDetails = async (language, slug) => {
      
    const data = await fetchData(
        `
        query {
          pharmaceuticsProducts  (filters:{slug:{eq:"${slug}"} }, locale:"${language}"){
            data {  
              attributes{
                title
                slug
                description
                therapeutical_action
                composition
                presentation
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
                type_of_sale{
                  data{
                    attributes{
                      title
                    }
                  }
                }
                
                pharmaceutics_category{
                  data{
                    attributes{
                      name
                      slug

                      icon{
                        data{
                          attributes{
                            url
                          }
                        }

                      }
                      
                    }
                  }
                }
              }
            }
          }
        }
        `,
        {
            variables: {}
        }
    )
   
    




    return data.data.pharmaceuticsProducts
  }
  


export const getNoticias = async (locale, id) => {
    
    /*
    const data = await fetchData(
        `
        query {
            noticias(locale: "${locale}"){
              data{
                attributes{
                  titulo
                  descripcion
                  imagen_principal{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                 
                  }
                }
              }
            }
        `,
        {
            variables: {}
        }
    )
    */
    const data = await fetchData(
        `
        query {
            noticias(locale:"${locale}"){
              titulo
              descripcion
              imagen_principal{
                url
              }
            }
          }
        `,
        {
            variables: {}
        }
    )
    return data.data.noticias
}

export const getNutraceuticProducts = async (language) => {
      
  const data = await fetchData(
      `
      query {
        nutraceutics  (locale:"${language}", pagination: { start: 0, limit: 100 }){
          data {  
            attributes{
              title
              slug
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
              
              
            }
          }
        }
      }
      `,
      {
          variables: {}
      }
  )
 
  return data.data.nutraceutics
}

export const getNutraceuticDetails = async (language, slug) => {
      
  const data = await fetchData(
      `
      query {
        nutraceutics  (filters:{slug:{eq:"${slug}"} }, locale:"${language}"){
          data {  
            attributes{
              title
              slug

              image{
                data{
                  attributes{
                    url
                  }
                }
              }
              banner{
                data{
                  attributes{
                    url
                  }
                }
              }

              description
              short_description
              energy
              proteins
              total_fat
              cholesterol
              carbohydrates
              technical_description
              ingredients
              preparation
              duration
              indications
              nutritional_table{
                data{
                  attributes{
                    url
                  }
                }
              }


              
              
              
            }
          }
        }
      }
      `,
      {
          variables: {}
      }
  )
 
  




  return data.data.nutraceutics
}
