import {
    GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLList,
} from 'graphql'
import { getGoodsList } from '@/service/GoodsService'
import { getGraphQLObjectTypePageList } from '@/utils/index'
import Item from './Item'
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
                },
                status: {
                    type: GraphQLInt
                },
                type: {
                    type: GraphQLInt
                },
                priceSort: {
                    type: GraphQLString
                }
            },
            resolve(root, params, ctx) {
                return getGoodsList(params)
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
    list: new GraphQLSchema({
        query: queryType
    })
}