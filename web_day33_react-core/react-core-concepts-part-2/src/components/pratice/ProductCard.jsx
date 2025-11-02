const ProductCard =({name, price, description}) =>{
    return (
        <div className="border-2  p-4 ">
            <img  className ="w-1/2 mx-auto" src={"https://www.shutterstock.com/image-photo/lake-palms-mahe-island-seychelles-260nw-119831752.jpg"} alt="" />
            <h1>Product Name: {name}</h1>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
        </div>
    )
}
export default ProductCard;

