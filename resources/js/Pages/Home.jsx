import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/Components/ui/scroll-area";

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
            content:
                "On November 19, 2020, Rural Health Network (RHN) made a significant impact at Yepa Full Primary School by conducting a well-received COVID-19 outreach program. The initiative reached 900 beneficiaries, comprising 640 students (390 girls and 250 boys) and 260 parents and teachers. Distribution of COVID-19 protective materials was one of the outreach's main objectives. RHN made sure that the school community was prepared to stop the virus's spread as the pandemic changed people's lives all over the world. Students, teachers, and parents were given necessary supplies like face masks and hand sanitizers, which emphasized the value of maintaining personal hygiene both inside and outside of the classroom.<br/><br/> In addition to being useful tools for instant protection, these materials helped beneficiaries develop long-term hygiene habits. The program sought to protect people and stop possible outbreaks in the neighborhood by promoting the regular use of masks and hand sanitizers.<br/><br/> Apart from tackling the difficulties caused by COVID-19, the outreach program also addressed harassment, which is a serious problem. Through lively discussions, RHN raised awareness of the negative impacts of harassment and underlined how crucial it is to provide a safe and encouraging environment for all people, especially young students. <br/><br/>Participants received instruction on how to identify harassment, comprehend its different manifestations, and know when to seek assistance if they are impacted. Proactive steps to stop harassment and promote respect among community members were also highlighted in the program. <br/></br>The outreach program’s success was rooted in its inclusive approach. By involving students, teachers, and parents, RHN ensured that the message of health, safety, and respect reached all facets of the school community. Students, as the future leaders, were empowered with knowledge to protect themselves and advocate for a better future. Teachers and parents, as role models and caregivers, were equipped to reinforce these messages at home and in the classroom.<br/><br/>Interactive sessions, practical demonstrations, and open discussions created an environment where participants could ask questions and share experiences.In addition to enhancing a sense of unity and shared responsibility among the school community, this coordinated approach deepened understanding.",
        },
        {
            name: "Mobile Outreach at Bowa F.P School",
            Description:
                "Addressed hygiene issues, provided sanitary pads, and offered bursary program support to 485 beneficiaries.",
            image: "/images/hero-normal.jpg",
            content:
                "The Rising Hope Network (RHN) addressed some of the most important issues facing the community on March 10, 2023, at Bowa Full Primary School through a  mobile outreach program. 485 beneficiaries attended the event, which was in line with several important Sustainable Development Goals (SDGs) of the UN, such as SDG 4 (Quality Education) and SDG 6 (Clean Water and Sanitation). <br/><br/>Key Data Insights<br/>Participants Breakdown<br/><br/>Students (85% of total beneficiaries):<br/>Boys: 69% (285 students)<br/>Girls: 31% (125 students)<br/><br/>Parents and Teachers (15% of total beneficiaries):Engaged as key influencers in the community.<br/><br/>Addressing girls' menstrual hygiene was a key component of the program. RHN distributed sanitary pads and offered menstrual hygiene education because it understood that a lack of access to sanitary products frequently results in absenteeism and academic difficulties. The goal of these sessions was to normalize conversations about menstruation and lessen stigma by emphasizing sustainable hygiene practices.<br/><br/>According to the World Bank, initiatives like these significantly improve school attendance among adolescent girls, contributing to gender parity in education. <br/><br/>The importance of education was also highlighted in RHN's program. Three students were chosen to receive financial aid, stationery, and necessary materials through a bursary program. By removing obstacles that keep kids from getting an education, this program hopes to keep them in school and help them reach their full potential.<br/><br/>In order to involve the larger community, the outreach also included theater and artistic endeavors. Important conversations between parents and teachers were sparked by a play production that brought to light the detrimental consequences of family conflicts on children's schooling. RHN helped the community understand and take action on difficult social issues by employing relatable storytelling. <br/><br/>The RHN’s program reflects broader global efforts to achieve the UN’s SDGs, specifically addressing SDG 4 (Quality Education) and SDG 6 (Clean Water and Sanitation). The program's all-encompassing strategy is in line with research from the World Bank and other international organizations that emphasizes how crucial it is to address education and hygiene at the same time in order to end poverty cycles.",
        },
        {
            name: "Rising Together Project at Nafutsa F.P School",
            Description:
                "Promoted education and empowered girls who have dropped out of school, benefiting 44 students and community members.",
            image: "/images/community.jpg",
            content:
                "The Rising Together Project, which focuses on education and the empowerment of vulnerable children, had an impact at Nafutsa Full Primary School on July 19, 2023. With 44 recipients—23 students (16 girls and 7 boys)  and teachers and parents 21, the project tackled important issues facing Malawi's educational system. The initiative sought to improve the well-being of underprivileged children and promote education as a transformative tool, especially for girls who had left school because of early pregnancies or other circumstances. <br/><br/>Malawi’s educational policies emphasize inclusivity and the empowerment of marginalized groups, particularly girls. The National Education Sector Investment Plan (NESIP) 2020–2030 underscores the importance of addressing gender disparities in education, with a focus on increasing enrollment, retention, and performance for girls. However, according to UNESCO, 42% of girls in Malawi drop out of primary school, often due to early pregnancies, child marriages, or poverty.<br/><br/>The Rising Together Project directly aligns with these priorities, offering practical interventions to support girls in overcoming these barriers. By encouraging school re-entry and providing emotional and material support, the project empowers girls to reclaim their educational journeys, contributing to broader national goals of achieving gender equality in education.<br/><br/>The success of the project lay in its inclusive approach. Parents and teachers, representing 48% of the beneficiaries, were engaged as key stakeholders in supporting children’s educational outcomes. Workshops and discussions emphasized the role of families and teachers in enabling a supportive environment for vulnerable children.<br/><br/>For the 16 girls who participated, the project provided tailored support, addressing the stigma often faced by girls who drop out due to early pregnancies. <br/><br/>Education is widely recognized as a powerful tool for breaking cycles of poverty. UNICEF notes that every additional year of schooling can increase an individual’s income by 10%. For girls, this impact is even greater, as educated women are more likely to secure employment, delay marriage, and improve the health and education of their children. <br/><br/>The Rising Together Project is a timely intervention in addressing both immediate and long-term challenges in Malawi’s educational landscape. In the present, it supports girls who face significant barriers to education, enabling them to return to school and rebuild their confidence. In the future, it contributes to a more educated and equitable society, where every child has the opportunity to reach their potential.<br/><br/>The Rising Together Project impacts the community as a whole by enhancing educational outcomes for children who are at risk. The assistance given to 23 students at Nafutsa F.P. School sets the stage for a better future in which education is the cornerstone of both individual and societal growth. ",
        },
    ];
    return (
        <MainLayout>
            <Head title="Home" />
            <section className="w-full bg-cover bg-center bg-no-repeat pt-[108px] pb-[64px] relative">
                <div className="container px-5 lg:px-0 mx-auto max-w-[1200px]">
                    <div className="w-full max-w-[640px] text-white text-center md:text-left text-[48px] md:text-[64px] font-bold font-roboto leading-[76.80px]">
                        Empowering Lives, Changing Africa
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-10 mt-12">
                        <Link href="/what-we-do">
                            <Button className="bg-white text-[#1d2130] text-base font-medium font-roboto px-8">
                                What We Do
                            </Button>
                        </Link>
                        <a
                            href="https://www.youtube.com/watch?v=sn2NjRPG9Ls"
                            target="_blank"
                            className="flex items-center"
                        >
                            <img
                                src="/images/play.png"
                                alt="play"
                                className="w-6 h-6"
                            />
                            <div className="text-white text-base font-medium font-roboto ml-[2px]">
                                Play Video
                            </div>
                        </a>
                    </div>
                    <div className="mt-[192px] items-center justify-between gap-5 hidden md:flex">
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

            <section className="container px-5 lg:px-0 mx-auto max-w-[1200px] py-[86px] flex flex-col-reverse md:flex-row items-center gap-[86px]">
                <div className="w-full md:w-[60%] flex gap-6">
                    <div className="hidden md:block w-[80px]">
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
                        <div className="max-w-[608px] text-[#525560] text-base font-normal font-roboto leading-relaxed mt-8">
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
                            <Link href="/about">
                                <Button className="bg-primary text-black text-base font-medium font-roboto px-8 w-full md:w-auto">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[40%]">
                    <div
                        className="w-full h-[578.34px] bg-cover bg-center bg-no-repeat overflow-hidden rounded-[20px] flex items-center justify-center"
                        style={{
                            backgroundImage: "url('/images/project1.png')",
                        }}
                    >
                        <a
                            href="https://www.youtube.com/watch?v=4gz_yFRlBsQ"
                            target="_blank"
                        >
                            <img
                                src="/images/play.png"
                                alt="play"
                                className="w-[64px] h-[64px] cursor-pointer"
                            />
                        </a>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#fbecc6] py-[96px]">
                <div className="container px-5 lg:px-0 mx-auto max-w-[1200px] flex flex-col-reverse md:flex-row  gap-[86px]">
                    <div className="w-full md:w-[60%] flex gap-6">
                        <div className="hidden md:block w-[80px]">
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
                            <div className="max-w-[608px] text-[#1d2130] text-4xl md:text-5xl font-bold font-roboto leading-[57.60px]">
                                Empowering Communities Through Diverse Programs
                            </div>
                            <div className="max-w-[608px] text-[#525560] text-base font-normal font-roboto leading-relaxed">
                                At Rising Hope Network, we offer a range of
                                services designed to address critical issues
                                affecting disadvantaged populations in Malawi.
                            </div>
                            <div className="flex flex-col gap-6 mt-8 md:pl-6">
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
                    <div className="w-full md:w-[40%] pt-[31px]">
                        <img
                            src="/images/girl.jpg"
                            alt="about"
                            className="w-full h-full object-cover rounded-[20px]"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full px-5 lg:px-0 container mx-auto max-w-[1200px] py-[96px]">
                <div className="flex  gap-6">
                    <div className="hidden md:block w-[80px]">
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
                        <div className="max-w-[640px] text-[#1d2130] text-4xl md:text-5xl font-bold font-roboto leading-[57.60px] mt-8 md:pl-3">
                            Making a Difference in Malawian Communities
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[65px]">
                    {Projects.map((project) => (
                        <div
                            className="px-6 lg:px-12 pt-[60px] pb-[48px] rounded-[20px] relative flex flex-col justify-between bg-center bg-cover"
                            style={{
                                backgroundImage: `url(${project.image})`,
                            }}
                        >
                            <div className="z-10 max-w-[315px] text-white text-2xl md:text-[28px] font-bold font-roboto leading-[42px]">
                                {project.name}
                            </div>
                            <div className="z-10 max-w-[315px] text-white text-base font-normal font-roboto leading-relaxed mt-4">
                                {project.Description}
                            </div>
                            <div className="z-10 mt-8">
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button className="bg-white text-black text-base font-medium font-roboto px-8 py-4">
                                            Learn More
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>
                                                {project.name}
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                <ScrollArea className="h-72 w-full rounded-md border">
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: project.content,
                                                        }}
                                                    />
                                                </ScrollArea>
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>
                                                Cancel
                                            </AlertDialogCancel>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
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
