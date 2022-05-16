let findHttpOrHttps = 'http' || 'https'
let https = 'https://'

export function CheckHttpOrHttps(socialNetwork: string | undefined): string | undefined {
    if (!socialNetwork) return ''
    if (socialNetwork.includes(findHttpOrHttps)) return socialNetwork
    return (https + socialNetwork)
}