import PropTypes from 'prop-types'
import Head from 'next/head'

const h1 = {
  fontSize: '13px',
  fontWeight: 700,
}

const Header = ({ title }) => (
  <header>
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/public/favicon.ico" />
      <meta name="description" content="One click deploys to △ now" />
    </Head>
    <h1 styles={h1}># DEPLOY.NOW</h1>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
