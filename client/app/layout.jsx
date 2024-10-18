

import "./globals.css";
export const metadata = {
    title: "Gitttes Glamping",
    description: "En lille booking applikation",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
