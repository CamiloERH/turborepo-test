"use client";

import Link from "next/link"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage } from "../ui/avatar";
import { CardHeader, CardContent, Card } from "../ui/card";
import dynamic from "next/dynamic";
const ResponsiveBar = dynamic(() => import("@nivo/bar").then(m => m.ResponsiveBar), { ssr: false });
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../ui/table";

export const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-200">
            <aside className="w-64 bg-white shadow-md">
                <nav className="mt-10 px-6 ">
                    <Link className="flex items-center mt-4 py-2 px-6 bg-primary rounded-md text-gray-700" href="#">
                        <LayoutDashboardIcon className="w-4 h-4" />
                        <span className="mx-3">Dashboard</span>
                    </Link>
                    <Link className="flex items-center mt-4 py-2 px-6 text-gray-500" href="#">
                        <UsersIcon className="w-4 h-4" />   
                        <span className="mx-3">Users</span>
                    </Link>
                    <Link className="flex items-center mt-4 py-2 px-6 text-gray-500" href="#">
                        <SettingsIcon className="w-4 h-4" />
                        <span className="mx-3">Settings</span>
                    </Link>
                </nav>
            </aside>
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="flex items-center justify-between p-6 border-b-2">
                    <div className="flex items-center">
                        <Button className="mr-4" size="icon" variant="ghost">
                            <MenuIcon className="w-6 h-6" />
                        </Button>
                        <h1 className="text-3xl font-semibold text-gray-700">Dashboard</h1>
                    </div>
                    <div className="flex items-center">
                        <Badge className="mr-4" color="green">
                            Online
                        </Badge>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-6 py-8">
                        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                            <Card className="border-primary">
                                <CardHeader>
                                    <p className="text-lg font-semibold text-gray-600">Total Users</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-primary text-lg font-bold">6389</p>
                                </CardContent>
                            </Card>
                            <Card className="border-primary">
                                <CardHeader>
                                    <p className="text-lg font-semibold text-gray-600">New Users</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-primary text-lg font-bold">376</p>
                                </CardContent>
                            </Card>
                            <Card className="border-primary">
                                <CardHeader>
                                    <p className="text-lg font-semibold text-gray-600">Page Views</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-primary text-lg font-bold">787</p>
                                </CardContent>
                            </Card>
                            <Card className="border-primary">
                                <CardHeader>
                                    <p className="text-lg font-semibold text-gray-600">Unique Visits</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-primary text-lg font-bold">176</p>
                                </CardContent>
                            </Card>
                        </div>
                        <BarChart className="w-full aspect-[4/3]" />
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ID</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>John Doe</TableCell>
                                    <TableCell>john@gmail.com</TableCell>
                                    <TableCell>
                                        <Badge color="green">Active</Badge>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2</TableCell>
                                    <TableCell>Jane Doe</TableCell>
                                    <TableCell>jane@gmail.com</TableCell>
                                    <TableCell>
                                        <Badge color="red">Inactive</Badge>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </main>
        </div>
    )
}

function BarChart(props: any) {
    return (
        <div {...props}>
            <ResponsiveBar
                data={[
                    {
                        name: "A",
                        data: 111,
                    },
                    {
                        name: "B",
                        data: 157,
                    },
                    {
                        name: "C",
                        data: 129,
                    },
                    {
                        name: "D",
                        data: 187,
                    },
                    {
                        name: "E",
                        data: 119,
                    },
                    {
                        name: "F",
                        data: 22,
                    },
                    {
                        name: "G",
                        data: 101,
                    },
                    {
                        name: "H",
                        data: 83,
                    },
                ]}
                keys={["data"]}
                indexBy="name"
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "paired" }}
                borderWidth={1}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Name",
                    legendPosition: "middle",
                    legendOffset: 45,
                    truncateTickAt: 0,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Number",
                    legendPosition: "middle",
                    legendOffset: -45,
                    truncateTickAt: 0,
                }}
                theme={{
                    tooltip: {
                        container: {
                            fontSize: "12px",
                        },
                    },
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                role="application"
                ariaLabel="A bar chart showing data"
            />
        </div>
    )
}


function LayoutDashboardIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
    )
}


function MenuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function SettingsIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function UsersIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}