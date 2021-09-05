#!/usr/bin/env zx

const { dependencies, devDependencies } = require('../package.json')

const specialPackage = (packageName) => {
  const specials = {
    'vue-i18n': 'vue-i18n@next',
    'vue-router': 'vue-router@next',
    pinia: 'pinia@next',
    vue: 'vue@next',
  }

  if (Object.keys(specials).includes(packageName)) {
    return specials[packageName]
  }
  return packageName
}

const packages = Object.keys(dependencies).map(e => specialPackage(e))
const devPackages = Object.keys(devDependencies).map(e => specialPackage(e))

// @ts-ignore
await $`cd .. && yarn add ${packages}`
// @ts-ignore
await $`cd .. && yarn add --dev ${devPackages}`

