import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { Button } from "./ui/button";

function Navbar() {
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
            name: "Projects",
            href: "/projects",
            route: "projects",
        },

        {
            name: "Contact",
            href: "/contact",
            route: "contact",
        },
    ];
    return (
        <header className="w-full">
            <div className="container max-w-[1200px] mx-auto">
                <div className="flex justify-between items-center py-4">
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
                    <nav className="hidden md:flex gap-10">
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
                    <Button className="text-base font-medium font-roboto px-8 bg-[#1d2130] hover:bg-[#1d2130]/80">
                        Donate
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
