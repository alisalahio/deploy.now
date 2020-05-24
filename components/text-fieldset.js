import PropTypes from 'prop-types'

import Field from 'components/field'
import Label from 'components/label'
import Input from 'components/input'
import Hint from 'components/hint'

const TextFieldset = ({
  name,
  label,
  value,
  placeholder,
  onChange,
  error,
  hint,
}) => (
  <div>
    <Field error={error}>
      <Label htmlFor={name} text={label} error={error} />
      <Input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        error={error}
      />
    </Field>
    <Hint text={hint} error={error} />
  </div>
)

TextFieldset.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  hint: PropTypes.node,
}

export default TextFieldset
