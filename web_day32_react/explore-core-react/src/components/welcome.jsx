function Welcome(props) {
    return (
        <div className="bg-gray-100 rounded
         pb-8 mb-4 px-3 py-3 text-center
          text-2xl">
            <h2>Hello ,{props.name}</h2>
        </div>
    )


}

export default Welcome;