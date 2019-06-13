import request from '@/utils/request'
interface ListParams {
    page?: number,//页码
    size?: number//每页几条
}

/**
 * 获取密封式标的
 */
export function getSealList({ page = 1, size = 10 }: ListParams) {
    return request({
        url: '/seal/list',
        method: 'get',
        params: {
            page, size
        }
    })
}
enum EnumRang {
    today = "today",
    future = "future",
    previous = "previous"
}
interface SceneListParams {
    page?: number,//页码
    size?: number,//每页几条
    rang?: EnumRang //场次分类 today 今天 ，future 未来 ，previous 历史
}
/**
 * 获取拍卖场次
 */

export function getSceneList({ page = 1, size = 10, rang = EnumRang.today }: SceneListParams) {
    return request({
        url: '/seal/list',
        method: 'get',
        params: {
            page, size, rang
        }
    })
}