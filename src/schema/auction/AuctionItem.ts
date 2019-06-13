import {
    GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLList,
} from 'graphql'
const auctionExtendType = new GraphQLObjectType({
    name: 'auctionExtend',
    description: 'auctionExtend',
    fields: {
        auctionId: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.auctionId
            }
        },
        clientName: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.clientName
            }
        },
        createTime: {
            type: GraphQLInt,
            resolve(root, param, ctx) {
                return root.createTime
            }
        },
        publicType: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.publicType
            }
        }
    }
})
const corporeType = new GraphQLObjectType({
    name: 'corpore',
    description: 'corpore',
    fields: {
        catchDate: {
            type: GraphQLInt,
            resolve(root, param, ctx) {
                return root.catchDate
            }
        },
        categoryId: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.categoryId
            }
        },
        corporeExtend: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.corporeExtend
            }
        },
        corporeSerialNo: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.corporeSerialNo
            }
        },
        createTime: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.createTime
            }
        },
        creator: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.creator
            }
        },
        description: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.description
            }
        },
        growType: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.growType
            }
        },
        id: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.id
            }
        },
        imageUrls: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.imageUrls
            }
        },
        lastModifyBy: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.lastModifyBy
            }
        },
        lastModifyTime: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.lastModifyTime
            }
        },
        measureUnit: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.measureUnit
            }
        },
        name: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.name
            }
        },
        packSpecification: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.packSpecification
            }
        },
        productId: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.productId
            }
        },
        quantity: {
            type: GraphQLInt,
            resolve(root, param, ctx) {
                return root.quantity
            }
        },
        shipName: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.shipName
            }
        },
        shipNameNo: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.shipNameNo
            }
        },
        shipPathEnd: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.shipPathEnd
            }
        },
        shipPathStart: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.shipPathStart
            }
        },
        shipinfo: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.shipinfo
            }
        },
        specification: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.specification
            }
        },
        storeType: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.storeType
            }
        },
        videoUrl: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.videoUrl
            }
        }
    }
})
const summaryType = new GraphQLObjectType({
    name: 'summary',
    description: 'summary',
    fields: {
        auctionId: {
            type: GraphQLString,
            resolve(root, param, ctx) {
                return root.auctionId
            }
        },
        bidNumber: {
            type: GraphQLInt,
            resolve(root, param, ctx) {
                return root.bidNumber
            }
        },
        currentPrice: {
            type: GraphQLInt,
            resolve(root, param, ctx) {
                return root.currentPrice
            }
        },
        onlookNumber: {
            type: GraphQLInt,
            resolve(root, param, ctx) {
                return root.onlookNumber
            }
        },
        participants: {
            type: GraphQLInt,
            resolve(root, param, ctx) {
                return root.participants
            }
        }
    }
})
export default new GraphQLObjectType({
    name: 'item',
    description: 'auction item',
    fields: {
        advancePayment: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.advancePayment
            }
        },
        auctionExtend: {
            type: auctionExtendType,
            description: '',
            resolve(root, param, ctx) {
                return root.auctionExtend
            }
        },
        auditFlag: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.auditFlag
            }
        },
        auditTime: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.addedTime
            }
        },
        addedTime: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.addedTime
            }
        },
        auditorId: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.auditorId
            }
        },
        auditorName: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.auditorName
            }
        },
        beginTime: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.beginTime
            }
        },
        bidIncrement: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.bidIncrement
            }
        },
        bidType: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.bidType
            }
        },
        commission: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.commission
            }
        },
        contractUrls: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.contractUrls
            }
        },
        corpore: {
            type: corporeType,
            description: '',
            resolve(root, param, ctx) {
                return root.corpore
            }
        },
        coverUrls: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.coverUrls
            }
        },
        createTime: {
            type: GraphQLString,
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
        dealPrice: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.dealPrice
            }
        },
        dealResult: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.dealResult
            }
        },
        dealTime: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.dealTime
            }
        },
        delegateId: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.delegateId
            }
        },
        delegateName: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.delegateName
            }
        },
        delegatePhone: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.delegatePhone
            }
        },
        deliveryTime: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.deliveryTime
            }
        },
        endTime: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.endTime
            }
        },
        failResion: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.failResion
            }
        },
        id: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.id
            }
        },
        lastModifyBy: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.lastModifyBy
            }
        },
        lastModifyTime: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.lastModifyTime
            }
        },
        needReservePrice: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.needReservePrice
            }
        },
        orderTime: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.orderTime
            }
        },
        preBeginTime: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.preBeginTime
            }
        },
        preEndTime: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.preEndTime
            }
        },
        remark: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.remark
            }
        },
        reservePrice: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.reservePrice
            }
        },
        roundNum: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.roundNum
            }
        },
        sceneId: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.sceneId
            }
        },
        serialNo: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.serialNo
            }
        },
        startPrice: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.startPrice
            }
        },
        status: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.status
            }
        },
        summary: {
            type: summaryType,
            description: '',
            resolve(root, param, ctx) {
                return root.summary
            }
        },
        timeLimitBid: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.timeLimitBid
            }
        },
        title: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.title
            }
        },
        winBidderId: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.winBidderId
            }
        },
        winBidderName: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.winBidderName
            }
        },
    }
})