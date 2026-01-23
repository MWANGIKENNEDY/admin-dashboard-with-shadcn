import { DataTable } from '@/app/users/data-table';
import { columns } from '@/app/users/columns';

export type User = {
    id: string,
    name: string,
    email: string,
    role: "admin" | "user" | "moderator",
    status: "active" | "inactive" | "pending",
    joinDate: string,
    lastActive: string
}

const getData = async (): Promise<User[]> => {
    return [
        {
            id: "usr_001",
            name: "John Doe",
            email: "john.doe@example.com",
            role: "admin",
            status: "active",
            joinDate: "2024-01-15",
            lastActive: "2025-01-23"
        },
        {
            id: "usr_002",
            name: "Jane Smith",
            email: "jane.smith@example.com",
            role: "user",
            status: "active",
            joinDate: "2024-02-20",
            lastActive: "2025-01-22"
        },
        {
            id: "usr_003",
            name: "Mike Johnson",
            email: "mike.johnson@example.com",
            role: "moderator",
            status: "active",
            joinDate: "2024-03-10",
            lastActive: "2025-01-23"
        },
        {
            id: "usr_004",
            name: "Sarah Wilson",
            email: "sarah.wilson@example.com",
            role: "user",
            status: "inactive",
            joinDate: "2024-01-05",
            lastActive: "2025-01-10"
        },
        {
            id: "usr_005",
            name: "David Brown",
            email: "david.brown@example.com",
            role: "user",
            status: "pending",
            joinDate: "2025-01-20",
            lastActive: "2025-01-20"
        },
        {
            id: "usr_006",
            name: "Emily Davis",
            email: "emily.davis@example.com",
            role: "admin",
            status: "active",
            joinDate: "2023-12-01",
            lastActive: "2025-01-23"
        },
        {
            id: "usr_007",
            name: "Robert Miller",
            email: "robert.miller@example.com",
            role: "user",
            status: "active",
            joinDate: "2024-04-15",
            lastActive: "2025-01-21"
        },
        {
            id: "usr_008",
            name: "Lisa Anderson",
            email: "lisa.anderson@example.com",
            role: "moderator",
            status: "active",
            joinDate: "2024-05-22",
            lastActive: "2025-01-23"
        },
        {
            id: "usr_009",
            name: "James Taylor",
            email: "james.taylor@example.com",
            role: "user",
            status: "inactive",
            joinDate: "2024-02-14",
            lastActive: "2024-12-15"
        },
        {
            id: "usr_010",
            name: "Maria Garcia",
            email: "maria.garcia@example.com",
            role: "user",
            status: "active",
            joinDate: "2024-06-30",
            lastActive: "2025-01-22"
        },
        {
            id: "usr_011",
            name: "Christopher Lee",
            email: "christopher.lee@example.com",
            role: "user",
            status: "pending",
            joinDate: "2025-01-18",
            lastActive: "2025-01-18"
        },
        {
            id: "usr_012",
            name: "Amanda White",
            email: "amanda.white@example.com",
            role: "moderator",
            status: "active",
            joinDate: "2024-03-25",
            lastActive: "2025-01-23"
        },
        {
            id: "usr_013",
            name: "Daniel Martinez",
            email: "daniel.martinez@example.com",
            role: "user",
            status: "active",
            joinDate: "2024-07-12",
            lastActive: "2025-01-21"
        },
        {
            id: "usr_014",
            name: "Jennifer Thompson",
            email: "jennifer.thompson@example.com",
            role: "admin",
            status: "active",
            joinDate: "2023-11-08",
            lastActive: "2025-01-23"
        },
        {
            id: "usr_015",
            name: "Kevin Rodriguez",
            email: "kevin.rodriguez@example.com",
            role: "user",
            status: "inactive",
            joinDate: "2024-01-30",
            lastActive: "2024-11-20"
        },
        {
            id: "usr_016",
            name: "Michelle Clark",
            email: "michelle.clark@example.com",
            role: "user",
            status: "active",
            joinDate: "2024-08-05",
            lastActive: "2025-01-22"
        },
        {
            id: "usr_017",
            name: "Ryan Lewis",
            email: "ryan.lewis@example.com",
            role: "moderator",
            status: "active",
            joinDate: "2024-04-20",
            lastActive: "2025-01-23"
        },
        {
            id: "usr_018",
            name: "Nicole Walker",
            email: "nicole.walker@example.com",
            role: "user",
            status: "pending",
            joinDate: "2025-01-15",
            lastActive: "2025-01-15"
        },
        {
            id: "usr_019",
            name: "Brandon Hall",
            email: "brandon.hall@example.com",
            role: "user",
            status: "active",
            joinDate: "2024-09-10",
            lastActive: "2025-01-21"
        },
        {
            id: "usr_020",
            name: "Stephanie Young",
            email: "stephanie.young@example.com",
            role: "admin",
            status: "active",
            joinDate: "2023-10-15",
            lastActive: "2025-01-23"
        },
        {
            id: "usr_021",
            name: "Gregory King",
            email: "gregory.king@example.com",
            role: "user",
            status: "inactive",
            joinDate: "2024-02-28",
            lastActive: "2024-10-05"
        },
        {
            id: "usr_022",
            name: "Rachel Green",
            email: "rachel.green@example.com",
            role: "user",
            status: "active",
            joinDate: "2024-10-12",
            lastActive: "2025-01-22"
        },
        {
            id: "usr_023",
            name: "Anthony Adams",
            email: "anthony.adams@example.com",
            role: "moderator",
            status: "active",
            joinDate: "2024-05-08",
            lastActive: "2025-01-23"
        },
        {
            id: "usr_024",
            name: "Kimberly Baker",
            email: "kimberly.baker@example.com",
            role: "user",
            status: "pending",
            joinDate: "2025-01-12",
            lastActive: "2025-01-12"
        },
        {
            id: "usr_025",
            name: "Joshua Nelson",
            email: "joshua.nelson@example.com",
            role: "user",
            status: "active",
            joinDate: "2024-11-20",
            lastActive: "2025-01-21"
        }
    ];
};

const UsersPage = async () => {
    const data = await getData();
    return (
        <div>
            <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
                <h1 className='font-semibold'>All Users</h1>
            </div>

            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default UsersPage
