
import { lazy, Suspense } from 'react'
 const LazyComponent = lazy ( () => import('./LazyComponent'))

function Main (){
    return(
        <div>
            {/* <h1>Lazy Component</h1> */}
            <Suspense fallback={<div className="loaders"> loading...</div>}>
                <LazyComponent />
            </Suspense>


        </div>
    )
}

export default Main
