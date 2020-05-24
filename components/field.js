import PropTypes from 'prop-types'

const styles = ({ error }) => ({
  display: 'inline-block',
  borderBottom: `2px solid ${error ? '#f00' : '#d8d8d8'}`,
  marginBottom: '10px',
})

const Field = ({ error, children }) => (
  <div style={styles({ error })}>{children}</div>
)

Field.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node,
}

export default Field
