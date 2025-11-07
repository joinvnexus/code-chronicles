import React,{Suspense, useEffect
} from "react";
import ProfileCard from "./components/pratice/ProfileCard";
// import Welcome from "./components/pratice/wellcome";
import ProductCard from "./components/pratice/ProductCard";
import Counter from "./components/pratice/Counter"
import NameInput from "./components/pratice/NameInput";
import PostCard from "./components/pratice/PostCard";

function App() {
    return (
        <>

            {/* <Welcome name="Rafi" /> */}

            <ProfileCard name="Projoy" age={22} profession="Web Developer" about="I love building interactive web apps using React!" />

            <ProductCard
                name="Laptop"
                price={85000}
                description="Powerful laptop with 16GB RAM and 512GB SSD."
            />

            <Counter />

            <NameInput />

            <PostCard
                title="React শেখার শুরু"
                content="React হলো JavaScript দিয়ে UI তৈরির একটি দারুণ লাইব্রেরি।"
            />
            <PostCard
                title="Props আর State একসাথে"
                content="এগুলো মিলে React কম্পোনেন্টকে করে তোলে ইন্টার‌্যাকটিভ।"
            />

        </>
    )
}
export default App;