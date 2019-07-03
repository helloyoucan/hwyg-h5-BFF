import request from '../utils/request'
//请求数据

export function getBrannerList() {
    return request({
        url: '/branners',
        method: 'GET'
    })
}
