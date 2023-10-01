import ProductList  from "../Product/components/ProductList";
import Navbar from "../navbar/Navbar";


function Home() {
    return ( 
        <><Navbar>
            
            <ProductList></ProductList>
        </Navbar>
        
        </>
    );
}

export default Home;