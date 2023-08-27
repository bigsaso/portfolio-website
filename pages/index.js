import {Container, Box, Heading, Image, Button, Stack} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { GrDocumentPdf } from 'react-icons/gr'
import { BioSec, BioYear } from "../components/layouts/bio"
import NextLink from 'next/link'
import Section from '../components/layouts/section'
import Paragraph from '../components/layouts/paragraph'
import Layout from "../components/layouts/article"

const Page = () =>{
    return(
        <Layout>
        <Container>
            <Box display={{ md:'flex' }}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant="page-title">
                        Salvatore Logozzo
                    </Heading>
                    <p>
                        4th Year Software Engineering Student @TMU<br/><br/>
                        Former Partner Engineering Intern @AMD
                    </p>
                </Box>
                <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align='center'>
                    <Image borderColor="blackAlpha.800" borderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/Sal.JPG' alt='Profile Image' />
                </Box>
            </Box>
            {/*Adding animated section to homepage*/}
            <Section delay={0.1}>
                <Heading as='h3' variant='section-title'>
                    $whoami
                </Heading>
                <Paragraph>
                Hello! I&apos;m Salvatore and I am a software engineering student based in Toronto, Ontario. I absolutely love computers and have a passion for anything related 
                to them. I approach every day with the drive to innovate and contribute to society through simplifying daily tasks and solving pressing issues within the 
                technological space through the utilization of my programming knowledge.<br/><br/>
                
                When I am not studying or working, I am an avid gamer and love to read. Being able to keep my mind occupied whether its through expanding my knowledge in other 
                subject areas through different texts or conversations with my friends, these activities excite me and help me bring a refreshed perspective on a regular basis.
                </Paragraph>
                <Box align='center' my={4} ml={10}>
                    <Stack align='center' direction='row' spacing={4} my={4}>
                    <NextLink href='/projects'>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                            My Projects
                        </Button>
                    </NextLink>
                    {/*Using download will trigger a download of the file.
                        Using target='_blank' will open the pdf in a new window and give choice to user*/}
                    {/*<a href='pdfs/Salvatore_Logozzo_Resume.pdf' download>*/}
                    <a href="pdfs/Salvatore_Logozzo_Resume.pdf" target="_blank">
                        {/*Download button in case Download Route is chosen:*/}
                        {/*<Button rightIcon={<DownloadIcon />} colorScheme='teal'>*/}
                        <Button rightIcon={<GrDocumentPdf />} colorScheme='teal'>
                            My Resume
                        </Button>
                    </a>
                    </Stack>
                </Box>
            </Section>
            <Section delay={0.5}>
                <Heading as='h3' variant='section-title'>
                    Bio
                </Heading>
                <BioSec>
                    <BioYear>2000</BioYear>
                    Born in Cinquefrondi (RC), Italy.
                </BioSec>
                <BioSec>
                    <BioYear>2014</BioYear>
                    Started working at my family&apos;s tech store, where I started working with computers, phones and TVs, as well as installing 
                    Wi-Fi routers and antennas.
                </BioSec>
                <BioSec>
                    <BioYear>2017</BioYear>
                    Became Microsoft Office Specialist in Excel 2013.
                </BioSec>
                <BioSec>
                    <BioYear>2017</BioYear>
                    Moved to Canada.
                </BioSec>
                <BioSec>
                    <BioYear>2019</BioYear>
                    Started my 1st Year of Software Engineering at Ryerson University and made the Dean&apos;s List.
                </BioSec>
                <BioSec>
                    <BioYear>2022</BioYear>
                    Made the Dean&apos;s List in my 3rd Year of Software Engineering at Ryerson University.
                </BioSec>
                <BioSec>
                    <BioYear>2022</BioYear>
                    Got my first internship at AMD with the Data Center GPU Partner Engineering team.
                </BioSec>
                <BioSec>
                    <BioYear>2023</BioYear>
                    Received a Spotlight Award at AMD for porting and delivering a service that will run on the World&apos;s fastest supercomputer.
                </BioSec>
            </Section>
            <Section delay={1}>
                <Heading as='h3' variant='section-title'>
                    My Passions
                </Heading>
                <p>
                    &#128187;Computers <br/>
                    &#128200;Finance <br/>
                    &#127916;Movies & TV Shows <br/>
                    <Paragraph>
                        &#128175;Favourite Movies: Interstellar and Inception <br/>
                    </Paragraph>
                    <Paragraph>
                        &#128175;Favourite TV Shows: Mr. Robot and Breaking Bad <br/>
                    </Paragraph> 
                    &#127918;Gaming <br/>
                    Sports <br/>
                    <Paragraph>
                        &#127936;Basketball (Raptors Fan) <br/>
                    </Paragraph>
                    <Paragraph>
                        &#9917;Soccer (Inter Fan) <br/>
                    </Paragraph>
                    &#128218;Reading <br/>
                </p>
            </Section>
        </Container>
        </Layout>
    )
}

export default Page