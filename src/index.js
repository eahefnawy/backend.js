const aws4fetch = require('aws4fetch')

const invoke = async (config, functionName, inputs = {}) => {
  const aws = new aws4fetch.AwsClient(config)
  const LAMBDA_FN_API = `https://lambda.${config.region}.amazonaws.com/2015-03-31/functions`
  const res = await aws.fetch(`${LAMBDA_FN_API}/${functionName}/invocations`, {
    body: JSON.stringify(inputs)
  })
  return res.json()
}

const backend = (config) =>
  config.import.reduce((accum, functionName) => {
    accum[functionName] = async (inputs) => invoke(config, functionName, inputs)
    return accum
  }, {})

module.exports = backend
