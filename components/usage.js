import React from 'react'

const styles = {
  h2: {
    fontSize: '13px',
    fontWeight: 700,
  },
  pre: {
    backgroundColor: '#f7f7f7',
    padding: 15,
    whiteSpace: 'pre-wrap',
    lineHeight: 1.4,
  },
  code: {
    background: 'rgba(0,0,0,0.04)',
    padding: '0.2em',
    fontSize: '95%',
  },
  noBorder: {
    border: 'none',
  },
  img: {
    margin: '15px 0',
  },
}

const Usage = () => (
  <div>
    <h2 style={styles.h2}>## Usage</h2>
    <p>
      To add one-click deploys to your open source project, include the button
      to your readme:
    </p>

    <pre style={styles.pre}>
      [![Deploy to
      now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zpnk/hello-world)
    </pre>
    <p>
      Be sure to set the <code style={styles.code}>repo</code> parameter to the
      GitHub url of your project. This will result in the following link:
    </p>

    <p>
      <a
        href="https://deploy.now.sh/?repo=https://github.com/zpnk/hello-world"
        style={styles.noBorder}
      >
        <img src="/button.svg" style={styles.img} alt="Deploy to now" />
      </a>
    </p>

    <p>
      If your app requires users to specify environment variables, you may
      include these in the <code style={styles.code}>deploy</code> url:
    </p>

    <pre style={styles.pre}>
      https://deploy.now.sh/?repo=https://github.com/zpnk/hello-world&env=GREETING&env=RECIPIENT
    </pre>

    <p>The user will then be asked for these when deploying the app.</p>
  </div>
)

// Usage.propTypes = {
//   error: PropTypes.string,
//   children: PropTypes.node
// }

export default Usage
