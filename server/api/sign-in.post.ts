export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const {employeeId, password} = await readBody(event)
  if (!employeeId || !password) {
    throw new Error('Oh no 😢, your credential is not valid')
  }

  const requestBody = {
    employeeId,
    password
  }

  const endpoint = config.public.beHost + '/public/v1/api/account/sign-login'
  return await $fetch(endpoint, {
    headers: {
      'Front-End-Version': config.public.appVersion,
    },
    method: 'POST',
    body: JSON.stringify(requestBody)
  }).catch((error) => {
    throw error
  })
})