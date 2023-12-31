import "./globals.scss";
import { Metadata } from 'next';
import { Header } from '@/components/Header/Header'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { BurgerMenu } from "@/components/BurgerMenu/BurgerMenu";
import { Footer } from "@/components/Footer/Footer";
import { Curtain } from "@/components/UI/Curtain/Curtain";
import { Modal } from "@/components/Modal/Modal";
import { SocialBeforeFooter } from "@/components/SocialBeforeFooter/SocialBeforeFooter";
import { Providers } from "@/components/Providers";
import localFont from "next/font/local";
config.autoAddCss = false;

export const metadata: Metadata = {
  authors: [
    {
      url: "https://github.com/vladikEmmet",
      name: "Vlad Obedkov"
    },
    {
      url: "",
      name: "King Code team"
    }
  ],
  publisher: "Vlad Obedkov",
  creator: "King Code team",
  viewport: "width=device-width, initial-scale=1",
  applicationName: "King Code School",
  generator: "Next.js",
  appleWebApp: {
    title: "King Code",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KingCode_school",
    creator: "@KingCode_school",
  },
}

const montserratSemi = localFont({src: "../assets/fonts/Montserrat-SemiBold.woff2", variable: "--font-montserrat-semi"});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={montserratSemi.className}>
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HGJB23C"
          height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe></noscript> */}
        <Providers>
          <div className="helper">
            <div className="content">
              <Header />
              <main>
                {children}
              </main>
              <SocialBeforeFooter />
              <BurgerMenu />
              <Curtain />
              <Modal />
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

RootLayout.defaultProps = {
  dangerouslySetInnerHTML: {
    __html: ''
  }
}
