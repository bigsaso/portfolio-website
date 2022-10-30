import Link from 'next/link'
import Image from 'next/image'
import {Text,useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
&:hover {
    transform: scale(1.05)
}
`

const Logo = () => {
    // const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
    const footPrintImg = `/images/memoji.png`

    return(
        <Link href="/">
            <a>
                {/*Inserting everything inside the logobox to apply the css formatting*/}
                {/*Logo will be made of the icon and my name*/}
                <LogoBox>
                    {/*This image is just temporray, gotta find a final one*/}
                    <Image src={footPrintImg} width={20} height={20} alt="logo"/>
                    {/*Then this is my name formatted nicely (might change font)*/}
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily="M PLUS Rounded 1c"
                        fontWeight="bold"
                        ml={3}>
                            Salvatore Logozzo
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo