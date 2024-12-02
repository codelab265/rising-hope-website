import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function About() {
    return (
        <MainLayout>
            <Head title="About Us" />
            <section className="container max-w-[1200px] mx-auto mt-[76px] pb-[294px] flex ">
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
                            Know About Us
                        </div>
                        <div className="max-w-[718px] text-[#1d2130] text-[56px] font-bold font-roboto leading-[67.20px] mt-8">
                            We are an NGO dedicated to eradicating poverty in
                            Malawi.
                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className=" text-[#1d2130] text-xl font-bold font-roboto leading-[30px]">
                        Empowering communities for a sustainable future
                    </div>
                    <div className="opacity-70 text-[#1d2130] text-base font-normal font-roboto leading-relaxed mt-[2px]">
                        Rising Hope Network (RHN) is a NGO focused on improving
                        the lives of Malawians living below the poverty line. We
                        offer various services that empower individuals and
                        communities, ensuring access to necessities and
                        fostering sustainable development. Our commitment is to
                        eradicate poverty through education, healthcare, and
                        social entrepreneurship, ensuring every child and woman
                        in Malawi has the opportunity to live a life of dignity,
                        hope, and opportunity.
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#fbecc6]">
                <div className="container max-w-[1200px] mx-auto relative pt-[320px] pb-[96px]">
                    <div
                        className="w-full h-[448px] bg-black/40 rounded-[20px] absolute left-0 right-0 -top-[224px] bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: "url(./images/team.jpg)",
                        }}
                    >
                        <img
                            src="/images/play.png"
                            alt="about logo"
                            className="w-[64px] h-[64px]"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-[96px]">
                        <div className="flex flex-col">
                            <div className="text-[#1d2130] text-base font-bold font-roboto uppercase tracking-widest">
                                Our Mission
                            </div>
                            <div className="text-[#1d2130] text-[28px] font-bold font-roboto leading-[42px] mt-4 mb-2">
                                Empowering Children with Special Needs for a
                                Brighter Future
                            </div>
                            <div className="opacity-70 text-[#1d2130] text-base font-normal font-roboto leading-relaxed">
                                Rising Hope Network is dedicated to providing
                                inclusive care for children with special needs.
                                We ensure that every child, regardless of their
                                circumstances, has access to quality education,
                                healthcare, and support to help them thrive in
                                society. Our programs aim to create a more
                                inclusive environment where children with
                                special needs can participate fully and
                                independently.
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[#1d2130] text-base font-bold font-roboto uppercase tracking-widest">
                                Our Vision
                            </div>
                            <div className="text-[#1d2130] text-[28px] font-bold font-roboto leading-[42px] mt-4 mb-2">
                                Providing Equal Opportunities for All Children
                                Worldwide
                            </div>
                            <div className="opacity-70 text-[#1d2130] text-base font-normal font-roboto leading-relaxed">
                                Our vision is to create a world where children
                                with special needs are included in every aspect
                                of life. We aim to expand our outreach globally,
                                ensuring that children in every community have
                                access to the care and support they need to
                                reach their full potential. Through education,
                                advocacy, and social entrepreneurship, we strive
                                for a future where all children can live with
                                dignity and hope.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="container max-w-[1200px] mx-auto mt-[120px]">
                <div className="text-center text-[#1d2130] text-5xl font-bold font-roboto leading-[57.60px] flex items-center justify-center">
                    Awards & Recognitions
                </div>
                <div className="grid grid-cols-4 mt-12">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div className="flex flex-col items-center">
                            <img
                                src="/images/badge.svg"
                                alt="award"
                                className="w-[111px] h-[92px]"
                            />
                            <div className="text-center text-[#1d2130] text-2xl font-bold font-roboto leading-[38.40px] mt-4">
                                2021
                            </div>
                            <div className="text-center text-[#1d2130] text-base font-bold font-roboto leading-relaxed">
                                Best NGO Award
                            </div>
                            <div className="opacity-60 text-center text-[#1d2130] text-xs font-medium font-roboto uppercase leading-tight">
                                Berlin, Germany
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="container max-w-[1200px] mx-auto  bg-[#f2c94c] rounded-[20px] mt-[96px] py-[64px] flex items-center gap-12">
                <div className="w-1/2 pl-[96px] gap-4">
                    <div className="text-black text-base font-bold font-roboto uppercase tracking-widest">
                        OUR JOURNEY{" "}
                    </div>
                    <div className=" text-black text-5xl font-bold font-roboto leading-[57.60px]">
                        How we raised 34M
                    </div>
                    <div className=" opacity-60 text-black text-base font-normal font-roboto leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat. Aenean
                        faucibus nibh.
                    </div>
                    <div className="flex gap-8  mt-8">
                        <div className="flex flex-col">
                            <div className="text-black text-2xl font-medium font-roboto leading-[38.40px]">
                                34M+
                            </div>
                            <div className="opacity-60 text-black text-xs font-medium font-roboto leading-tight">
                                Donation Received
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-black text-2xl font-medium font-roboto leading-[38.40px]">
                                400+
                            </div>
                            <div className="opacity-60 text-black text-xs font-medium font-roboto leading-tight">
                                Volunters
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-black text-2xl font-medium font-roboto leading-[38.40px]">
                                20+
                            </div>
                            <div className="opacity-60 text-black text-xs font-medium font-roboto leading-tight">
                                Care homes
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 pr-9">
                    <img src="/images/about2.png" alt="" srcset="" />
                </div>
            </section>

            <section className="container max-w-[1200px] mx-auto mt-[96px]">
                <div className="text-center text-[#1d2130] text-5xl font-bold font-roboto leading-[57.60px]">
                    Meet our team
                </div>
                <div className="max-w-[519px] opacity-60 text-center text-[#525560] text-base font-normal font-roboto leading-relaxed mt-4 mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                </div>
                <div className="grid grid-cols-4 gap-8 mt-12">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div className="flex flex-col items-center">
                            <img src="/images/team.png" alt="team" />
                            <div className="text-[#1d2130] text-base font-bold font-roboto leading-relaxed mt-4">
                                John Smith
                            </div>
                            <div className="opacity-60 text-[#1d2130] text-xs font-medium font-roboto leading-tight">
                                CEO
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}
        </MainLayout>
    );
}

export default About;
