// components/NavBar.tsx
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="w-full bg-gray-800 text-white">
      <nav className="w-full">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-center space-x-8 py-4">
            <NavigationMenuItem>
              <Link href="/alerts" className="hover:text-gray-400">
                Current Alerts
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/community" className="hover:text-gray-400">
                Community
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/management" className="hover:text-gray-400">
                Management Tools
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/game" className="hover:text-gray-400">
                Learning Game
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" className="hover:text-gray-400">
                Current Sites
              </Link>
            </NavigationMenuItem>
            
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default NavBar;