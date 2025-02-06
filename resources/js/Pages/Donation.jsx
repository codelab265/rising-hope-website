import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Donation() {
    return (
        <MainLayout>
            <Head title="What We Do" />
            <section className="px-5 lg:px-0 container max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row gap-10 mt-[76px] pb-[96px] ">
                <div className="w-full md:w-[70%] flex gap-6">
                    <div className="hidden md:block w-[80px]">
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
                        <div className="max-w-[461px] text-[#1d2130] text-[38px] md:text-[56px] font-bold font-roboto leading-[67.20px]">
                            Make a donation and change a life
                        </div>
                        <div className="max-w-[594px] text-[#525560] text-base font-normal font-roboto leading-relaxed">
                            When you donate, you’re supporting effective care to
                            children with special needs—an investment in the
                            leaders of tomorrow.
                        </div>
                        <a
                            href="https://pay.paychangu.com/SC-DOlEWo"
                            target="_blank"
                            className="h-[51px] w-fit px-8 py-4 bg-primary rounded backdrop-blur-[80px] justify-center items-center gap-2.5 inline-flex mt-8 cursor-pointer"
                        >
                            <div className="text-right text-black text-base font-medium font-roboto">
                                Donate now
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-[30%]">
                    <img
                        className="w-full h-full object-coverrounded-[20px]"
                        src="./images/donation.png"
                    />
                </div>
            </section>
            <section className="px-5 lg:px-0 container max-w-[1200px] mx-auto mt-[76px] pb-[96px] ">
                <div className="grid grid-co1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[96px]">
                    <div className="">
                        <div className=" text-[#1d212f] text-5xl font-bold font-roboto leading-[57.60px]">
                            How we use your donation
                        </div>
                    </div>
                    <div className="text-[#525560] text-base font-normal font-roboto leading-relaxed">
                        Your donation helps us to directly support our mission
                        by funding essential programs, services, and initiatives
                        that make a real difference in our community. It enables
                        us to provide resources to those in need, whether it's
                        through educational outreach, support services, or
                        critical aid for individuals and families.
                    </div>
                    <div className="text-[#525560] text-base font-normal font-roboto leading-relaxed">
                        Every contribution is carefully allocated to ensure
                        maximum impact, whether it's used for operational costs,
                        expanding our reach, or improving the quality of our
                        programs. With your generous support, we can continue to
                        make meaningful strides toward our goals and create
                        lasting positive change.
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default Donation;
