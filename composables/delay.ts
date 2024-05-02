export default async function (ms: any) {
  return new Promise(res => setTimeout(res, ms))
};