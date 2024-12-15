import { Link } from 'react-router-dom';

// icons
import { UserCircle, LucideLogIn } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
      <Link
        to="/home"
        className="text-3xl text-black font-semibold mb-4 md:mb-0"
      >
        Ticket Management
      </Link>

      <div className="flex gap-6 items-center justify-center mt-4 md:mt-0">
        <Link to="/home" className="text-xl text-gray-600 hover:text-gray-800">
          Home
        </Link>

        <Link
          to="/create-ticket"
          className="text-xl text-gray-600 hover:text-gray-800"
        >
          Create Ticket
        </Link>

        <Link to="/" className="text-xl text-gray-600 hover:text-gray-800">
          <LucideLogIn className="w-6 h-6" />
        </Link>

        <Link to="/user" className="text-xl text-gray-600 hover:text-gray-800">
          <UserCircle className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};
