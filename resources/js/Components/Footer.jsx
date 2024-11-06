import { Link } from "@inertiajs/react";
import React from "react";

function Footer() {
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

    const SocialLinks = [
        {
            name: "Facebook",
            href: "https://www.facebook.com/risinghope.org.ng",
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/risinghope.org.ng",
        },
        {
            name: "Twitter",
            href: "https://www.twitter.com/risinghope.org.ng",
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/risinghope.org.ng",
        },
        {
            name: "YouTube",
            href: "https://www.youtube.com/channel/UC6666666666666666",
        },
    ];

    const MoreLinks = [
        {
            name: "Projects",
            href: "/projects",
        },
        {
            name: "Events",
            href: "/events",
        },
        {
            name: "Donate",
            href: "/donate",
        },
        {
            name: "Blog",
            href: "/blog",
        },
    ];

    return (
        <div className="bg-[#0b0706] mx-auto">
            <div className="container mx-auto max-w-[1200px]  grid grid-cols-4 pt-[86px] pb-[96px]">
                <div className="">
                    <img
                        src="/images/logo-white.png"
                        alt="Rising Hope"
                        className="w-28"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    {NavbarLinks.map((link) => (
                        <Link
                            href={link.href}
                            key={link.route}
                            className="opacity-80 text-white text-sm font-normal font-roboto leading-snug hover:opacity-100"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white text-sm font-normal font-roboto leading-snug">
                        More
                    </h3>
                    {MoreLinks.map((link) => (
                        <Link
                            href={link.href}
                            key={link.name}
                            className="opacity-80 text-white text-sm font-normal font-roboto leading-snug hover:opacity-100"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white text-sm font-normal font-roboto leading-snug">
                        Connect with us
                    </h3>
                    {SocialLinks.map((link) => (
                        <Link
                            href={link.href}
                            key={link.name}
                            className="opacity-80 text-white text-sm font-normal font-roboto leading-snug hover:opacity-100"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
