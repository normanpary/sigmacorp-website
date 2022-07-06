import fetchData from '../helpers/fetchData'
import { useRouter } from 'next/router'

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
      variables: {},
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
      variables: {},
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
      variables: {},
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
      variables: {},
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
      variables: {},
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
              made_for_bolivia
              nutritional_base_weight
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
      variables: {},
    }
  )

  return data.data.nutraceutics
}


export const getBiosecurityProducts = async (language) => {
  const data = await fetchData(
    `
    query {
      biosecurities  (locale:"${language}", pagination: { start: 0, limit: 100 }, sort: ["biosecurity_category.order:asc", "title:asc"]){
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
            biosecurity_category
            {
              data{
                attributes{
                  title
                  order
                }
              }
            }
            
            
          }
        }
      }
    }
      
      `,
    {
      variables: {},
    }
  )

  return data.data.biosecurities
}



export const getProductBiosecurityDetails = async (language, slug) => {
  const data = await fetchData(
    `
        query {
          biosecurities  (filters:{slug:{eq:"${slug}"} }, locale:"${language}"){
            data {  
              attributes{
                title
                slug
                description
                
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
               
                
                pharmaceutics_category{
                  data{
                    attributes{
                      name
                      slug

                      
                      
                    }
                  }
                }
              }
            }
          }
        }
        `,
    {
      variables: {},
    }
  )

  return data.data.biosecurities
}

export const getBiosecurityProductsFromCategory = async (language, slug) => {
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
      variables: {},
    }
  )

  return data.data.pharmaceuticsProducts
}



export const getEvents = async (language) => {
  const data = await fetchData(
    `
    query {
      events (locale:"${language}", pagination: { start: 0, limit: 100 }){
        data {  
          attributes{
            title
            slug
            date
            description
            main_image{
              data{
                attributes{
                  url
                }
              }
            }
            gallery{
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
      variables: {},
    }
  )

  return data.data.events
}

export const getEventDetails = async (language, slug) => {
  const data = await fetchData(
    `
      query {
        events  (filters:{slug:{eq:"${slug}"} }, locale:"${language}"){
          data {  
            attributes{
              title
              slug
              description
              main_image{
                data{
                  attributes{
                    url
                  }
                }
              }
              gallery{
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
      variables: {},
    }
  )

  return data.data.events
}

export const getRseEvents = async (language) => {
  const data = await fetchData(
    `
    query {
      rses (locale:"${language}", pagination: { start: 0, limit: 100 }){
        data {  
          attributes{
            title
            slug
            date
            description
            main_image{
              data{
                attributes{
                  url
                }
              }
            }
            gallery{
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
      variables: {},
    }
  )

  return data.data.rses
}

export const getRseEventDetails = async (language, slug) => {
  const data = await fetchData(
    `
      query {
        rses  (filters:{slug:{eq:"${slug}"} }, locale:"${language}"){
          data {  
            attributes{
              title
              slug
              description
              main_image{
                data{
                  attributes{
                    url
                  }
                }
              }
              gallery{
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
      variables: {},
    }
  )

  return data.data.rses
}

export const getNews = async (language) => {
  const data = await fetchData(
    `
    query {
      news (locale:"${language}", pagination: { start: 0, limit: 100 }){
        data {  
          attributes{
            title
            slug
            date
            description
            main_image{
              data{
                attributes{
                  url
                }
              }
            }
            gallery{
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
      variables: {},
    }
  )

  return data.data.news
}

export const getNewDetails = async (language, slug) => {
  const data = await fetchData(
    `
      query {
        news  (filters:{slug:{eq:"${slug}"} }, locale:"${language}"){
          data {  
            attributes{
              title
              slug
              description
              main_image{
                data{
                  attributes{
                    url
                  }
                }
              }
              gallery{
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
      variables: {},
    }
  )

  return data.data.news
}