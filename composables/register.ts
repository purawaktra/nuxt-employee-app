export default async function (employeeId: string, password: string, repeatPassword: string){
  const config = useRuntimeConfig()
  if(!employeeId || !password || !repeatPassword){
    throw new Error('Oh no 😢, your credential is not valid')
  }

  if(password !== repeatPassword){
    throw new Error('Oh no 😢, your password is not match')
  }

  const requestBody = {
    "employeeId": "S" + employeeId,
    "password": password,
    "description": "SRA: Self Register Account"
  }

  const endpoint = config.public.beHost + '/public/v2/api/account/'
  return await $fetch(endpoint, {
    headers: {
      'Front-End-Version': config.public.appVersion,
    },
    method: 'POST',
    body: JSON.stringify(requestBody)
  }).catch((error) => {
    throw error
  }).then(() => {
    return "Great 🌟 You are successfully registered, we've notify your admin to activate your account. You can go back to login page..."
  })
}