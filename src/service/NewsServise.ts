import request from '@/utils/request'
//请求数据
interface Params {
    page?: number, size?: number, keyWord?: string
}
export function getTradedList({ page, size, keyWord }: Params) {
    return request({
        url: '/news',
        method: 'GET',
        params: { page, size, keyWord }
    })
}