import {
    GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLList,
} from 'graphql'
import { getBrannerList } from '../../service/BrannersService'
const BrannerItem = new GraphQLObjectType({
    name: 'item',
    fields: {
        id: {
            type: GraphQLString,
            description: '广告id',
            resolve(root, param, ctx) {
                return root.id
            }
        },
        brannerName: {
            type: GraphQLString,
            description: '广告名称',
            resolve(root, param, ctx) {
                return root.brannerName
            }
        },
        effectTime: {
            type: GraphQLInt,
            description: '广告开始作用时间',
            resolve(root, param, ctx) {
                return root.effectTime
            }
        },
        expireTime: {
            type: GraphQLInt,
            description: '广告结束作用时间',
            resolve(root, param, ctx) {
                return root.expireTime
            }
        },
        createTime: {
            type: GraphQLInt,
            description: '创建时间',
            resolve(root, param, ctx) {
                return root.createTime
            }
        },
        imgUrl: {
            type: GraphQLString,
            description: '广告图片',
            resolve(root, param, ctx) {
                return root.imgUrl
            }
        },
        jumpMode: {
            type: GraphQLInt,
            description: '是否能跳转',
            resolve(root, param, ctx) {
                return root.jumpMode
            }
        },
        url: {
            type: GraphQLString,
            description: '当广告能跳转时，跳转的连接',
            resolve(root, param, ctx) {
                return root.url
            }
        },
        isEffect: {
            type: GraphQLInt,
            description: '生效状态 1-生效 0-失效',
            resolve(root, param, ctx) {
                return root.isEffect
            }
        },
        creator: {
            type: GraphQLString,
            description: '创建人',
            resolve(root, param, ctx) {
                return root.creator
            }
        }
    }
})
const BrannerList = new GraphQLList(BrannerItem)
const DataType = new GraphQLObjectType({
    name: 'DataType',
    description: 'Data Type',
    fields: {
        code: {
            type: GraphQLString,
            resolve(root, params, ctx) {
                console.log('code')
                console.log( root.code)
                return root.code
            }
        },
        message: {
            type: GraphQLString,
            resolve(root, params, ctx) {
                return root.message
            }
        },
        list: {
            type: BrannerList,
            resolve(root, params, ctx) {
                //params为参数与
                console.log(params)
                // return ItemService(obj['id'])
                return root.content
            }
        }
    }
})
const DataSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "ListQuery",
        description: 'query list',
        fields: {
            data: {
                type: DataType,
                description: 'item',
                async resolve(root, params, ctx) {
                    console.log(root)
                    console.log(params)
                    console.log(ctx)
                    //此处从接口获取BrannerList的内容
                    const res = await getBrannerList()
                    console.log(res)
                    // return ItemService(obj['id'])
                    return res
                }
            }
        }
    })
})
export default DataSchema