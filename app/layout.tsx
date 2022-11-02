import React from "react";
import './(styles)/global.scss'
import {Lato} from '@next/font/google';

const lato = Lato({subsets: ["latin"], style: ["normal", "italic"], weight: ["400", "700", "900"]})

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>DreamLab.Solutions</title>
        </head>
        <body>
        <main>
            {children}
        </main>
        <footer>
            ©2022 DreamLab.Solutions. All rights reserved.
        </footer>
        </body>
        </html>
    )
}
