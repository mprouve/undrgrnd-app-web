let env

if (
  import.meta.env.VITE_NODE_ENV === 'local' ||
  import.meta.env.VITE_NODE_ENV === 'undefined' ||
  typeof import.meta.env.VITE_NODE_ENV === 'undefined'
) {
  env = 'local'
} else {
  env = 'production'
}

type EnvironmentInterface = {
  debug: boolean
}

// ****************************************
// PRODUCTION *****************************
// ****************************************
const production: EnvironmentInterface = {
  debug: false
}

// ****************************************
// LOCAL **********************************
// ****************************************
const local: EnvironmentInterface = {
  debug: true
}

const config = <EnvironmentInterface>{
  production,
  local
}[env]

export default config
