let url = {
  hotLists: '/index/lists',
  banner: '/index/banner',
  topList: '/category/topList',
  subList: '/category/subList',
  rankList: '/category/rankList',
  searchList :'/search/list',
  details :'/goods/details',
  deal :'/goods/deal',
  addCart :'/cart/add',
  cartLists :'/cart/list',
  cartReduce : '/cart/reduce',
  cartRemove :'/cart/remove',
  cartMremove : '/cart/mremove' 
}

let host = 'http://rapapi.org/mockjsdata/31521'

for (const key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url;