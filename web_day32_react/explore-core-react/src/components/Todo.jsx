import React from 'react'

// const Todo = ({learning, isDone}) => {
//     if (isDone === true) {
//       return <h1>Learning : {learning}</h1>
//     } else {
//       return <h1>Not learning : {learning}</h1>
//     }
  
  
// }

// export default Todo;

const Todo = ({learning, isDone, time=0}) => {
    if (isDone === true) {
      return <h1 className='text-green-600'>Learning Complete : {learning} Duration : {time}</h1>
    } else if (isDone === false ) {
      return <h1 className='text-red-600'>Learning Not Complete : {learning} Duration : {time}</h1>
    } else {
      return <h1>Not learning : {learning}</h1>
    }
  
  
}

export default Todo;