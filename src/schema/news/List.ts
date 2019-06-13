import {
    GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLList,
} from 'graphql'
import { getSceneList } from '@/service/AuctionServise'
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
        data: {
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
                return getSceneList(params)
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