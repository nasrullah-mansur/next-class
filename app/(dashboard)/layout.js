import Navbar from "./components/Navbar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex max-w-md mx-auto gap-2">
            <div className="w-3/12 bg-blue-300"></div>
            <div className="w-9/12 bg-blue-300">
                <div className="h-12 bg-red-400">
                    <Navbar />
                </div>
                <div className="py-12">{children}</div>
                <div className="h-12 bg-green-400"></div>
            </div>
        </div>
    );
}
