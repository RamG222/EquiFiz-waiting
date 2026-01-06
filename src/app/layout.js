import Script from "next/script";

export const metadata = {
  title: "Equifiz",
  description: "Equifiz - Join the Waitlist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2ZLFSQPGF4"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2ZLFSQPGF4');
          `}
        </Script>
      </body>
    </html>
  );
}
