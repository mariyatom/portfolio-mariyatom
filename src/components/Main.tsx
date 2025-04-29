import DescriptionIcon from '@mui/icons-material/Description'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import mariyaAvatar from '../assets/images/mariya.png'
import '../assets/styles/Main.scss'

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        {/* <div className="image-wrapper">
          <img src={mariyaAvatar} alt="Avatar" />
        </div> */}
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/mariyatom"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/tommariya/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="/public/mariyatom-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DescriptionIcon />
            </a>
          </div>
          <h1>Mariya Tom</h1>
          <p>Full-Stack Software Developer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/mariyatom"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/tommariya/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="/public/mariyatom-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DescriptionIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
