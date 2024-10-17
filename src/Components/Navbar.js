import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full flex h-[70px] items-center justify-between p-10 gap-2">
      
      <div>
        <h1>Employees</h1>
      </div>
      
      <div className="flex gap-4"> {/* Gap between buttons */}
        <Link 
          to="/" 
          className="bg-white text-black py-2 px-4 rounded-lg border border-gray-300 hover:bg-purple-500 hover:text-white transition-colors"
        >
          All
        </Link>
        
        <Link 
          to="/Active" 
          className="bg-white text-black py-2 px-4 rounded-lg border border-gray-300 hover:bg-purple-500 hover:text-white transition-colors"
        >
          Active
        </Link>
        
        <Link 
          to="/Inactive" 
          className="bg-white text-black py-2 px-4 rounded-lg border border-gray-300 hover:bg-purple-500 hover:text-white transition-colors"
        >
          Inactive
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
