
import Name from "./name.jsx";
import Objcet from "./Objcet.jsx";
function Array() {
    const names = ['projoy', 'riya', 'rahul', 'rohit', 'anwar', 'sudha']

    const Obj = [
        { id: 1, name: 'projoy', age: 20 },
        { id: 2, name: 'riya', age: 22 },
        { id: 3, name: 'rahul', age: 23 },
        { id: 4, name: 'rohit', age: 26 },
        { id: 5, name: 'anwar', age: 28 },
        { id: 6, name: 'sudha', age: 25 },
    ]
    return (
        <div className="bg-gray-300 p-4 rounded-xl border-2 border-green-600 flex flex-row flex-wrap items-center justify-center gap-4">
            <h1> react -core & maping</h1>
            {
                Obj.map((obj) => <Objcet key={obj.id} person={obj}></Objcet>)
            }

            {
                names.map((nam) => <Name key={nam} User={nam}></Name>)
            }
        </div>
    )

}

export default Array