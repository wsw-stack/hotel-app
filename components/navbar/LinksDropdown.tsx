"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import { links } from "@/utils/links";
import SignOutLink from "./SignOutLink";
import { SignedOut, SignedIn, SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { auth } from "@clerk/nextjs/server";

function LinksDropdown() {
    // const { userId } = auth();
    const { userId, isLoaded } = useAuth()
    if (!isLoaded) return null
    const isAdminUser = userId === process.env.NEXT_PUBLIC_ADMIN_USER_ID;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-4 max-w-[100px]">
                    <LuAlignLeft className="w-6 h-6" />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52" align="start" sideOffset={10}>
                <SignedOut>
                    <DropdownMenuItem>
                        <SignInButton mode="modal">
                            <button className="w-full text-left">Login</button>
                        </SignInButton>
                    </DropdownMenuItem>
                    <Separator />
                    <DropdownMenuItem>
                        <SignUpButton mode="modal">
                            <button className="w-full text-left">
                                Register
                            </button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>
                <SignedIn>
                    {links.map((link) => {
                        if (link.label === "admin" && !isAdminUser) return null;
                        return (
                            <DropdownMenuItem key={link.href}>
                                <Link
                                    href={link.href}
                                    className="capitalize w-full"
                                >
                                    {link.label}
                                </Link>
                            </DropdownMenuItem>
                        );
                    })}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <SignOutLink />
                    </DropdownMenuItem>
                </SignedIn>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
export default LinksDropdown;
