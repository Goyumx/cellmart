import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Globe } from "lucide-react";
import { Link } from "react-router";

function Navigation() {
  return (
    <nav className="z-10 bg-black flex items-center justify-between px-4 sm:px-6 lg:px-8 text-white py-3 sm:py-4">
      <div className="flex items-center space-x-4 sm:space-x-8">
        <Link to="/" className="text-xl sm:text-2xl font-bold">
          Cellmart
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to={`/`} className="transition-colors">
            Home
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <Button variant="ghost" className="hidden sm:flex">
          <Globe className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
          <span className="text-sm sm:text-base">EN</span>
        </Button>
        <SignedOut>
          <Button variant="ghost" asChild className="text-sm sm:text-base">
            <Link to="/sign-in">Log In</Link>
          </Button>
          <Button asChild className="text-sm sm:text-base">
            <Link to="/sign-up">Sign Up</Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
          <Button asChild className="text-sm sm:text-base">
            <Link to="/account">My Account</Link>
          </Button>
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navigation;