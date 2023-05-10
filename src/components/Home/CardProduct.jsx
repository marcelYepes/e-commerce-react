import React from "react"
import {useNavigate} from "react-router-dom"
import useCrudCart from "../../hooks/useCrudCart"

const CardProduct = ({product}) => {
  const navigate = useNavigate()
  const {addProductToCart} = useCrudCart()

  const handleSelectProduct = () => {
    navigate(`/product/${product.id}`)
  }

  const handleBtnClick = e => {
    e.stopPropagation()
    const data = {
      quantity: 1,
      productId: product.id,
    }
    addProductToCart(data)
  }

  return (
    <article className="product" onClick={handleSelectProduct}>
      <header className="product__header">
        <img
          className="product__img product__img-1"
          src={product.images[0].url}
          alt=""
        />
        <img
          className="product__img product__img-2"
          src={product.images[1].url}
          alt=""
        />
      </header>
      <section className="product__section">
        <h4 className="product__subtitle">{product.brand}</h4>
        <h3 className="product__subtitle">{product.title}</h3>
      </section>
      <div className="product__price">
        <span className="product__price-label">Price</span>
        <span className="product__price-value">{product.price}</span>
      </div>
      <button onClick={handleBtnClick} className="product__btn">
        <i className="bx bxs-cart"></i>
      </button>
    </article>
  )
}

export default CardProduct
