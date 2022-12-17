import {Container,Heading,SimpleGrid} from "@chakra-ui/react";
import Layout from "../components/layouts/article"

// Import Sanity DB Client and Project component
import { client } from "../libs/client";
import Project from "../components/Project";

const Projects = ({ projects }) => {
    return(
        <Layout>
        <Container>
            <Heading as='h3' fontSize={20} mb={4} variant='section-title'>
                Projects
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                {projects?.map((projects) => <Project key={projects._id} projects={projects} />)}
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "project"]'
    const projects = await client.fetch(query)

    return {
        props: { projects }
    }
}

export default Projects