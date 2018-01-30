let url = {
  hotLists: '/index/lists'
}

let host = 'http://rap2api.taobao.org/app/mock/4354/GET'

for (const key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url;