import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function WhatWeDo() {
    const data = [
        {
            name: "Family support",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            icon: "./images/family-icon.png",
        },
        {
            name: "Health benefits",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            icon: "./images/health-icon.png",
        },
        {
            name: "Education",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            icon: "./images/scholar-icon.png",
        },
        {
            name: "Basic amenities",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            icon: "./images/amenities.png",
        },
        {
            name: "Therapy",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            icon: "./images/therapy-icon.png",
        },
        {
            name: "Public outreach",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            icon: "./images/outreach.png",
        },
    ];
    return (
        <MainLayout>
            <Head title="What We Do" />
            <section className="container max-w-[1200px] mx-auto flex mt-[76px] pb-[96px]">
                <div className="w-[70%] flex gap-6">
                    <div className="w-[80px]">
                        <img
                            src="/images/line.png"
                            alt="line"
                            className="mt-2 w-full h-[2px]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[#1d2130] text-base font-bold font-roboto uppercase tracking-widest">
                            What We Do
                        </div>
                        <div className=" text-[#1d2130] text-[56px] font-bold font-roboto leading-[67.20px]">
                            Transforming Lives Across Malawi and Beyond
                        </div>
                        <div className="max-w-[594px] text-[#525560] text-base font-normal font-roboto leading-relaxed">
                            Rising Hope Network is actively working across
                            Malawi and other regions to uplift underprivileged
                            communities. We focus on providing essential
                            services such as education, healthcare, and social
                            support, ensuring that every individual has access
                            to opportunities for a better future. Our programs
                            are designed to create lasting impact and empower
                            people to break the cycle of poverty.
                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    <img
                        className="w-full h-full object-cover rounded-[20px]"
                        src="./images/whawedo.jpg"
                        alt="community work"
                    />
                </div>
            </section>

            <section className="bg-[#fbecc6] pt-[96px] pb-[104px]">
                <div className="container max-w-[1200px] mx-auto">
                    <div className="text-[#1d2130] text-5xl font-bold font-roboto leading-[57.60px]">
                        What we do
                    </div>
                    <div className="grid grid-cols-3 mt-[64px] gap-[48px]">
                        {/* Mobile Outreach Programs */}
                        <div className="flex gap-6">
                            <div className="w-7 h-7">
                                <img
                                    src="/images/outreach.png"
                                    alt="Mobile Outreach"
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="text-[#1d2130] text-2xl font-bold font-roboto">
                                    Mobile Outreach Programs
                                </div>
                                <div className="text-[#525560] text-sm font-normal font-roboto leading-snug mt-2 line-clamp-3">
                                    RHN has implemented mobile outreach programs
                                    to reach individuals living in remote areas.
                                    The programs provide training on health &
                                    hygiene and provide basic resources to those
                                    in need. The organization partners with
                                    local leaders to ensure that the programs
                                    are tailored to meet the specific needs of
                                    each community.
                                </div>
                            </div>
                        </div>

                        {/* Youth Empowerment Programs */}
                        <div className="flex gap-6">
                            <div className="w-7 h-7">
                                <img
                                    src="/images/health-icon.png"
                                    alt="Youth Empowerment"
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="text-[#1d2130] text-2xl font-bold font-roboto">
                                    Youth Empowerment Programs
                                </div>
                                <div className="text-[#525560] text-sm font-normal font-roboto leading-snug mt-2 line-clamp-3">
                                    RHN has established youth empowerment
                                    programs to equip young people with the
                                    necessary skills to succeed in the modern
                                    job market. The programs include
                                    entrepreneurship and technology literacy
                                    training, mentorship, and support. The
                                    organization also partners with schools to
                                    establish development clubs that provide a
                                    platform for students to learn about
                                    entrepreneurship, technology, and leadership
                                    skills.
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="flex gap-6">
                            <div className="w-7 h-7">
                                <img
                                    src="/images/scholar-icon.png"
                                    alt="Education"
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="text-[#1d2130] text-2xl font-bold font-roboto">
                                    Education
                                </div>
                                <div className="text-[#525560] text-sm font-normal font-roboto leading-snug mt-2 line-clamp-3">
                                    RHN continuously conducts educational
                                    workshops in schools that focus on various
                                    topics, including sexual reproductive health
                                    and other cross-cutting issues. The
                                    organization also conducts online activities
                                    focusing on informative and educative
                                    topics.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default WhatWeDo;
