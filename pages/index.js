import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Header from 'components/header'
import Footer from 'components/footer'
import Form from 'components/form'
import Usage from 'components/usage'
import { isRepoUrl } from 'lib/validate'
import parseRepoURL from 'lib/parse-repo-url'

const quote = {
  fontSize: '12px',
  fontWeight: 100,
  fontStyle: 'italic',
}

const Index = ({ repo, docker, env }) => {
  const [deploying, setDeploying] = useState(false)
  const [deployedUrl, setDeployedUrl] = useState(null)
  const [errors, setErrors] = useState({})
  const [repository, setRepository] = useState(repo)
  const [useDocker, setUseDocker] = useState(docker)
  const { repoName, repoURL, repoBranch, branchDirectory } = repo
    ? parseRepoURL(repo)
    : {}

  useEffect(() => {
    if (repo && !isRepoUrl(repo)) {
      setErrors({
        repo: 'Cannot build that repo, please enter one',
      })
    }
  }, [repo])

  const handleDeploy = async data => {
    setDeploying(true)

    if (data.docker) setUseDocker(true)
    if (isRepoUrl(data.repo)) setRepository(data.repo)

    try {
      const deployment = {
        repo: data.repo,
        config: {
          token: data.zeitToken,
          docker: useDocker,
          envs: data.envs,
        },
      }

      const {
        data: { url },
      } = await axios.post('/api/deploy', deployment)

      setDeployedUrl(url)
      setDeploying(false)
    } catch (error) {
      setErrors({
        deploy: 'Deploy failed, please check the repo and try again.',
      })
      setDeploying(false)
    }
  }

  return (
    <main>
      <Header title="Now: deploy instantly" />

      <h2 style={quote}>
        > One click deploys to <a href="https://now.sh">△ now</a>
      </h2>

      {repo && !errors.repo && (
        <p>
          Deploying {branchDirectory ? `${branchDirectory} directory in ` : ''}
          {repoBranch ? `${repoBranch} branch of ` : ''}
          <a href={repoURL}>{repoName}</a>
        </p>
      )}

      {deploying && <p>Initialising...</p>}

      {!deploying && <p>{errors.deploy || errors.repo}</p>}

      {deployedUrl && (
        <div>
          <p>Your deployment has been queued!</p>
          <p>
            Your app will be available at{' '}
            <a href={deployedUrl}>{deployedUrl}</a>
          </p>
        </div>
      )}

      {!deployedUrl && !deploying && (
        <Form
          initialEnvs={env}
          needRepo={!repo || Boolean(errors.repo)}
          defaultDocker={Boolean(docker)}
          onSubmit={handleDeploy}
        />
      )}

      <Usage />

      <Footer />
    </main>
  )
}

Index.getInitialProps = ({ query: { repo, docker, env } }) => ({
  repo,
  docker,
  env,
})

Index.propTypes = {
  repo: PropTypes.string,
  docker: PropTypes.bool,
  env: PropTypes.object,
}

export default Index
