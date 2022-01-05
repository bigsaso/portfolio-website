import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading, Link, Image, Badge } from '@chakra-ui/react'
import NextLink from 'next/link'

//This will be used in the future to implement possible page with screenshots of projects

export const Title = ({children}) => (
    <Box>
        <NextLink>
            <Link>
                Works
            </Link>
        </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const Screenshot = ({src, alt}) => (
    <Image borderRadius='lg' w='full' src={src} alt={alt} mb={4} />
)

export const Meta = ({children}) => (
    <Badge colorScheme='teal' mr={2}>
        {children}
    </Badge>
)