let url = {
  hotLists: '/index/lists',
  banner: '/index/banner'
}

let host = 'http://rapapi.org/mockjsdata/31521'

for (const key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url;