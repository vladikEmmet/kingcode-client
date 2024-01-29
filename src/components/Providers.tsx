"use client";

import { SessionProvider } from 'next-auth/react';
import { RestrictModalProvider } from './UI/RestrictModal/RestrictModalProvider';

export const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <SessionProvider>
            <RestrictModalProvider restrictedCountries={["Russia"]}>
                {children}
            </RestrictModalProvider>
        </SessionProvider>
    )
}