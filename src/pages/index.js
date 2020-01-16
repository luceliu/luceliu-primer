import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text, Link, Flex } from '@primer/components'
import { FaGithub, FaPaperPlane, FaMediumM, FaLinkedinIn } from 'react-icons/fa'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Grid from '../components/grid'
export const theme = {
  colors: {
    green: '#6bddbf',
    white: '#e5e5e5'
  }
}
const IndexPage = () => (
  <Layout>
    <SEO
      title="Gatsby Primer Starter"
      image="https://gatsby-starter-primer.netlify.com/share.jpg"
    />
    <Hero pt={[1, 3, 5]} name="about">
      <Grid
        my={[6, 6, 12]}
        flexDirection={['row', 'row', 'row-reverse']}
        alignItems="end"
      >
        <div style={{ maxWidth: '700px', margin: 'auto' }}>
          <Flex.Item px={5} width={[1, 1, 1, 1]}>
            <Heading
              color={theme.colors.green}
              mb={2}
              fontSize={[24, 36, 48]}
              fontWeight="700"
            >
              Hey, I'm Luce! 👋
            </Heading>
            <Text as='p' color={theme.colors.white} fontSize={[16, 18, 18]} lineHeight={1.5}>
              Cognitive Systems major at the University of British Columbia, and developer @ nwPlus. Previously an intern at Nuance Communications and PayPal.
            </Text>
          </Flex.Item>
          <Flex.Item
            px={5}
            my={[4, 3, 0]}
            width={[1, 1, 1, 7 / 12]}
            style={{ marginTop: '1em' }}
          >
            <Text
              style={{ color: theme.colors.green, marginTop: '24px' }}
              fontFamily="mono"
              as="p"
              color="blue.3"
              mt={5}
            >
              <LinkLight
                fontSize={[2, 2, 4]}
                href="https://github.com/luceliu"
              >
                <FaGithub />
              </LinkLight>{' '}
              <LinkLight
                style={{ marginLeft: '8px' }}
                fontSize={[2, 2, 4]}
                href="https://linkedin.com/in/luceliu"
              >
                <FaLinkedinIn/>
              </LinkLight>{' '}
              <LinkLight
                style={{ marginLeft: '8px' }}
                fontSize={[2, 2, 4]}
                href="https://medium.com/@notluce"
              >
                <FaMediumM/>
              </LinkLight>{' '}
              <LinkLight
                style={{ marginLeft: '8px' }}
                fontSize={[2, 2, 4]}
                href="mailto:thisisluce@gmail.com"
              >
                <FaPaperPlane/>
              </LinkLight>{' '}
            </Text>
          </Flex.Item>
        </div>
      </Grid>
    </Hero>
    <Divider my={[9, 12]} />
    <Body>
      <Grid>
        <Grid.Item mt={[3, 2, 2]} mb={5} pb={2} name="projects">
          <Text fontWeight={500} fontSize={5} color="blue.2" lineHeight={1.25}>
            Featured open-source packages and projects.
          </Text>
        </Grid.Item>
      </Grid>
      <Box px={5} className="con
      tainer-xl" >
        <Flex mx={-5} flexWrap="wrap" alignItems="start">
          <StyledFlex size={[1, 6 / 12, 6 / 12]} px={5} mb={[3, 4, 4, 2]}>
            <Flex.Item color="blue.3" mr={3}>
              {/* <Octicon icon={Package} height={40} verticalAlign="middle" /> */}
            </Flex.Item>
            <Flex.Item>
              <LinkLight
                style={{ marginBottom: '1.45rem' }}
                fontSize={2}
                href="https://github.com/primer/css"
              >
                primer
              </LinkLight>
              <Text as="p" color="blue.2" mb={5} fontSize={3}>
                This package includes all 30 Primer modules from the core,
                product, and marketing packages
              </Text>
            </Flex.Item>
          </StyledFlex>
          <StyledFlex size={[1, 6 / 12, 6 / 12]} px={5} mb={[3, 4, 4, 2]}>
            <Flex.Item color="blue.3" mr={3}>
              {/* <Octicon icon={Repo} height={40} verticalAlign="middle" /> */}
            </Flex.Item>
            <Flex.Item>
              <LinkLight
                style={{ marginBottom: '1.45rem' }}
                fontSize={2}
                href="https://github.com/facebook/react"
              >
                react
              </LinkLight>
              <Text as="p" color="blue.2" mb={5} fontSize={3}>
                A declarative, efficient, and flexible JavaScript library for
                building user interfaces.
              </Text>
            </Flex.Item>
          </StyledFlex>
          <StyledFlex size={[1, 6 / 12, 6 / 12]} px={5} mb={[3, 4, 4, 2]}>
            <Flex.Item color="blue.3" mr={3}>
              {/* <Octicon icon={Heart} height={40} verticalAlign="middle" /> */}
            </Flex.Item>
            <Flex.Item>
              <LinkLight
                style={{ marginBottom: '1.45rem' }}
                fontSize={2}
                href="https://github.com/gatsbyjs/gatsby"
              >
                gatsby
              </LinkLight>
              <Text as="p" color="blue.2" mb={5} fontSize={3}>
                Build blazing fast, modern apps and websites with React.
              </Text>
            </Flex.Item>
          </StyledFlex>
        </Flex>
      </Box>
      <Divider my={[9, 12]} />
    </Body>
  </Layout>
)

export default IndexPage

const Hero = styled(Box)`
  margin: auto;
  max-width: 1280px;
`

const ImageContainer = styled(Flex.Item)`
  position: relative;
  max-width: 464px;
  width: 83.33333333333334%;
  margin-bottom: 32px;

  @media screen and (min-width: 544px) {
    width: 66.66666666666666%;
  }

  @media screen and (min-width: 1012px) {
    width: 41.66666666666667%;
  }
`

const Divider = styled(Box)`
  border-top: 2px solid #79b8ff;
  opacity: 0.15;
  width: 10%;
  margin-right: auto;
  margin-left: auto;
`

const LinkLight = styled(Link)`
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  color: ${theme.colors.green};
  font-weight: 500;
  text-decoration: none;
  display: inline-block;

  &:hover {
    color: #3a7e6c;
  }
`

const LinkDark = styled(Link)`
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  display: ${props => props.display || 'block'};

  &:hover {
    text-decoration: underline;
    text-decoration-color: #000000;
  }
`

const Body = styled(Box)`
  margin: auto;
  max-width: 1280px;
`

const StyledFlex = styled(Flex)`
  max-width: 640px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

const FooterBox = styled(Box)`
  margin: auto;
  max-width: 1280px;
`
