import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat
} from 'graphql'
const auctionExtendType = new GraphQLObjectType({
    name: 'auctionExtend',
    description: 'auctionExtend',
    fields: {
        auctionId: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.auctionId
            }
        },
        clientName: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.clientName
            }
        },
        createTime: {
            type: GraphQLInt,
            description: '',
            resolve(root, param, ctx) {
                return root.createTime
            }
        },
        publicType: {
            type: GraphQLString,
            description: '',
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
            description: '捕捞日期',
            resolve(root, param, ctx) {
                return root.catchDate
            }
        },
        categoryId: {
            type: GraphQLString,
            description: '分类Id',
            resolve(root, param, ctx) {
                return root.categoryId
            }
        },
        corporeExtend: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.corporeExtend
            }
        },
        corporeSerialNo: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.corporeSerialNo
            }
        },
        createTime: {
            type: GraphQLFloat,
            description: '创建时间',
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
        description: {
            type: GraphQLString,
            description: '描述',
            resolve(root, param, ctx) {
                return root.description
            }
        },
        growType: {
            type: GraphQLString,
            description: '生长方式',
            resolve(root, param, ctx) {
                return root.growType
            }
        },
        id: {
            type: GraphQLString,
            description: '标的数据id',
            resolve(root, param, ctx) {
                return root.id
            }
        },
        imageUrls: {
            type: GraphQLString,
            description: '图片集合',
            resolve(root, param, ctx) {
                return root.imageUrls
            }
        },
        lastModifyBy: {
            type: GraphQLString,
            description: '编辑人',
            resolve(root, param, ctx) {
                return root.lastModifyBy
            }
        },
        lastModifyTime: {
            type: GraphQLFloat,
            description: '编辑时间',
            resolve(root, param, ctx) {
                return root.lastModifyTime
            }
        },
        measureUnit: {
            type: GraphQLString,
            description: '单位',
            resolve(root, param, ctx) {
                return root.measureUnit
            }
        },
        name: {
            type: GraphQLString,
            description: '标的名称',
            resolve(root, param, ctx) {
                return root.name
            }
        },
        packSpecification: {
            type: GraphQLString,
            description: '包装规格',
            resolve(root, param, ctx) {
                return root.packSpecification
            }
        },
        productId: {
            type: GraphQLString,
            description: '产品ID',
            resolve(root, param, ctx) {
                return root.productId
            }
        },
        quantity: {
            type: GraphQLInt,
            description: '数量',
            resolve(root, param, ctx) {
                return root.quantity
            }
        },
        shipName: {
            type: GraphQLString,
            description: '渔船号',
            resolve(root, param, ctx) {
                return root.shipName
            }
        },
        shipNameNo: {
            type: GraphQLString,
            description: '渔船号溯源号码',
            resolve(root, param, ctx) {
                return root.shipNameNo
            }
        },
        shipPathEnd: {
            type: GraphQLFloat,
            description: '渔船轨迹开始时间',
            resolve(root, param, ctx) {
                return root.shipPathEnd
            }
        },
        shipPathStart: {
            type: GraphQLFloat,
            description: '渔船轨迹结束时间',
            resolve(root, param, ctx) {
                return root.shipPathStart
            }
        },
        shipinfo: {
            type: GraphQLString,
            description: '渔船信息汇总',
            resolve(root, param, ctx) {
                return root.shipinfo
            }
        },
        specification: {
            type: GraphQLString,
            description: '规格',
            resolve(root, param, ctx) {
                return root.specification
            }
        },
        storeType: {
            type: GraphQLString,
            description: '存储类别',
            resolve(root, param, ctx) {
                return root.storeType
            }
        },
        videoUrl: {
            type: GraphQLString,
            description: '视频url',
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
            description: '拍卖Id',
            resolve(root, param, ctx) {
                return root.auctionId
            }
        },
        bidNumber: {
            type: GraphQLInt,
            description: '出价次数',
            resolve(root, param, ctx) {
                return root.bidNumber
            }
        },
        currentPrice: {
            type: GraphQLInt,
            description: '最新价格',
            resolve(root, param, ctx) {
                return root.currentPrice
            }
        },
        onlookNumber: {
            type: GraphQLInt,
            description: '围观次数',
            resolve(root, param, ctx) {
                return root.onlookNumber
            }
        },
        participants: {
            type: GraphQLInt,
            description: '参拍人数',
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
            description: '保证金',
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
            description: '审核标志',
            resolve(root, param, ctx) {
                return root.auditFlag
            }
        },
        auditTime: {
            type: GraphQLFloat,
            description: '审核时间',
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
            description: '审核人Id',
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
            type: GraphQLFloat,
            description: '开始时间',
            resolve(root, param, ctx) {
                return root.beginTime
            }
        },
        bidIncrement: {
            type: GraphQLString,
            description: '加价幅度',
            resolve(root, param, ctx) {
                return root.bidIncrement
            }
        },
        bidType: {
            type: GraphQLInt,
            description: '拍卖类型',
            resolve(root, param, ctx) {
                return root.bidType
            }
        },
        commission: {
            type: GraphQLString,
            description: '佣金',
            resolve(root, param, ctx) {
                return root.commission
            }
        },
        contractUrls: {
            type: GraphQLString,
            description: '委托合同',
            resolve(root, param, ctx) {
                return root.contractUrls
            }
        },
        corpore: {
            type: corporeType,
            description: '标的物数据对象',
            resolve(root, param, ctx) {
                return root.corpore
            }
        },
        coverUrls: {
            type: GraphQLString,
            description: '封面图片集合',
            resolve(root, param, ctx) {
                return root.coverUrls
            }
        },
        createTime: {
            type: GraphQLFloat,
            description: '创建时间',
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
        dealPrice: {
            type: GraphQLString,
            description: '成交价',
            resolve(root, param, ctx) {
                return root.dealPrice
            }
        },
        dealResult: {
            type: GraphQLString,
            description: '成交结果',
            resolve(root, param, ctx) {
                return root.dealResult
            }
        },
        dealTime: {
            type: GraphQLFloat,
            description: '成交时间',
            resolve(root, param, ctx) {
                return root.dealTime
            }
        },
        delegateId: {
            type: GraphQLString,
            description: '委托方ID',
            resolve(root, param, ctx) {
                return root.delegateId
            }
        },
        delegateName: {
            type: GraphQLString,
            description: '委托方名称',
            resolve(root, param, ctx) {
                return root.delegateName
            }
        },
        delegatePhone: {
            type: GraphQLString,
            description: '委托方客户电话',
            resolve(root, param, ctx) {
                return root.delegatePhone
            }
        },
        deliveryTime: {
            type: GraphQLFloat,
            description: '可交割时间',
            resolve(root, param, ctx) {
                return root.deliveryTime
            }
        },
        endTime: {
            type: GraphQLFloat,
            description: '结束时间',
            resolve(root, param, ctx) {
                return root.endTime
            }
        },
        failResion: {
            type: GraphQLString,
            description: '审核不通过原因',
            resolve(root, param, ctx) {
                return root.failResion
            }
        },
        id: {
            type: GraphQLString,
            description: '数据id',
            resolve(root, param, ctx) {
                return root.id
            }
        },
        lastModifyBy: {
            type: GraphQLString,
            description: '编辑人',
            resolve(root, param, ctx) {
                return root.lastModifyBy
            }
        },
        lastModifyTime: {
            type: GraphQLFloat,
            description: '编辑时间',
            resolve(root, param, ctx) {
                return root.lastModifyTime
            }
        },
        needReservePrice: {
            type: GraphQLString,
            description: '是否需要保留价',
            resolve(root, param, ctx) {
                return root.needReservePrice
            }
        },
        orderTime: {
            type: GraphQLFloat,
            description: '预约时间',
            resolve(root, param, ctx) {
                return root.orderTime
            }
        },
        preBeginTime: {
            type: GraphQLFloat,
            description: '场次预约 开始时间',
            resolve(root, param, ctx) {
                return root.preBeginTime
            }
        },
        preEndTime: {
            type: GraphQLFloat,
            description: '场次预约 结束时间',
            resolve(root, param, ctx) {
                return root.preEndTime
            }
        },
        remark: {
            type: GraphQLString,
            description: '备注',
            resolve(root, param, ctx) {
                return root.remark
            }
        },
        reservePrice: {
            type: GraphQLString,
            description: '保留价',
            resolve(root, param, ctx) {
                return root.reservePrice
            }
        },
        roundNum: {
            type: GraphQLString,
            description: '回合',
            resolve(root, param, ctx) {
                return root.roundNum
            }
        },
        sceneId: {
            type: GraphQLString,
            description: '场次ID',
            resolve(root, param, ctx) {
                return root.sceneId
            }
        },
        serialNo: {
            type: GraphQLString,
            description: '拍卖编号',
            resolve(root, param, ctx) {
                return root.serialNo
            }
        },
        startPrice: {
            type: GraphQLString,
            description: '起拍价格，单位：分',
            resolve(root, param, ctx) {
                return root.startPrice
            }
        },
        status: {
            type: GraphQLInt,
            description: '标的状态',
            resolve(root, param, ctx) {
                return root.status
            }
        },
        summary: {
            type: summaryType,
            description: '拍卖数据对象',
            resolve(root, param, ctx) {
                return root.summary
            }
        },
        timeLimitBid: {
            type: GraphQLFloat,
            description: '时间限制',
            resolve(root, param, ctx) {
                return root.timeLimitBid
            }
        },
        title: {
            type: GraphQLString,
            description: '标题',
            resolve(root, param, ctx) {
                return root.title
            }
        },
        winBidderId: {
            type: GraphQLString,
            description: '中标人ID',
            resolve(root, param, ctx) {
                return root.winBidderId
            }
        },
        winBidderName: {
            type: GraphQLString,
            description: '中标人姓名',
            resolve(root, param, ctx) {
                return root.winBidderName
            }
        },
    }
})