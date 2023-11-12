import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})
 
// custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {

  testEnvironment: 'jest-environment-jsdom',
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)