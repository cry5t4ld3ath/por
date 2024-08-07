import {NextIntlClientProvider} from 'next-intl';
import {
  getMessages,
  unstable_setRequestLocale
} from 'next-intl/server';
import {ReactNode} from 'react';
import {locales} from '@/config';
import Header from '@/components/Header';
import MobileHeader from '@/components/MobileHeader';
import Loading from '@/components/Loading';


type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}


export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {

  // Enable static rendering
  unstable_setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Loading>
            <main>
              {children}
            </main>
            <Header />
            <MobileHeader />
          </Loading>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}



// className="grid desktop:grid-cols-[1.7fr_0.4fr] mobile:grid-cols-1 mobile:grid-rows-1"