//Importing the logo from its folder
import Logo from './logo'
import NextLink from 'next/link'
//Importing the components for the navbar
import {Container,Box,Link,Stack,Heading,Flex,Menu,MenuItem,MenuList,MenuButton,IconButton,useColorModeValue} from '@chakra-ui/react'
//Importing components for the mobile alternative to the navbar
import {HamburgerIcon} from '@chakra-ui/icons'
//Importing other icons for navbar (soon)
//import{UserIcon, DesktopComputerIcon, MailIcon, BriefcaseIcon} from '@heroicons/react/solid'
import ThemeToggleButton from './layouts/theme-toggle-button'
import styled from '@emotion/styled'

//This style will help transform link based on hover
const HoverStyle = styled.span`
&:hover {
    transform: scale(1.05)
}
`

const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    
    return(
        <NextLink href={href}>
            {/*bg: background of button, color: text color*/}
            <Link p={2} bg={active ? 'glassTeal':undefined} color={active ? '#202023':inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props
    return(
        <Box position='fixed' as='nav' w='100%'
             bg={useColorModeValue('#ffffff40','#20202380')}
             style={{backdropFilter:'blur(10px'}}
             zIndex={1}
             {...props}>
                 <Container display='flex' p={2} maxW='container.md' wrap='wrap' align='center' justify='space-between'>
                    <Flex align='center' mr={5}>
                        <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                            <Logo/>
                        </Heading>
                    </Flex>
                    <Stack direction={{base:'column', md:'row'}}
                           display={{base:'none', md:'flex'}}
                           width={{base:'full', md:'auto'}}
                           alignItems='center' flexGrow={1} mt={{base:4, nmd:0}}>
                               <HoverStyle>
                               <LinkItem href='/projects' path={path}>
                                   Projects
                               </LinkItem>
                               </HoverStyle>
                               <HoverStyle>
                               <LinkItem href='/experience' path={path}>
                                   Experience
                               </LinkItem>
                               </HoverStyle>
                               <HoverStyle>
                               <LinkItem href='/contactme' path={path}>
                                   Contact Me
                               </LinkItem>
                               </HoverStyle>
                    </Stack>
                    <Box flex={1} align='right'>
                        <ThemeToggleButton />
                        <Box ml={2} display={{base:'inline-block', md:'none'}}>
                            <Menu>
                                {/*Alternative to navbar (only appears in mobile version or zoom 300%)*/}
                                <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant='outline' aria-label='Options'/>
                                <MenuList>
                                    <NextLink href='/projects' passHref>
                                        <MenuItem as={Link}>
                                            Projects
                                        </MenuItem>
                                    </NextLink>
                                    <NextLink href='/experience' passHref>
                                        <MenuItem as={Link}>
                                            Experience
                                        </MenuItem>
                                    </NextLink>
                                    <NextLink href='/contactme' passHref>
                                        <MenuItem as={Link}>
                                            Contact Me
                                        </MenuItem>
                                    </NextLink>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                 </Container>
             </Box>
    )
}

export default Navbar