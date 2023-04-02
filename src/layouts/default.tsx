import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { PropsWithChildren } from "react";

const DefaultLayout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default DefaultLayout
