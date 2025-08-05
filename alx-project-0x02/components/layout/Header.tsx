import Link from "next/link"

const headerLayout: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav>
                <ul>
                    <li><Link href="/home" className="hover:text-gray-300">Home</Link></li>
                    <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default headerLayout