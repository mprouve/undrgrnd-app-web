let env

if (
  import.meta.env.VITE_NODE_ENV === 'local' ||
  import.meta.env.VITE_NODE_ENV === 'undefined' ||
  typeof import.meta.env.VITE_NODE_ENV === 'undefined'
) {
  env = 'local'
} else if (import.meta.env.VITE_NODE_ENV === 'production') {
  env = 'production'
} else {
  env = 'local'
}

type EnvironmentType = {
  debug: boolean
  logLevel: 'warn' | 'log'
}

// ****************************************
// PRODUCTION *****************************
// ****************************************
const production: EnvironmentType = {
  debug: false,
  logLevel: 'warn'
}

// ****************************************
// LOCAL **********************************
// ****************************************
const local: EnvironmentType = {
  debug: true,
  logLevel: 'log'
}

const config = <EnvironmentType>{
  production,
  local
}[env]

export default config
