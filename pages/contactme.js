import {Container,Heading,SimpleGrid, Box, Input, Textarea, Button, Stack} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons"
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import { useRouter } from 'next/router'

const ContactMe = () => {
    const router = useRouter()
    return(
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Contact Me
            </Heading>
            <form name="contact" method="POST" data-netlify="true">
                <SimpleGrid>
                    <Box my={1}>
                        <Input id="company" placeholder='Subject' size='sm' />
                    </Box>
                    <Box my={1}>
                        <Textarea id="message" type='text' placeholder='Message' size='md' />
                    </Box>
                    <Button my={1} rightIcon={<EmailIcon />} colorScheme='teal' onClick={() =>{
                        var company = document.getElementById("company").value;
                        var message = document.getElementById("message").value;
                        router.push('mailto:sal.logozzo@gmail.com?subject=' + company + '&body=' + message);
                    }
                    }>Send externally via Email</Button>
                </SimpleGrid>
            </form>
            <Box align='center' my={4} ml={10}>
                <Stack align='center' direction='column' spacing={4} my={4}>
                <a target='_blank' rel="noreferrer" href='https://github.com/bigsaso'>
                <Button leftIcon={<FaGithub />}>
                    My GitHub
                </Button>
                </a>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/salvatore-logozzo-b318a71b3/'>
                <Button leftIcon={<FaLinkedin />} colorScheme='linkedin'>
                    My LinkedIn
                </Button>
                </a>
                </Stack>
            </Box>
        </Container>
    )
}

export default ContactMe