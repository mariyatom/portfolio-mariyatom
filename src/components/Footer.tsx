import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/yujisatojr"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/yujisato/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>
        A portfolio designed & built by{' '}
        <a
          href="https://github.com/yujisatojr/portfolio-mariya"
          target="_blank"
          rel="noreferrer"
        >
          Mariya Tom
        </a>{' '}
        with 💜
      </p>
    </footer>
  )
}

export default Footer
