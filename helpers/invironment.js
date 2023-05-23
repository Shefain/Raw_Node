// dependencies



// module scaffolding

const environments = {}


environments.staging = {
  port:3000,
  envName : 'staging'
}

environments.production = {
  port : 4000,
  envName: 'production'
}

// determine which invironment was passed

const currentEnvironment = environments[process.env.NODE_ENV] ? environments[process.env.NODE_ENV] : environments.staging

module.exports = currentEnvironment;