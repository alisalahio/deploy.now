const deploy = require('lib/deploy')

export default async function deployHandler(req, res) {
  try {
    console.log(req.body)
    const { repo, config } = req.body

    const url = await deploy(repo, config)

    res.json({ url })
  } catch (error) {
    console.error(`> Deployment failed ${error.message}`)
    res.status(500).json({
      error: JSON.stringify(error.message),
    })
  }
}
