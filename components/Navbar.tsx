import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function Navbar() {
  return (
    <NavigationMenu className="bg-slate-900 p-4">
      <NavigationMenuList className="flex gap-4 text-white">
        <NavigationMenuItem>
          <Link href="/">Home</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/manage-features">Manage Features</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/games">Games</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/games/add">Add New Game</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
