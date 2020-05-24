import PropTypes from 'prop-types'

import Field from 'components/field'
import Input from 'components/input'
import Hint from 'components/hint'
import Button from 'components/button'

const styles = {
  key: ({ error }) => ({
    color: error ? '#f00' : '#dbcb00',
    fontSize: '11px',
    fontWeight: 700,
    width: '120px',
    '::-webkit-input-placeholder': {
      color: error ? '#f00' : '#dbcb00',
    },
  }),
  value: {
    width: '222px !important',
  },
  equals: {
    width: '30px',
    display: 'inline-block',
  },
  btn: {
    width: 25,
    height: 25,
    display: 'inline !important',
    padding: '0 !important',
    margin: '5px 0 0 15px !important',
    boxSizing: 'border-box',
  },
  hint: ({ required }) => {
    ;`${required ? 55 : 15}px !important`
  },
}

const EnvFieldset = ({ env, index, onChange, onRemove, error }) => (
  <div>
    <Field error={error}>
      <Input
        name={`${index}.key`}
        value={env.key}
        type="text"
        onChange={onChange}
        placeholder={`ENV_VAR_${index + 1}`}
        error={error}
        style={styles.key({ error })}
      />

      <div style={styles.equals}>=</div>

      <Input
        name={`${index}.value`}
        value={env.value}
        type="text"
        onChange={onChange}
        placeholder="value"
        error={error}
        style={styles.value}
      />
    </Field>

    {!env.required && (
      <Button onClick={onRemove} style={styles.btn}>
        -
      </Button>
    )}

    <Hint error={error} style={styles.hint({ required: env.required })} />
  </div>
)

EnvFieldset.propTypes = {
  env: PropTypes.object,
  index: PropTypes.number,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  error: PropTypes.string,
}

export default EnvFieldset
