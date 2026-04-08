function ProductItem(props) {
    return ( <div >
        <h3>{ props.name }</h3>
        <p>Price: ₹{ props.price }</p>
        <button>Add to Cart</button>
    </div>
    );
}

export default ProductItem;