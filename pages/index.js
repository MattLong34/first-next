import Link from "next/link"

const Index = () => {
    return (
        <div>
            <Link href="/about">
                <a>About Expanse Travel</a>
            </Link>
            <Link href="/contact">
                <a>Contact Us</a>
            </Link>
            <h1>Index Page - Welcome to Expanse Travel!</h1>
        </div>
    )
};

export default Index;