import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text } from '@primer/components'
import { Link, animateScroll } from 'react-scroll'
import { theme } from '../pages/index'
export default function Nav () {
  return (
    <StickyWrapper>
      <Box bg={theme.colors.bg} py={3} px={5}>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex flex="auto">
            <Flex color="blue.2" alignItems="left">
              <NoWrapText
                mx={3}
                fontSize="2"
                fontWeight="bold"
                lineHeight="condensed"
                color={theme.colors.white}
              >
                <Link to="hero" smooth={true} duration={500} offset={-60}>
                Luce Liu
                </Link>
              </NoWrapText>
            </Flex>
          </Flex>
          <Flex color="blue.2" alignItems="center">
            <NoWrapText
              mx={3}
              fontSize="2"
              fontWeight="bold"
              lineHeight="condensed"
              color={theme.colors.white}
            >
              <Link to="hero" smooth={true} duration={500} offset={-60} >Home</Link>
            </NoWrapText>
            <NoWrapText
              mx={3}
              fontSize="2"
              fontWeight="bold"
              lineHeight="condensed"
              color={theme.colors.white}
            >
              <Link to="about" smooth={true} duration={500} offset={-60} >About</Link>
            </NoWrapText>
            <NoWrapText
              mx={3}
              fontSize="2"
              fontWeight="bold"
              lineHeight="condensed"
              color={theme.colors.white}
            >
              <Link to="work" smooth={true} duration={500} offset={-80} >Work</Link>
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
