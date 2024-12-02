import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Description } from "@headlessui/react";
import { Head, Link } from "@inertiajs/react";
import React from "react";

function Home() {
    const Services = [
        {
            name: "Mobile Outreach Programs",
            Description:
                "We provide training on health & hygiene and basic resources to those in need, partnering with local leaders to tailor programs for each community.",
            icon: "/images/family-icon.png",
        },
        {
            name: "Youth Empowerment Programs",
            Description:
                "We equip young people with skills for the modern job market, including entrepreneurship, technology literacy, mentorship, and leadership training.",
            icon: "/images/health-icon.png",
        },
        {
            name: "Education Workshops",
            Description:
                "We conduct educational workshops in schools on topics like sexual reproductive health and other cross-cutting issues, as well as online activities.",
            icon: "/images/scholar-icon.png",
        },
        {
            name: "Community Development",
            Description:
                "We support sustainable community development through various initiatives aimed at improving living conditions and opportunities.",
            icon: "/images/therapy-icon.png",
        },
    ];

    const Projects = [
        {
            name: "Covid-19 Outreach at Yepa Full Primary School",
            Description:
                "Distributed COVID-19 fighting materials and provided information about harassment prevention to 900 beneficiaries.",
            image: "/images/project1.png",
        },
        {
            name: "Mobile Outreach at Bowa F.P School",
            Description:
                "Addressed hygiene issues, provided sanitary pads, and offered bursary program support to 485 beneficiaries.",
            image: "/images/hero-normal.jpg",
        },
        {
            name: "Rising Together Project at Nafutsa F.P School",
            Description:
                "Promoted education and empowered girls who have dropped out of school, benefiting 44 students and community members.",
            image: "/images/community.jpg",
        },
    ];
    return (
        <MainLayout>
            <Head title="Home" />
            <section className="w-full bg-cover bg-center bg-no-repeat pt-[108px] pb-[64px] relative">
                <div className="container mx-auto max-w-[1200px]">
                    <div className="w-full max-w-[640px] text-white text-[64px] font-bold font-roboto leading-[76.80px]">
                        Empowering Malawians to Rise Above Poverty
                    </div>
                    <div className="flex items-center gap-10 mt-12">
                        <Button className="bg-white text-[#1d2130] text-base font-medium font-roboto px-8">
                            What We Do
                        </Button>
                        <Link href="/" className="flex items-center">
                            <img
                                src="/images/play.png"
                                alt="play"
                                className="w-6 h-6"
                            />
                            <div className="text-white text-base font-medium font-roboto ml-[2px]">
                                Play Video
                            </div>
                        </Link>
                    </div>
                    <div className="mt-[192px] flex items-center justify-between gap-5">
                        <div className="text-white text-lg font-medium font-roboto">
                            Serving communities across Malawi
                        </div>
                        <div className="flex-1 w-full h-[0px] border border-neutral-200 backdrop-blur-[30px]" />
                        <div className="text-right text-white text-lg font-medium font-roboto">
                            Empowering lives since establishment
                        </div>
                    </div>
                </div>
                <img
                    src="/images/hero1.jpg"
                    alt="hero"
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10 filter blur-[3px]"
                />
            </section>

            <section className="container mx-auto max-w-[1200px] py-[86px] flex items-center gap-[86px]">
                <div className="w-[60%] flex gap-6">
                    <div className="w-[80px]">
                        <img
                            src="/images/line.png"
                            alt="line"
                            className="mt-2 w-full h-[2px]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[#1d2130] text-base font-bold font-roboto uppercase tracking-widest">
                            About Rising Hope Network
                        </div>
                        <div className="w-[608px] text-[#525560] text-base font-normal font-roboto leading-relaxed mt-8">
                            Rising Hope Network (RHN) is a social enterprise
                            dedicated to improving the lives of Malawians living
                            below the poverty line. We empower individuals and
                            eradicate poverty through various projects and
                            activities.
                            <br />
                            <br />
                            Our vision is to create an African society where
                            every child and woman has the opportunity to live a
                            life of dignity, hope, and ability. We are committed
                            to providing underprivileged communities with access
                            to necessities, encouraging social entrepreneurship,
                            and supporting sustainable community development.
                        </div>
                        <div className="mt-12">
                            <Button className="bg-primary text-black text-base font-medium font-roboto px-8">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-[40%]">
                    <div
                        className="w-full h-[578.34px] bg-cover bg-center bg-no-repeat overflow-hidden rounded-[20px] flex items-center justify-center"
                        style={{
                            backgroundImage: "url('/images/project1.png')",
                        }}
                    >
                        <img
                            src="/images/play.png"
                            alt="play"
                            className="w-[64px] h-[64px] cursor-pointer"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#fbecc6] py-[96px]">
                <div className="container mx-auto max-w-[1200px] flex gap-[86px]">
                    <div className="w-[60%] flex gap-6">
                        <div className="w-[80px]">
                            <img
                                src="/images/line.png"
                                alt="line"
                                className="mt-2 w-full h-[2px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[#1d2130] text-base font-bold font-roboto uppercase tracking-widest">
                                Our Services
                            </div>
                            <div className="max-w-[608px] text-[#1d2130] text-5xl font-bold font-roboto leading-[57.60px]">
                                Empowering Communities Through Diverse Programs
                            </div>
                            <div className="w-[608px] text-[#525560] text-base font-normal font-roboto leading-relaxed">
                                At Rising Hope Network, we offer a range of
                                services designed to address critical issues
                                affecting disadvantaged populations in Malawi.
                            </div>
                            <div className="flex flex-col gap-6 mt-8 pl-6">
                                <div className="flex gap-6">
                                    <div className="w-[28px] h-[28px] bg-[#f2c94c] rounded-[20px]">
                                        <img
                                            src="/images/family-icon.png"
                                            alt="Mobile Outreach Program"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-[#1d2130] text-2xl font-bold font-roboto leading-[28.8px]">
                                            Mobile Outreach Programs
                                        </div>
                                        <div className="max-w-96 text-[#525560] text-base font-normal font-roboto leading-relaxed">
                                            RHN implements mobile outreach
                                            programs to reach individuals in
                                            remote areas, providing health &
                                            hygiene training and essential
                                            resources in partnership with local
                                            leaders.
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-[28px] h-[28px] bg-[#f2c94c] rounded-[20px]">
                                        <img
                                            src="/images/health-icon.png"
                                            alt="Youth Empowerment Programs"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-[#1d2130] text-2xl font-bold font-roboto leading-[28.8px]">
                                            Youth Empowerment Programs
                                        </div>
                                        <div className="max-w-96 text-[#525560] text-base font-normal font-roboto leading-relaxed">
                                            Our programs equip young people with
                                            skills for success, offering
                                            entrepreneurship and technology
                                            training, mentorship, and
                                            development clubs in schools.
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-[28px] h-[28px] bg-[#f2c94c] rounded-[20px]">
                                        <img
                                            src="/images/scholar-icon.png"
                                            alt="Education Programs"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-[#1d2130] text-2xl font-bold font-roboto leading-[28.8px]">
                                            Education Programs
                                        </div>
                                        <div className="max-w-96 text-[#525560] text-base font-normal font-roboto leading-relaxed">
                                            RHN conducts educational workshops
                                            in schools on topics like sexual
                                            reproductive health and other
                                            cross-cutting issues, with both
                                            online and offline activities.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%] pt-[31px]">
                        <img
                            src="/images/girl.jpg"
                            alt="about"
                            className="w-full h-full object-cover rounded-[20px]"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full container mx-auto max-w-[1200px] py-[96px]">
                <div className="flex  gap-6">
                    <div className="w-[80px]">
                        <img
                            src="/images/line.png"
                            alt="line"
                            className="mt-2 w-full h-[2px]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[#1d2130] text-base font-bold font-roboto uppercase tracking-widest">
                            Our Portfolio
                        </div>
                        <div className="max-w-[640px] text-[#1d2130] text-5xl font-bold font-roboto leading-[57.60px] mt-8 pl-3">
                            Making a Difference in Malawian Communities
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-[65px]">
                    {Projects.map((project) => (
                        <div
                            className="px-12 pt-[60px] pb-[48px] rounded-[20px] relative flex flex-col justify-between bg-center bg-cover"
                            style={{
                                backgroundImage: `url(${project.image})`,
                            }}
                        >
                            <div className="z-10 max-w-[315px] text-white text-[28px] font-bold font-roboto leading-[42px]">
                                {project.name}
                            </div>
                            <div className="z-10 max-w-[315px] text-white text-base font-normal font-roboto leading-relaxed mt-4">
                                {project.Description}
                            </div>
                            <div className="z-10 mt-8">
                                <Button className="bg-white text-black text-base font-medium font-roboto px-8 py-4">
                                    Learn More
                                </Button>
                            </div>
                            <div className="w-full h-full absolute top-0 left-0 opacity-60 bg-[#0b0706] rounded-[20px] " />
                        </div>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
}

export default Home;
