import PropTypes from 'prop-types'

const styles = {
  background: '#fff',
  border: '2px solid #000',
  color: '#000',
  cursor: 'pointer',
  fontFamily: 'Menlo, Monaco, Lucida Console, Courier New, monospace, serif',
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: 1,
  display: 'block',
  padding: '10px 15px',
  margin: '10px 0 20px',
  WebkitTransition: 'all .2s ease',
  transition: 'all .2s ease',
  ':hover': {
    background: '#000',
    color: '#fff',
  },
}

const Button = props => {
  const { children } = props
  return (
    <button type="button" {...props} style={styles}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
}

export default Button
