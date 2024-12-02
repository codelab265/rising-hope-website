import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Donation() {
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
            <section className="container max-w-[1200px] mx-auto flex mt-[76px] pb-[96px] ">
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
                            Donate
                        </div>
                        <div className="w-[461px] text-[#1d2130] text-[56px] font-bold font-roboto leading-[67.20px]">
                            Make a donation and change a life
                        </div>
                        <div className="max-w-[594px] text-[#525560] text-base font-normal font-roboto leading-relaxed">
                            When you donate, you’re supporting effective care to
                            children with special needs—an investment in the
                            leaders of tomorrow.
                        </div>
                        <div className="h-[51px] w-fit px-8 py-4 bg-primary rounded backdrop-blur-[80px] justify-center items-center gap-2.5 inline-flex mt-8 cursor-pointer">
                            <div className="text-right text-black text-base font-medium font-roboto">
                                Donate now
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    <img
                        className="w-full h-full object-coverrounded-[20px]"
                        src="./images/donation.png"
                    />
                </div>
            </section>
            <section className="container max-w-[1200px] mx-auto mt-[76px] pb-[96px] ">
                <div className="grid grid-cols-3 gap-[96px]">
                    <div className="">
                        <div className=" text-[#1d212f] text-5xl font-bold font-roboto leading-[57.60px]">
                            How we use your donation
                        </div>
                    </div>
                    <div className="text-[#525560] text-base font-normal font-roboto leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat. Nunc ut sem
                        vitae risus tristique posuere.
                    </div>
                    <div className="text-[#525560] text-base font-normal font-roboto leading-relaxed">
                        Aenean faucibus nibh et justo cursus id rutrum lorem
                        imperdiet. Nunc ut sem vitae risus tristique posuere.
                        Aenean faucibus nibh et justo cursus id rutrum lorem
                        imperdiet.
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default Donation;
