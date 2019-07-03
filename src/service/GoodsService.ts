import request from '../utils/request'
interface ListParams {
    page?: number,//页码
    size?: number,//每页几条
    status?: number,//状态 1-已上架，2-待审核，3-审核未通过，4-已下架，5-草稿
    type?: number,//商品类型 1为求购，2为供应
    priceSort?: string,//价格排序0-降序 1-升序
    userId?: string,//用户ID
    productName?: string,//商品名称
    categoryId?: string,//类别ID
    storage?: string,//存储类型
    fish?: string,//商品属性值(生长方式、渔获类型)
    authTypes?: string,//认证信息int数组 0:普通注册用户，1:个人认证用户，2:企业认证用户，3:已绑定对公账号的用户（新增2019-05-14）
    amountSort?: string,//数量排序0-降序 1-升序（新增 2019-05-14）
    orderNo?: string//订单编号
}

/**
 * 
 */
export function getGoodsList({ page = 1, size = 10, status = 1, type = 2, priceSort = "", userId, productName, categoryId, storage, fish, authTypes, amountSort, orderNo }: ListParams) {
    return request({
        url: '/applies',
        method: 'post',
        data: {
            page, size, status, type, priceSort, userId, productName, categoryId, storage, fish, authTypes, amountSort, orderNo
        }
    })
}