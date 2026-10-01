import './ProductCard.css'

function ProductCard({ product, addToCart }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>₹{product.price.toLocaleString('en-IN')}</p>

            <button onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard