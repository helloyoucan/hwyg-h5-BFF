import {
    GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString
} from 'graphql'
import { getNewsList } from '@/service/NewsServise'
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
                keyWord: {
                    type: GraphQLString
                }
            },
            resolve(root, params, ctx) {
                return getNewsList(params)
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