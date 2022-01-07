import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import theme from '../libs/theme'
import Fonts from "../components/layouts/fonts";
import Head from "next/head";

//Importing framer motion for page transitions
import {AnimatePresence} from 'framer-motion'

const Website = ({Component,pageProps,router}) => {
    return(
        <ChakraProvider theme={theme}>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d4af37" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>                
            </Layout>
        </ChakraProvider>
    )
}

export default Website