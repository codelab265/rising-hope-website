import Events from "@/Components/Events";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
                <Events />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default MainLayout;
