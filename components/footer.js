import React from 'react'

const styles = {
  marginTop: 'auto',
  marginBottom: '40px',
  paddingTop: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  color: '#666',
  fontSize: '11px',
}

const Footer = () => (
  <footer style={styles}>
    <span>
      built by <a href="https://github.com/amccloud">@amccloud</a> &{' '}
      <a href="https://github.com/zpnk">@zpnk</a>
    </span>
    <span>
      powered by <a href="https://now.sh">△ now</a> |{' '}
      <a href="https://github.com/zpnk/deploy.now">source</a>
    </span>
  </footer>
)

export default Footer
