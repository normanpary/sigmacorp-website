import fetchData from "../helpers/fetchData";
import {useRouter} from "next/router"



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