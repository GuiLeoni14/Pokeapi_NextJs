import { AppProps } from 'next/app';
import Image from 'next/image';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { MainContainer } from '../styles/container';
import GlobalStyle from '../styles/global';
import light from '../styles/theme/light';

export default function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState(light);
    return (
        <ThemeProvider theme={theme}>
            <MainContainer>
                <GlobalStyle />
                <Image src="/images/satoru-gojo.jpg" width="200px" height="200px" />
                <Component {...pageProps} />
            </MainContainer>
        </ThemeProvider>
    );
}
