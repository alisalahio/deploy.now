import React from 'react'
import PropTypes from 'prop-types'

import TextFieldset from 'components/text-fieldset'
import EnvFieldset from 'components/env-fieldset'
import Button from 'components/button'
import validate from 'lib/validate'

export default class Form extends React.Component {
  static propTypes = {
    initialEnvs: PropTypes.node,
    needRepo: PropTypes.bool,
    defaultDocker: PropTypes.bool,
    onSubmit: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      repo: '',
      zeitToken: '',
      useDocker: false,
      envs: this.buildEnvs(props.initialEnvs),
      _errors: {},
    }
  }

  buildEnvs = initial => {
    if (!initial) return []

    if (initial.constructor === String)
      return [{ key: initial, value: '', required: true }]

    if (initial.constructor === Array)
      return initial.map(env => ({ key: env, value: '', required: true }))
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  handleSetEnv = e => {
    const { name, value } = e.target
    const { envs } = this.state
    const [index, field] = name.split('.')
    envs[index][field] = value
    this.setState({ envs })
  }

  handleAddEnvField = () => {
    let { envs } = this.state
    envs = envs.concat({ key: '', value: '' })
    this.setState({ envs })
  }

  handleRemoveEnvField = index => () => {
    let { envs } = this.state
    envs = envs.filter((el, idx) => idx !== index)
    this.setState({ envs })
  }

  handleSetDocker = ({ target }) => {
    if (this.props.defaultDocker) return true // already set.
    const { name, checked } = target
    this.setState({ [name]: checked })
  }

  handleSubmit = () => {
    const form = this.state
    const { needRepo } = this.props

    const _errors = validate.form(form)

    if (!needRepo) delete _errors.repo

    this.setState({ _errors })

    if (Object.keys(_errors).length === 0) this.props.onSubmit(form)
  }

  render() {
    const { needRepo, defaultDocker } = this.props
    const { repo, zeitToken, useDocker, envs, _errors: err } = this.state

    return (
      <div>
        {needRepo && (
          <TextFieldset
            name="repo"
            label="github repo"
            value={repo}
            placeholder="https://github.com/zeit/zeitgram"
            onChange={this.handleChange}
            error={err.repo}
            hint="URL to a GitHub repo"
          />
        )}

        <TextFieldset
          name="zeitToken"
          label="zeit api token"
          value={zeitToken}
          placeholder="xxxxxxxxxxxxxxxxxxxxxxxx"
          onChange={this.handleChange}
          error={err.zeitToken}
          hint={
            <span>
              Create a new token{' '}
              <a href="https://zeit.co/account/tokens">here</a>
            </span>
          }
        />

        {envs.map((env, index) => (
          <EnvFieldset
            env={env}
            key={index}
            index={index}
            onChange={this.handleSetEnv}
            onRemove={this.handleRemoveEnvField(index)}
            error={err[`env${index}`]}
          />
        ))}

        <Button onClick={this.handleAddEnvField}>
          Add environment variable
        </Button>

        <label>
          <input
            type="checkbox"
            name="useDocker"
            value={useDocker}
            onChange={this.handleSetDocker}
            checked={useDocker || defaultDocker}
          />
          Build using Docker
        </label>

        <Button onClick={this.handleSubmit}>DEPLOY</Button>
      </div>
    )
  }
}
