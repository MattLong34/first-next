import Link from "next/link"

const Navbar = () => {
    const styles = {
        display: "flex",
        background: "lightBlue",
        justifyContent: "space-between",
        padding: "1rem"
    }
    return (
        <div style={styles}>
            <Link href="/">
                <button>Home</button>
            </Link>
            <Link href="/about">
                <button>About Expanse Travel</button>
            </Link>
            <Link href="/resources">
                <button>Resources</button>
            </Link>
            <Link href="/sustainability">
                <button>Sustainability</button>
            </Link>
            <Link href="/contact">
                <button>Contact Us</button>
            </Link>
        </div>
    )
};

export default Navbar;