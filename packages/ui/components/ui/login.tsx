/**
 * v0 by Vercel.
 * @see https://v0.dev/t/v3PPf9IDBPU
 */
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { FC } from "react";

interface LoginProps {
    img: string;
    title: string;
}

export const Login: FC<LoginProps> = ({ img, title }) => {
    return (
        <div className="h-screen flex overflow-hidden bg-white dark:bg-gray-800">
            <div className="w-1/2 bg-gray-100">
                <img
                    alt="Cover Image"
                    className="h-full w-full object-cover"
                    height="1080"
                    src={img}
                    style={{
                        aspectRatio: "960/1080",
                        objectFit: "cover",
                    }}
                    width="960"
                />
            </div>
            <div className="w-1/2 flex items-center justify-center p-12">
                <div className="mx-auto w-[350px] space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="text-gray-500 dark:text-gray-400">Enter your email and password to login</p>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="m@example.com" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link className="text-sm underline" href="#">
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input id="password" required type="password" />
                        </div>
                        <Button className="w-full" type="submit">
                            <Link className="underline" href="/dashboard">
                                Login
                            </Link>
                        </Button>
                        <Button className="w-full" variant="outline">
                            Login with Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don't have an account?
                        <Link className="underline" href="#">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

