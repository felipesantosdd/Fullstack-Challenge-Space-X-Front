import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { Provider } from '@/provider'
import Link from 'next/link';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider>
                <Component {...pageProps} />
                <GlobalStyle />
            </Provider>
        </>
    )
}
