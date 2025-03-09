import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    function pathMatch(route) {
        return location.pathname === route;
    }

    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto '>
                <div>
                    <img
                        src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
                        alt="logo"
                        className='h-5 cursor-pointer'
                        onClick={() => navigate("/")}
                    />
                </div>
                <div>
                    <ul className='flex space-x-10'>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 cursor-pointer ${pathMatch("/") ? "border-b-4 border-red-500 text-black" : ""}`} on onClick={() => navigate("/")}>
                            Home

                        </li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 cursor-pointer ${pathMatch("/offers") ? "border-b-4 border-red-500 text-black" : ""}`} on onClick={() => navigate("/offers")}>
                            Offers

                        </li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 cursor-pointer ${pathMatch("/sign-in") ? "border-b-4 border-red-500 text-black" : ""}`} on onClick={() => navigate("/sign-in")}>

                            Sign In

                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

