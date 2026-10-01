import './Navbar.css'

function Navbar({ cartCount, search, setSearch }) {
    return (
        <nav className="navbar">
            <h2>Praveen's Store</h2>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <div className="cart">
                🛒 Cart: {cartCount}
            </div>
        </nav>
    )
}

export default Navbar