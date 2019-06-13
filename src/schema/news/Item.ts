import {
    GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLList,
} from 'graphql'
export default new GraphQLObjectType({
    name: 'item',
    description: 'auction item',
    fields: {
        checkNumber: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.checkNumber
            }
        },
        content: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.content
            }
        },
        createTime: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.createTime
            }
        },
        creator: {
            type: GraphQLString,
            description: '',
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
            description: '',
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
            description: '',
            resolve(root, param, ctx) {
                return root.prevId
            }
        },
        prevTitle: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.prevTitle
            }
        },
        publishTime: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.publishTime
            }
        },
        publisher: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.publisher
            }
        },
        recentEditTime: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.recentEditTime
            }
        },
        title: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.title
            }
        }
    }
})