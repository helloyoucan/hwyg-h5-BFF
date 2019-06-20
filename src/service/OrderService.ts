import request from '@/utils/request'
//请求数据
interface Params {
    page?: number,
    size?: number
}
export function getTradedList({ page = 1, size = 10 }: Params) {
    return request({
        url: `/order/success/${page}/${size}`,
        method: 'GET'
    })
}