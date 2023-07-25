export const dynamic = 'force-static';

import React from 'react'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'We are a social media company',
}


function About() {
  return (
    <main>
        <h1>About</h1>
        <p>We area social media company</p>
    </main>
  )
}

export default About