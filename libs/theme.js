import { TriangleUpIcon } from '@chakra-ui/icons'
import {extendTheme, textDecoration} from '@chakra-ui/react'
import {mode} from'@chakra-ui/theme-tools'

//This file will contain all the themes
const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const components = {
    Heading : {
        variants: {
            'section-title': {
                textDecoration : 'underline',
                fontSize : 20,
                textUnderlineOffset : 6,
                textDecorationColor: '#525252',
                textDecorationThickness : 4,
                marginTop : 3,
                marginBottom : 4
            },
            'skills':{
                textDecoration : 'underline',
                fontSize : 15,
                textUnderlineOffset : 6,
                textDecorationColor: '#008080',
                textDecorationThickness : 4,
                marginTop : 3,
                marginBottom : 4
            }
        }
    },
    Link : {
        baseStyle: props => ({
            color : mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset : 3
        })
    }
}

const fonts = {
    heading: " 'Fuzzy Bubbles' "
}

const colors = {
    glassTeal : '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config, styles, components, colors, fonts
})

export default theme