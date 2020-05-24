import PropTypes from 'prop-types'

const styles = ({ error }) => ({
  color: error ? '#f00' : '#dbcb00',
  display: 'inline-block',
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  marginRight: '2px',
  width: '120px',
})

const Label = ({ htmlFor, text, error }) => (
  <label htmlFor={htmlFor} style={styles({ error })}>
    {text}:
  </label>
)

Label.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string,
  error: PropTypes.string,
}

export default Label
