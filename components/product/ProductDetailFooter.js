import { useCallback } from 'react'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { indexChange } from 'redux/actions/product'
import Back from '/public/static/images/home/Back.svg'
import Next from '/public/static/images/home/Next.svg'

const ProductDetailFooter = ({ products, index_selected, handleChangeIndexSelected }) => {
  const changeProductSelected = (pressed) => {
    let new_index = pressed === 'back' ? index_selected - 1 : index_selected + 1
    console.log(new_index)
    handleChangeIndexSelected(new_index)
  }
  {
    /** 
  //PRESSED KEYBORAD
  const pressedKey = (event) => {
    //event.preventDefault()
    //ArrowLeft
    if (event.keyCode === 37 && index_selected > 0) {
      changeProductSelected('back')
    }
    //ArrowRight
    if (event.keyCode === 39 && index_selected < products.length - 1) {
      changeProductSelected('next')
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', pressedKey, false)
    return () => {
      document.removeEventListener('keydown', pressedKey, false)
    }
  }, [index_selected])
*/
  }
  return (
    <>
      {products.length > 0 && index_selected < products.length && (
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between p-8">
          {index_selected === 0 ? (
            <div></div>
          ) : (
            <button
              className="pl-4 pr-8 py-1 bg-pink-700 rounded-full text-white font-bold flex flex-row items-center"
              onClick={() => changeProductSelected('back')}
            >
              <div className="w-6 h-6 mr-4">
                <Back />
              </div>
              {products[index_selected - 1].NAME}
            </button>
          )}

          {index_selected === products.length - 1 ? (
            <div></div>
          ) : (
            <button
              className="pr-4 pl-8 py-1 bg-pink-700 rounded-full text-white font-bold flex flex-row items-center"
              onClick={() => changeProductSelected('next')}
            >
              {products[index_selected + 1].NAME}
              <div className="w-6 h-6 ml-4">
                <Next />
              </div>
            </button>
          )}
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return { products: state.product.products, index_selected: state.product.index_selected }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeIndexSelected: (index) => {
      dispatch(indexChange(index))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailFooter)
