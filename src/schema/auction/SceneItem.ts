import {
    GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLList,
} from 'graphql'
export default new GraphQLObjectType({
    name: 'item',
    description: 'auction item',
    fields: {
        beginTime: {
            type: GraphQLInt,
            description: '场次开始时间戳',
            resolve(root, param, ctx) {
                return root.beginTime
            }
        },
        bidNumber: {
            type: GraphQLInt,
            description: '出价次数',
            resolve(root, param, ctx) {
                return root.bidNumber
            }
        },
        bidType: {
            type: GraphQLInt,
            description: '竞拍竞价 1-限时竞价 2-自由竞价 3-密封投标拍卖模式',
            resolve(root, param, ctx) {
                return root.bidType
            }
        },
        chargerName: {
            type: GraphQLInt,
            description: '负责人姓名',
            resolve(root, param, ctx) {
                return root.chargerName
            }
        },
        chargerPhone: {
            type: GraphQLInt,
            description: '负责人电话',
            resolve(root, param, ctx) {
                return root.chargerPhone
            }
        },
        corporeCount: {
            type: GraphQLInt,
            description: '标的数量',
            resolve(root, param, ctx) {
                return root.corporeCount
            }
        },
        coverUrls: {
            type: GraphQLInt,
            description: '场次封面图片地址，多个地址之间使用逗号“,”隔开',
            resolve(root, param, ctx) {
                return root.coverUrls
            }
        },
        createTime: {
            type: GraphQLInt,
            description: '创建时间',
            resolve(root, param, ctx) {
                return root.createTime
            }
        },
        creator: {
            type: GraphQLInt,
            description: '创建人',
            resolve(root, param, ctx) {
                return root.creator
            }
        },
        dealNumber : {
            type: GraphQLInt,
            description: '成交次数',
            resolve(root, param, ctx) {
                return root.dealNumber
            }
        },
        endTime: {
            type: GraphQLInt,
            description: '场次结束时间戳',
            resolve(root, param, ctx) {
                return root.endTime
            }
        },
        id: {
            type: GraphQLInt,
            description: '场次id',
            resolve(root, param, ctx) {
                return root.id
            }
        },
        lastModifyBy: {
            type: GraphQLInt,
            description: '更新时间',
            resolve(root, param, ctx) {
                return root.lastModifyBy
            }
        },
        lastModifyTime: {
            type: GraphQLInt,
            description: '更新人',
            resolve(root, param, ctx) {
                return root.lastModifyTime
            }
        },
        name: {
            type: GraphQLInt,
            description: '场次名称',
            resolve(root, param, ctx) {
                return root.name
            }
        },
        onlookNumber : {
            type: GraphQLInt,
            description: '围观次数',
            resolve(root, param, ctx) {
                return root.onlookNumber
            }
        },
        orderStatus: {
            type: GraphQLInt,
            description: '成交次数',
            resolve(root, param, ctx) {
                return root.orderStatus
            }
        },
        participants : {
            type: GraphQLInt,
            description: '参拍人数',
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
            description: '场次编号',
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
            description: '场次状态 0-未开始 1-拍卖中 2-已结束 3-已取消 4-待发布 5-已关闭',
            resolve(root, param, ctx) {
                return root.status
            }
        }
    }
})