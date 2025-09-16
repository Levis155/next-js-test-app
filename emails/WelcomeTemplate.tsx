import React from 'react'
import { Html, Body, Container, Text, Link, Preview} from "@react-email/components"

const WelcomeTemplate = () => {
  return (
    <Html>
        <Preview>Welcome Aboard!</Preview>
        <Body>
            <Container>
                <Text>Hello World!</Text>
                <Link href='https://www.random-site.com'>Random Site</Link>
            </Container>
        </Body>
    </Html>
  )
}

export default WelcomeTemplate
