import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";

function Events() {
    const Events = [
        {
            title: "Mobile Outreach Program",
            day: "15",
            month: "Jul",
        },
        {
            title: "Youth Empowerment Workshop",
            day: "22",
            month: "Aug",
        },
    ];
    return (
        <div className="px-5 lg:px-0container mx-auto max-w-[1200px] py-[96px]">
            <div
                className="w-full h-96 bg-primary rounded-[20px] bg-cover bg-center bg-no-repeat py-[92px] flex flex-col items-center justify-center"
                style={{ backgroundImage: "url('./images/volonteer.png')" }}
            >
                <div className="max-w-[805px] text-center text-white text-4xl md:text-5xl font-bold font-['Roboto'] leading-[57.60px]">
                    Join us in empowering Malawians to rise above poverty!
                </div>
                <div className="mt-8 flex gap-8">
                    <a
                        href="https://pay.paychangu.com/SC-DOlEWo"
                        target="_blank"
                    >
                        <Button className="text-base font-medium text-black font-roboto">
                            Make a donation
                        </Button>
                    </a>
                </div>
            </div>
            <div className="mt-[84px] flex flex-col">
                <div className="text-[#1d2130] text-[40px] font-medium font-roboto leading-[56px]">
                    Upcoming Events
                </div>
            </div>
            <div className="mt-[48px] grid grid-cols-1 md:grid-cols-2 gap-8">
                {Events.map((event, index) => (
                    <div
                        key={index}
                        className="flex bg-[#f2c94c] rounded-[20px] px-10 py-8 gap-6"
                    >
                        <div className="flex flex-col">
                            <div className="text-[#1d2130] text-4xl md:text-5xl font-medium font-roboto leading-[57.60px]">
                                {event.day}
                            </div>
                            <div className="text-[#1d2130] text-sm md:text-base font-medium font-roboto uppercase tracking-widest">
                                {event.month}
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 gap-2">
                            <div className="flex items-center gap-2 bg-[#f2c94c] rounded-[20px]">
                                <div className="text-[#1d2130] text-sm font-medium font-roboto uppercase tracking-widest">
                                    Upcoming Event
                                </div>
                                <div className="w-11 h-[0px] border-2 border-[#1d2130]" />
                            </div>
                            <div className="">
                                <div className="max-w-[381px] text-[#1d2130] text-lg md:text-2xl font-bold font-roboto leading-[42px]">
                                    {event.title}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-7 h-7 md:w-14 md:h-14 relative">
                                <Link
                                    href="#"
                                    className="w-7 h-7 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center"
                                    preserveScroll={true}
                                >
                                    <ArrowRight className="text-[#1d2130] w-3 h-3 md:w-6 md:h-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;
