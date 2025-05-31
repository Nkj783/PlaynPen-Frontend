import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 shadow-md flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
}

export default Navbar;