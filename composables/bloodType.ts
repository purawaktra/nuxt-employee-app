export default async function () {
  const config = useRuntimeConfig()

  interface BloodType {
    id: string,
    symbol: string
  }

  const endpoint = config.public.beHost + '/v1/api/blood-type/'
  return await $fetch(endpoint, {
    headers: {
      'Front-End-Version': config.public.appVersion,
    },
    method: 'GET'
  }).catch((error) => {
    throw error
  }).then((response: any) => {
    return response.data.map((item: BloodType) => ({
      value: item.id,
      label: item.symbol
    }))
  })
}