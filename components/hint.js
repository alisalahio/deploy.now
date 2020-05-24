import PropTypes from 'prop-types'

const styles = ({ error }) => ({
  display: 'inline-block',
  marginLeft: '55px',
  color: error ? '#f00' : '#ababab',
  fontSize: '11px',
  marginBottom: '10px',
})

const Hint = ({ text, error, ...props }) => (
  <div style={styles({ error })} {...props}>
    {error || text}
  </div>
)

Hint.propTypes = {
  text: PropTypes.node,
  error: PropTypes.string,
}

export default Hint
