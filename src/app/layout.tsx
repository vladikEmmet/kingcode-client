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
import { Montserrat } from "next/font/google";
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
    site: "@site",
    creator: "@creator",
  },
  openGraph: {
    title: `Лучшие онлайн курсы для детей и подростков. IT-школа "King Code"`,
    description: `"King Code" - онлайн-школа для детей в возрасте от 5 до 15 лет. У нас Вы легко сможете изучить математику, программирование и 3D-моделирование с опытными преподавателями. 0% скуки, 100% драйва.`,
    url: process.env.NEXT_PUBLIC_URL,
    type: "website",
    locale: "ru_KZ",
    alternateLocale: ["ru_RU", "kk_KZ", "kk_RU", "ru_US"],
  }
}

const montserrat = Montserrat({subsets: ["latin", "cyrillic"], weight: ["500", "600", "700"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
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
