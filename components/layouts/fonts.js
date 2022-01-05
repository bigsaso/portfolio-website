import {Global} from '@emotion/react'

//This will style the font of every header (from google fonts)
const Fonts = () => (
    <Global styles={
        `@import url('https://fonts.googleapis.com/css2?family=Corinthia:wght@700&family=Fuzzy+Bubbles:wght@700&display=swap');`
    } />
)

export default Fonts