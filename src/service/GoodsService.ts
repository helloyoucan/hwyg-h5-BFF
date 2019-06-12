import request from '@/utils/request'
interface ListParams {
    page?: number,//页码
    size?: number,//每页几条
    status?: number,//状态，1为未发布，2为已发布
    type?: number,//商品类型 1为求购，2为供应
    priceSort?: string//价格排序
}

/**
 * 
 */
export function getGoodsList({ page = 1, size = 10, status = 1, type = 2, priceSort="" }: ListParams) {
    return request({
        url: '/applies',
        method: 'post',
        data: {
            page, size, status, type, priceSort
        }
    })
}