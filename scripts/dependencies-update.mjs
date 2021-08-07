#!/usr/bin/env zx

const { dependencies, devDependencies } = require('../package.json')

const nextPackage = (packageName) => {
  const next = {
    vue: 'vue@next',
    'vue-router': 'vue-router@next',
  }

  if (Object.keys(next).includes(packageName)) {
    return next[packageName]
  }
  return packageName
}

const packages = Object.keys(dependencies).map(e => nextPackage(e))
const devPackages = Object.keys(devDependencies)

// @ts-ignore
await $`cd .. && yarn add ${packages}`
// @ts-ignore
await $`cd .. && yarn add --dev ${devPackages}`

