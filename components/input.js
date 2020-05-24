import PropTypes from 'prop-types'

const styles = ({ error }) => ({
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  background: 'rgba(0, 0, 0, 0)',
  border: 'none',
  color: error ? '#f00' : '#000',
  fontFamily: 'Menlo, Monaco, Lucida Console, Courier New, monospace, serif',
  fontSize: '13px',
  outline: 'none',
  width: '252px',
  height: '35px',
})

const Input = ({ error, ...props }) => (
  <input {...props} style={styles({ error })} />
)

Input.propTypes = {
  error: PropTypes.string,
}

export default Input
