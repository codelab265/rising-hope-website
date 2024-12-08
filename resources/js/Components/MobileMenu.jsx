import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";

function MobileMenu() {
    const { url } = usePage();
    const NavbarLinks = [
        {
            name: "Home",
            href: "/",
            route: "home",
        },
        {
            name: "About",
            href: "/about",
            route: "about",
        },
        {
            name: "What We Do",
            href: "/what-we-do",
            route: "what-we-do",
        },

        {
            name: "Contact",
            href: "/contact",
            route: "contact",
        },
        {
            name: "Donate",
            href: "/donate",
            route: "donate",
        },
    ];
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className={"lg:hidden"}>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <Link
                            href="/"
                            className="text-2xl font-bold text-primary flex items-center"
                        >
                            <img
                                src="/images/logo.png"
                                alt="Rising Hope"
                                className="w-20 h-auto  "
                            />
                            <span className="text-black text-2xl font-bold font-roboto leading-[44px]">
                                Rising Hope
                            </span>
                        </Link>
                    </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-10 mt-10">
                    {NavbarLinks.map((item) => (
                        <Link
                            key={item.route}
                            href={item.href}
                            className={`text-base font-medium transition-colors hover:text-primary font-roboto ${
                                url === item.href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileMenu;
