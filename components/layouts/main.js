//Head will be the title of the tab in browser
import Head from 'next/head'
//Import the Navbar component from previous folder
import Navbar from '../navbar.js'
//Import components from react
import {Box, Container} from '@chakra-ui/react'

const Main = ({children, router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {/*Adding a title to the tab*/}
                <title>
                    Salvatore Logozzo - Homepage  
                </title>
            </Head>
            <Navbar path={router.asPath}/>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main