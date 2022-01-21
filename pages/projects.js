import {Badge, Container,Heading,SimpleGrid} from "@chakra-ui/react";
import Section from "../components/layouts/section";
import { WorkGridItem } from "../components/layouts/grid-item";
import Layout from "../components/layouts/article"
//Importing the thumbnails
import thumbBookstore from '../public/images/projects/bookstore.jpg'
import thumbDBMS from '../public/images/projects/DBMS.png'
import thumbLakes from '../public/images/projects/lakes.png'
import thumbPC from '../public/images/projects/ryzentosh.jpg'
import thumbGame from '../public/images/projects/game.png'
import thumbWeb from '../public/images/projects/website.png'
import thumbGPU from '../public/images/projects/gpu.jpeg'

const Projects = () => {
    return(
        <Layout>
        <Container>
            <Heading as='h3' fontSize={20} mb={4} variant='section-title'>
                Projects
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem title='General Processing Unit' thumbnail={thumbGPU} link='https://github.com/bigsaso/COE328/tree/main/Lab%206/Lab%206'>
                    Designed all the components in VHDL, such as the ALU, the Control Unit (made of a Moore FSM and a 4-16 Decoder), the Storage Units (D-latches), 
                    and the SSEG. Verified the overall design with rigorous and multiple test cases on Quartus.<br/>
                    <Badge>Private repo</Badge>
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem title='Ryzentosh' thumbnail={thumbPC} link='https://github.com/bigsaso/Ryzentosh'>
                        Installed MacOS on custom-built PC with AMD Ryzen 5 3400G and Radeon RX 580.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem title='Bookstore App' thumbnail={thumbBookstore} link='https://github.com/bigsaso/Bookstore_app'>
                        Developed a BookStore App starting from the design of Use Case Diagram and Class Diagrams. Then, implemented it with JavaFX.<br/>
                        <Badge>Private repo</Badge>
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem title='DBMS Python App' thumbnail={thumbDBMS} link='https://github.com/bigsaso/CPS510_PythonSQL'>
                        A Python App connected to a DBMS developed during the course of the semester in OracleSQL.<br/>
                        <Badge>Report Available</Badge>
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem title='C Data Analysis' thumbnail={thumbLakes} link='https://github.com/bigsaso/C_Project_F2019'>
                        Final Project for Academic Course that analyzes data from the Canadian Lakes using the C Programming Language.<br/>
                        <Badge>Report Available</Badge>
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem title='C# Game Prototype' thumbnail={thumbGame} link='https://github.com/bigsaso/A_World_Citizen'>
                        Prototype of a top-down shooting game with health system, enemy following players and bullets implemented.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem title='Portfolio Website' thumbnail={thumbWeb} link='/'>
                        Using Next.js framework and Chakra UI, I built this personal website you are exploring now.<br/>
                        Pressing this project will bring you back to the homepage.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Projects