import { ReactNode } from "react";
import "../styles/global.css"

const DashboardLayout = ({children}:{children: ReactNode}) => {
    return(
        <html lang="es">
            <body>
                <header>
                </header>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
export default DashboardLayout