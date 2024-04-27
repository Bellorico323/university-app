/* eslint-disable @typescript-eslint/no-explicit-any */
export function createQueryParams<T extends { [key: string]: any }>(
  params: URLSearchParams,
  query: T,
) {
  const keys = Object.keys(query)

  params.set('page', '1')
  if (query[Object.keys(query)[0]]) {
    params.set(`${keys[0]}`, query[Object.keys(query)[0]])
  } else if (query[Object.keys(query)[0]] === '') {
    params.delete(`${keys[0]}`)
  }
  if (query[Object.keys(query)[1]]) {
    params.set(`${keys[1]}`, query[Object.keys(query)[1]])
  } else if (query[Object.keys(query)[1]] === '') {
    params.delete(`${keys[1]}`)
  }
  if (query[Object.keys(query)[2]]) {
    params.set(`${keys[2]}`, query[Object.keys(query)[2]])
  } else if (query[Object.keys(query)[2]] === '') {
    params.delete(`${keys[2]}`)
  }

  return params
}
