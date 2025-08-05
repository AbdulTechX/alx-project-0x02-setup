const headerLayout: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav>
                <ul>
                    <li><link href="/" className="hover:text-gray-300">Home</link></li>
                    <li><link href="/about" className="hover:text-gray-300">About</link></li>
                </ul>
            </nav>
        </header>
    )
}
export default headerLayout