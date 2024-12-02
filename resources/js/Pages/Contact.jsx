import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";
import { toast } from "sonner";

function Contact() {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/contact", {
            onSuccess: () => {
                setData("name", "");
                setData("email", "");
                setData("subject", "");
                setData("message", "");
                toast.success("Message sent successfully!");
            },
            preserveScroll: true,
            onError: (e) => {
                console.log(e);
            },
        });
    };

    return (
        <MainLayout>
            <Head title="Contact us" />
            <section className="bg-[#fbecc6] pt-[76px] pb-[96px]">
                <div className="container max-w-[1200px] mx-auto grid grid-cols-2 gap-[96px]">
                    <div className="flex gap-6">
                        <div className="w-[80px]">
                            <img
                                src="/images/line.png"
                                alt="line"
                                className="mt-2 w-full h-[2px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[#1d2130] text-base font-bold font-roboto uppercase tracking-widest">
                                Contact us
                            </div>
                            <div className="w-[461px] text-[#1d2130] text-[56px] font-bold font-roboto leading-[67.20px] mt-8">
                                We'd love to hear from you
                            </div>
                            <div className="max-w-[594px] text-[#525560] text-base font-normal font-roboto leading-relaxed mt-4">
                                Have any question in mind or want to enquire?
                                Please feel free to contact us through the form
                                or the following details.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col">
                            <div className="text-[#1d2130] text-2xl font-bold font-roboto leading-[38.40px]">
                                Let's talk!{" "}
                            </div>
                            <div className="flex gap-4">
                                <div className="text-[#1d2130] text-base font-normal font-roboto leading-7">
                                    +265 9012346514
                                </div>
                                <div className="text-[#1d2130] text-base font-normal font-roboto leading-7">
                                    hello@codelab265.com
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-[#1d2130] text-2xl font-bold font-roboto leading-[38.40px]">
                                Headoffice
                            </div>
                            <div className="w-[302px] text-[#525560] text-base font-normal font-roboto leading-relaxed">
                                8 Brewery Drive, Lilongwe, Malawi
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-[#1d2130] text-2xl font-bold font-roboto leading-[38.40px]">
                                Branch Office
                            </div>
                            <div className="w-[302px] text-[#525560] text-base font-normal font-roboto leading-relaxed">
                                Opp Opolo round about, Lilongwe, Malawi
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-[96px]">
                <div className="max-w-[768px] mx-auto grid grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <Label>Name</Label>
                        <Input
                            className="w-full mt-1"
                            placeholder="Enter your full name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <div className="text-red-500 text-sm">
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <Label>Email</Label>
                        <Input
                            className="w-full mt-1"
                            placeholder="Enter your email address"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <div className="text-red-500 text-sm">
                                {errors.email}
                            </div>
                        )}
                    </div>
                </div>
                <div className="max-w-[768px] mx-auto mt-8">
                    <div className="flex flex-col">
                        <Label>Subject</Label>
                        <Input
                            className="w-full mt-1"
                            placeholder="Enter your subject"
                            value={data.subject}
                            onChange={(e) => setData("subject", e.target.value)}
                        />
                        {errors.subject && (
                            <div className="text-red-500 text-sm">
                                {errors.subject}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col mt-8">
                        <Label>Message</Label>
                        <Textarea
                            className="w-full mt-1 "
                            placeholder="Enter your message"
                            value={data.message}
                            onChange={(e) => setData("message", e.target.value)}
                        />
                        {errors.message && (
                            <div className="text-red-500 text-sm">
                                {errors.message}
                            </div>
                        )}
                    </div>
                    {processing ? (
                        <Button className="h-[51px] px-8 py-4 bg-gray-500 rounded backdrop-blur-[80px] justify-center items-center gap-2.5 inline-flex mt-8">
                            <div className="text-right text-white text-base font-medium font-roboto">
                                Sending Message...
                            </div>
                        </Button>
                    ) : (
                        <Button
                            onClick={handleSubmit}
                            className="h-[51px] px-8 py-4 bg-[#f2c94c] rounded backdrop-blur-[80px] justify-center items-center gap-2.5 inline-flex mt-8"
                        >
                            <div className="text-right text-black text-base font-medium font-roboto">
                                Send message
                            </div>
                        </Button>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}

export default Contact;
