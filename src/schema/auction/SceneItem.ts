import {
    GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLList,
} from 'graphql'
export default new GraphQLObjectType({
    name: 'item',
    description: 'auction item',
    fields: {
        beginTime: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.beginTime
            }
        },
        bidNumber: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.bidNumber
            }
        },
        bidType: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.bidType
            }
        },
        chargerName: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.chargerName
            }
        },
        chargerPhone: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.chargerPhone
            }
        },
        corporeCount: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.corporeCount
            }
        },
        coverUrls: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.coverUrls
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
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.creator
            }
        },
        dealNumber : {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.dealNumber
            }
        },
        endTime: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.endTime
            }
        },
        id: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.id
            }
        },
        lastModifyBy: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.lastModifyBy
            }
        },
        lastModifyTime: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.lastModifyTime
            }
        },
        name: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.name
            }
        },
        onlookNumber : {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.onlookNumber
            }
        },
        orderStatus: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.orderStatus
            }
        },
        participants : {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.participants
            }
        },
        preTime: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.preTime
            }
        },
        publishTime: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.publishTime
            }
        },
        serialNo: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.serialNo
            }
        },
        sponsor : {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.sponsor
            }
        },
        status: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.status
            }
        }
    }
})