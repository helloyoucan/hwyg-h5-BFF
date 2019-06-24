import {
    GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat,
} from 'graphql'
export default new GraphQLObjectType({
    name: 'item',
    description: 'auction item',
    fields: {
        checkNumber: {
            type: GraphQLInt,
            description: '浏览次数',
            resolve(root, param, ctx) {
                return root.checkNumber
            }
        },
        content: {
            type: GraphQLString,
            description: '资讯内容',
            resolve(root, param, ctx) {
                return root.content
            }
        },
        createTime: {
            type: GraphQLFloat,
            description: '创建时间时间戳',
            resolve(root, param, ctx) {
                return root.createTime
            }
        },
        creator: {
            type: GraphQLString,
            description: '创建人',
            resolve(root, param, ctx) {
                return root.creator
            }
        },
        expireTime: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.expireTime
            }
        },
        id: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.id
            }
        },
        isEffect : {
            type: GraphQLInt,
            description: '是否发布 1-发布 0-待发布',
            resolve(root, param, ctx) {
                return root.isEffect
            }
        },
        isPublish: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.isPublish
            }
        },
        nextId: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.nextId
            }
        },
        nextTitle: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.nextTitle
            }
        },
        preReleaseTime : {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.preReleaseTime
            }
        },
        prevId: {
            type: GraphQLString,
            description: '上一篇的id',
            resolve(root, param, ctx) {
                return root.prevId
            }
        },
        prevTitle: {
            type: GraphQLString,
            description: '上一篇的标题',
            resolve(root, param, ctx) {
                return root.prevTitle
            }
        },
        publishTime: {
            type: GraphQLInt,
            description: '下一篇的id',
            resolve(root, param, ctx) {
                return root.publishTime
            }
        },
        publisher: {
            type: GraphQLString,
            description: '下一篇的标题',
            resolve(root, param, ctx) {
                return root.publisher
            }
        },
        GraphQLFloat: {
            type: GraphQLInt,
            description: '最近编辑时间时间戳',
            resolve(root, param, ctx) {
                return root.recentEditTime
            }
        },
        title: {
            type: GraphQLString,
            description: '资讯标题',
            resolve(root, param, ctx) {
                return root.title
            }
        }
    }
})