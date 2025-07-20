export default function Landing() {
    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold">Welcome to Task Manager</h1>
            <p className="mt-4 text-lg">Organize your work efficiently.</p>
            <a href="/auth" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                Login / Signup 
            </a>
        </div>
    );
}
