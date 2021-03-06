import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLFloat,
} from 'graphql'
import { getTradedList } from '../../service/OrderService'
import { getGraphQLObjectTypePageList } from '../../utils/index'
const Item = new GraphQLObjectType({
    name: 'item',
    fields: {
        productName: {
            type: GraphQLString,
            description: '商品名',
            resolve(root, param, ctx) {
                return root.productName
            }
        },
        amount: {
            type: GraphQLInt,
            description: '数量',
            resolve(root, param, ctx) {
                return root.amount
            }
        },
        unit: {
            type: GraphQLString,
            description: 'unit单位',
            resolve(root, param, ctx) {
                return root.unit
            }
        },
        unitPrice: {
            type: GraphQLInt,
            description: '单价',
            resolve(root, param, ctx) {
                return root.unitPrice
            }
        },
        price: {
            type: GraphQLInt,
            description: '总价',
            resolve(root, param, ctx) {
                return root.price
            }
        },
        time: {
            type: GraphQLFloat,
            description: '成交时间',
            resolve(root, param, ctx) {
                return root.time
            }
        }
    }
})
interface Res {
    code: string,
    message: string,
    data: {
        content: Array<object>,
        page: number,
        totalElements: number,
        totalPages: number,
        size: number,
        numberOfElements: number
    }
}
const queryType = new GraphQLObjectType({
    name: "ListQuery",
    description: 'query list',
    fields: {
        _schema: {
            type: getGraphQLObjectTypePageList(Item),
            description: 'data',
            args: {
                page: {
                    type: GraphQLInt
                },
                size: {
                    type: GraphQLInt
                }
            },
            resolve(root, params, ctx) {
                return getTradedList(params)
                    .then((res: Res) => {
                        const { code, message, data: { content, page, totalElements, totalPages, size, numberOfElements } } = res
                        return {
                            code,
                            message,
                            pager: {
                                page, totalElements, totalPages, size, numberOfElements
                            },
                            list: content
                        }
                    })
            }
        }
    }
})
export default {
    tradedList: new GraphQLSchema({
        query: queryType
    })
}