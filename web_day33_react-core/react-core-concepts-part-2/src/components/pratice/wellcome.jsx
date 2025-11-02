const Welcome = (props ) => {
    const name = "Rahim";
    const element = <h1>Hello, {name}!</h1>;
    const user = {
        fristName: "Rahim",
        lastName: "Rahman"
    }
    const element2 = <h1>Hello, {user.fristName} & {user.lastName}!</h1>;


    return (
        <div>
            <h1>wellcome react world</h1>
            {element}
            {element2}
            {props.name}
        </div>
    )
}
export default Welcome;