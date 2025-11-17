// src/components/layout/Header.tsx

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/Logo.png";
import { LoginModal } from "@/components/(auth)/LoginModal";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const auth = useAuth();

  // Prevent crash if context wasn't loaded yet
  const user = auth?.user || null;
  const logout = auth?.logout || (() => {});

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/">
              <img src={logo} className="h-10" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[15px] font-medium ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-4 relative">
              {user ? (
                <>
                  {/* Avatar + Name */}
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <img
                      src={`https://api.dicebear.com/9.x/initials/svg?seed=${user.name}`}
                      className="w-10 h-10 rounded-full border"
                    />
                    <span className="font-semibold">
                      {user.name?.split(" ")[0]}
                    </span>
                  </div>

                  {/* Dropdown */}
                  {isDropdownOpen && (
                    <div className="absolute top-14 right-0 bg-white shadow-lg border rounded-lg w-44 overflow-hidden">
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <User className="w-4 h-4 mr-2" /> Profile
                      </Link>

                      <button
                        className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={handleLogout}
                      >
                        <LogOut className="w-4 h-4 mr-2" /> Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <Button variant="outline" onClick={() => setIsLoginOpen(true)}>
                    Login
                  </Button>
                  <Button asChild>
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Icon */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {user ? (
              <>
                <Button
                  asChild
                  className="w-full bg-black text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/profile">My Profile</Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Login
                </Button>

                <Button asChild className="w-full">
                  <Link to="/booking">Book Now</Link>
                </Button>
              </>
            )}
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Header;
