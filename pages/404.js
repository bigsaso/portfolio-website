import { Box, Button, Container, Divider, Heading, Text } from "@chakra-ui/react"
import { GoHome } from 'react-icons/go'
import NextLink from "next/link"

const NotFound = () => {
    return(
        <Container>
            <Heading as='h1'>
                Not Found
            </Heading>
            <Text>
                The page you're looking for does not exist.
            </Text>
            <Divider />
            <Box my={6} align='center'>
                <NextLink href='/'>
                    <Button rightIcon={<GoHome />} colorScheme='teal'>
                        Return to Home
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound