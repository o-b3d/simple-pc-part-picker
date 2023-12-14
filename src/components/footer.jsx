import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-neutral-content">
            <aside>
                <p className="font-bold">Simple PC Part Picker</p>
                <p></p>
                <Link className="link link-hover" to="/login">
                    Log-In to Account
                </Link>
                <p></p>
                <p>Made by Obed & Rahim</p>
            </aside>
        </footer>
    )
}
