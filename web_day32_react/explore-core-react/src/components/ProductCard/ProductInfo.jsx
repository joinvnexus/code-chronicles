
function ProductInfo ({name, des}){
    return(
        <div className="text-gray-800 font-semibold mb-4 px-4">
            <h2 className="text-xl">{name}</h2>
            <p className="text-gray-600">{des}</p>
        </div>
    )
}

export default ProductInfo
