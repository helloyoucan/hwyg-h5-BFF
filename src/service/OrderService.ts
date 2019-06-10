import request from '@/utils/request'
//请求数据

export function getTradedList() {
    return request({
        url: '/order/success/1/10',
        method: 'GET'
    })
}