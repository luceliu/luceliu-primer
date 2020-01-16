import React from "react"
import styled from "styled-components"
import { Box, Flex, Text } from "@primer/components"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
export default function Nav() {
  return (
    <StickyWrapper>
    <Box bg="gray.9" py={3} px={5}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flex="auto">
            <Flex color="blue.2" alignItems="left">
              <NoWrapText
                mx={3}
                fontSize="2"
                fontWeight="bold"
                lineHeight="condensed"
              >
                Luce Liu
              </NoWrapText>
            </Flex>
        </Flex>
        <Flex color="blue.2" alignItems="center">
            <NoWrapText
              mx={3}
              fontSize="2"
              fontWeight="bold"
              lineHeight="condensed"
            >
              <Link to="about" smooth={true} duration={500} offset={-60} >About</Link>
            </NoWrapText>
            <NoWrapText
              mx={3}
              fontSize="2"
              fontWeight="bold"
              lineHeight="condensed"
            >
              <Link to="projects" smooth={true} duration={500} offset={-80} >Projects</Link>
            </NoWrapText>
        </Flex>
      </Flex>
    </Box>
    </StickyWrapper>
  )
}

const NoWrapText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StickyWrapper = styled.div`
position: -webkit-sticky;
position: sticky;
top: 0;
`