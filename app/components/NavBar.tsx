// components/NavBar.tsx
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import Link from 'next/link';

const NavBar = () => {
  return (
    <header style={{backgroundColor: '#2b6978'}} className="w-full bg-gray-800 text-white">
      <nav className="w-full">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-center space-x-8 py-4">
          <NavigationMenuItem>
              <Link href="/" className="hover:text-gray-400">
                  Home
              </Link>
            </NavigationMenuItem>
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
              <Link href="/game" className="hover:text-gray-400">
                Learning Tools
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/sites" className="hover:text-gray-400">
                Current Sites
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/tips" className="hover:text-gray-400">
                  Severe Weather Tips
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default NavBar;