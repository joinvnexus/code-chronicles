import ProductImage from "../components/ProductCard/ProductImage";
import ProductInfo from "../components/ProductCard/ProductInfo";
import AddToCartButton from "../components/ProductCard/AddToCartButton";



function ProductCard (props){
    return(
        <div className="bg-gray-200 shadow-md rounded pb-8 mb-4">
            <ProductImage image={props.image} />
            <ProductInfo name={props.name} des={props.des} />
            <AddToCartButton />

        </div>
    )
}

export default ProductCard
