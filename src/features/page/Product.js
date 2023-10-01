import ProductList  from "../Product/components/ProductList";
import ProductDetails from "../Product/components/productDetails";
import Navbar from "../navbar/Navbar";


function Product() {
    return ( 
        <><Navbar>
            <ProductDetails></ProductDetails>
        </Navbar>
        
        </>
    );
}

export default Product;