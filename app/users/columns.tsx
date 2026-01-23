"use client"
import { ColumnDef } from "@tanstack/react-table";
import { User } from "./page";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const columns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Name <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const name = row.getValue("name") as string;
            return (
                <Link 
                    href={`/users/${name.toLowerCase().replace(' ', '-')}`}
                    className="font-medium hover:underline"
                >
                    {name}
                </Link>
            )
        }
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Email <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => {
            const role = row.getValue("role") as string;
            return (
                <Badge variant={
                    role === "admin" ? "default" : 
                    role === "moderator" ? "secondary" : 
                    "outline"
                }>
                    {role}
                </Badge>
            )
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            return (
                <div className={cn(
                    'px-2 py-1 rounded-md w-max text-xs font-medium',
                    status === "active" && 'bg-green-500/20 text-green-700 dark:text-green-400',
                    status === "inactive" && 'bg-red-500/20 text-red-700 dark:text-red-400',
                    status === "pending" && 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400',
                )}>
                    {status}
                </div>
            )
        }
    },
    {
        accessorKey: "joinDate",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Join Date <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const date = new Date(row.getValue("joinDate"));
            return date.toLocaleDateString();
        }
    },
    {
        accessorKey: "lastActive",
        header: "Last Active",
        cell: ({ row }) => {
            const date = new Date(row.getValue("lastActive"));
            const now = new Date();
            const diffTime = Math.abs(now.getTime() - date.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) return "Today";
            if (diffDays === 2) return "Yesterday";
            if (diffDays <= 7) return `${diffDays - 1} days ago`;
            return date.toLocaleDateString();
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const user = row.original;
            const userName = user.name.toLowerCase().replace(' ', '-');

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(user.id)}
                        >
                            Copy user ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href={`/users/${userName}`} className="flex items-center">
                                <Eye className="mr-2 h-4 w-4" />
                                View profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit user
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete user
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    }
]