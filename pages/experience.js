import {Container,Heading,Badge,Stack,Box,Divider} from "@chakra-ui/react";
import Image from 'next/image'
import Section from "../components/layouts/section";
import { BioSec, BioYear } from "../components/layouts/bio"
import { JobSec, JobYears } from "../components/layouts/jobs"
//Importing free images for skills
import programming from '../public/images/Skills/programming.jpg'
import hardware from '../public/images/Skills/hardware.jpg'
import electronics from '../public/images/Skills/electronics.jpg'

const Experience = () => {
    return(
        <Container>
            <Section delay={0.5}>
                <Heading as='h3' fontSize={20} mb={4} variant='section-title'>
                    Academics & Relevant Coursework
                </Heading>
                <p>
                    &#127891;<b>Ryerson University</b><br/>
                    BEng in Software Engineering, Current GPA: 3.46<br/>
                    Currently in 3rd Year, Expected Grad: May 2024
                </p>
                <p>
                    <br/>• C/Java/JavaFX Programming<br/>
                    • Advanced Algorithms and Data Structures<br/>
                    • Computer Organization and Architecture &nbsp;
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            In Progress
                        </Badge><br/>
                    • MCU Programming in Assembly and FPGA board programming<br/>
                    • Electric and Electronic Circuits<br/>
                    • DBMS in Oracle SQL<br/>
                    • Operating Systems &nbsp;
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            In Progress
                        </Badge><br/>
                    • Software Design Architecture &nbsp;
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            In Progress
                        </Badge><br/>
                    • Software Requirements Engineering &nbsp;
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        In Progress
                    </Badge>
                </p>
            </Section>
            <Section delay={1}>
                <Heading as='h3' fontSize={20} mb={4} variant='section-title'>
                    Skills
                </Heading>
                <Stack direction='row'>
                    <Box w='8xl'>
                        <Image src={programming} alt='' />
                        <Heading as='h3' fontSize={15} mb={4} variant='skills'>
                            Software Skills
                        </Heading>
                        <p>
                            ➥C, C#<br/>
                            ➥Java/JavaFX<br/>
                            ➥Python<br/>
                            ➥MATLAB<br/>
                            ➥HTML, JS, CSS<br/>
                        </p>
                    </Box>
                    <Box w='8xl'>
                        <Image src={hardware} alt='' />
                        <Heading as='h3' fontSize={15} mb={4} variant='skills'>
                            Hardware Skills
                        </Heading>
                        <p>
                            ➥VHDL<br/>
                            ➥Assembly<br/>
                            ➥PC Building
                        </p>
                    </Box>
                    <Box w='8xl'>
                        <Image src={electronics} alt='' />
                        <Heading  as='h3' fontSize={15} mb={4} variant='skills'>
                            Electronics Skills
                        </Heading>
                        <p>
                            ➥Integrated Circuits<br/>
                            ➥Tools such as Oscilloscope, Multimeter, etc.<br/>
                            ➥Soldering<br/>
                            ➥Creating prototypes using Breadboard and Jumper Wires
                        </p>
                    </Box>
                </Stack>
                <Divider mt={4} />
                <Box w='4xl' mt={4}>
                    <Heading as='h3' fontSize={15} mb={4} variant='skills'>
                        Miscellaneous Skills
                    </Heading>
                    <p>
                        ➥Git<br/>
                        ➥Excel<br/>
                        ➥Communication<br/>
                        ➥Problem Solving
                    </p>
                </Box>
            </Section>
            <Section delay={1.5}>
                <Heading as='h3' fontSize={20} mb={4} variant='section-title'>
                    Certifications and Awards
                </Heading>
                <BioSec>
                    <BioYear>April 2017</BioYear>
                    Microsoft Office Specialist in Excel 2013
                </BioSec>
                <BioSec>
                    <BioYear>June 2019</BioYear>
                    Student Ambassador Award International Languages 2018-2019
                </BioSec>
                <BioSec>
                    <BioYear>November 2021</BioYear>
                    Software Fundamentals Workhsop Certificate - Unix, Git, SQL, Python
                </BioSec>
            </Section>
            <Section delay={2}>
                <Heading as='h3' fontSize={20} mb={4} variant='section-title'>
                    Work Experience
                </Heading>
                    <JobSec>
                        <JobYears>Feb. 2019 - Present | ML Property Maintenance (Canada)</JobYears>
                        <br/>• Deal with basic financial tasks, such as making invoices and communicating with the accountant.<br/>
                        • Communicate with clients and/or employees when any type of problem arises.<br/>
                    </JobSec>
                    <JobSec>
                        <JobYears>Mar. 2019 - Dec. 2021 | Nature&apos;s Emporium (Canada)</JobYears>
                        <br/>• Developed communication skills, as well as problem-solving, by assisting customers with product selection and making sure they were happy with their purchases.<br/>
                        • Adapted to every sector of my department, increasing the sales by 20% in a year, while also developing organizational and time management skills.<br/>
                    </JobSec>
                    <JobSec>
                        <JobYears>Dec. 2014 - Jun. 2017 | Sinergy Elettromarket (Italy)</JobYears>
                        <br/>• Assisted customers in choosing technology hardware.<br/>
                        • Installed Linkem home Wi-Fi for customers.<br/>
                        • Performed tech support on computers and smartphones.
                    </JobSec>
            </Section>
        </Container>
    )
}

export default Experience