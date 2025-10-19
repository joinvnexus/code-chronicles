import React from 'react'

const Discount = () => {
    const isMember = true
    if (isMember) {
        return <h1>You get 20% off 🎁</h1>
    } else {
        return <h1>Sign up to get discounts!</h1>
    }
}

export default Discount