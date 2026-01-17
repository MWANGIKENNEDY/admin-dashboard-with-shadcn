
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { LogOut, Settings, User } from 'lucide-react'
import Link from 'next/link'


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./ModeToggle"
import { SidebarTrigger, useSidebar } from "./ui/sidebar"
import { Button } from "./ui/button"

const Navbar = () => {

    // const { toggleSidebar } = useSidebar();
    return (
        <nav className=' p-4 flex items-center justify-between'>
            <SidebarTrigger/>

            {/* <Button variant="outline" onClick={toggleSidebar}>Toggle Sidebar</Button> */}
            <div className="flex items-center gap-4">

                <Link href="/">Dashboard</Link>
                <ModeToggle />

                <DropdownMenu>
                    <DropdownMenuTrigger>

                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>

                            <User className=" h-[1.2rem] w-[1.2rem] mr-2" /> Profile</DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className=" h-[1.2rem] w-[1.2rem] mr-2"></Settings> Settings

                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive"> <LogOut className=" h-[1.2rem] w-[1.2rem] mr-2" /> Logout</DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>

            </div>


        </nav>
    )
}

export default Navbar
