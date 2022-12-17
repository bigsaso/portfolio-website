import React from "react";
import { urlFor } from "../libs/client";
import Section from "../components/layouts/section";
import {Box, Text, LinkBox, LinkOverlay, Badge} from '@chakra-ui/react'

const Project = ({ projects: {image, name, description, url, badgetxt, badge } }) => {
    return (
        <Section>
            <Box w='100%' align='center'>
                <LinkBox cursor='pointer'>
                    <img src={urlFor(image && image[0])}/>
                    <LinkOverlay href={url}>
                        <Text mt={2}>
                            {name}
                        </Text>
                        <Text fontSize={14}>
                            {description}
                        </Text>
                    </LinkOverlay>
                </LinkBox>
                {badge && <Badge>{badgetxt}</Badge>}
            </Box>
        </Section>
    )
}

export default Project