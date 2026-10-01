import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import products from './data/products'

function App() {
    const [cart, setCart] = useState([])
    const [search, setSearch] = useState('')

    function addToCart(product) {
        setCart(prev => [...prev, product])
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <Navbar
                cartCount={cart.length}
                search={search}
                setSearch={setSearch}
            />

            <main className="main-content">
                <h1>Explore Our Products</h1>

                <ProductList
                    products={filteredProducts}
                    addToCart={addToCart}
                />
            </main>

            <Footer />
        </>
    )
}

export default App