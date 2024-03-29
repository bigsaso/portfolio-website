import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { useDragControls } from 'framer-motion'

export const client = sanityClient({
    projectId: '7mkr5eg6',
    dataset: 'production',
    apiVersion: '2022-12-15',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)