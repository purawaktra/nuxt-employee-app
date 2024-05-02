export default async function (employeeId: string, password: string) {
  const config = useRuntimeConfig()
  if (!employeeId || !password) {
    throw new Error('Oh no 😢, your credential is not valid')
  }

  const requestBody = {
    "employeeId": "S" + employeeId,
    "password": password
  }

  const endpoint = '/api/sign-in'
  return await $fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(requestBody)
  }).catch((error) => {
    throw error
  }).then(() => {
    return "Great 🌟 You are successfully login, wait for redirection..."
  })
}