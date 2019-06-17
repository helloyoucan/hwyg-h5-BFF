import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList
} from 'graphql'
export default new GraphQLObjectType({
    name: 'item',
    description: 'goods item',
    fields: {
        addedTime: {
            type: GraphQLFloat,
            description: '上架时间',
            resolve(root, param, ctx) {
                return root.addedTime
            }
        },
        amountValve: {
            type: GraphQLInt,
            description: '起购量/起供量',
            resolve(root, param, ctx) {
                return root.amountValve
            }
        },
        applyChangeDtoList: {
            type: GraphQLString,
            description: '变更记录',
            resolve(root, param, ctx) {
                return root.applyChangeDtoList
            }
        },
        applyType: {
            type: GraphQLInt,
            description: '申请单类型 1采购申请 2供应申请',
            resolve(root, param, ctx) {
                return root.applyType
            }
        },
        approvalName: {
            type: GraphQLInt,
            description: '审批人名称',
            resolve(root, param, ctx) {
                return root.approvalName
            }
        },
        categoryId: {
            type: GraphQLString,
            description: '分类id',
            resolve(root, param, ctx) {
                return root.categoryId
            }
        },
        categoryName: {
            type: GraphQLString,
            description: '类别名称',
            resolve(root, param, ctx) {
                return root.categoryName
            }
        },
        code: {
            type: GraphQLString,
            description: '商品申请编码',
            resolve(root, param, ctx) {
                return root.code
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
            description: '创建人id',
            resolve(root, param, ctx) {
                return root.creator
            }
        },
        defaultImage: {
            type: GraphQLString,
            description: '封面图片（分类产品名称）',
            resolve(root, param, ctx) {
                return root.defaultImage
            }
        },
        deliveryArea: {
            type: GraphQLString,
            description: '交割地址',
            resolve(root, param, ctx) {
                return root.deliveryArea
            }
        },
        deliveryDate: {
            type: GraphQLString,
            description: '交割日期（YYYY-MM-DD）',
            resolve(root, param, ctx) {
                return root.deliveryDate
            }
        },
        deliveryDateTime: {
            type: GraphQLFloat,
            description: '交割时间的时间戳',
            resolve(root, param, ctx) {
                return root.deliveryDateTime
            }
        },
        deliveryTime: {
            type: GraphQLFloat,
            description: '交割时间（时分秒,hh-mm-ss）',
            resolve(root, param, ctx) {
                return root.deliveryTime
            }
        },
        description: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.description
            }
        },
        detail: {
            type: GraphQLString,
            description: '商品详情',
            resolve(root, param, ctx) {
                return root.detail
            }
        },
        detailedAddress: {
            type: GraphQLString,
            description: '详细地址',
            resolve(root, param, ctx) {
                return root.detailedAddress
            }
        },
        editTime: {
            type: GraphQLFloat,
            description: '修改时间',
            resolve(root, param, ctx) {
                return root.editTime
            }
        },
        editor: {
            type: GraphQLString,
            description: '修改人',
            resolve(root, param, ctx) {
                return root.editor
            }
        },
        fish: {
            type: GraphQLString,
            description: '养殖方式',
            resolve(root, param, ctx) {
                return root.fish
            }
        },
        detfishIdail: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.detfishIdail
            }
        },
        id: {
            type: GraphQLString,
            description: '数据id',
            resolve(root, param, ctx) {
                return root.id
            }
        },
        images: {
            type: new GraphQLList(GraphQLString),
            description: '产品上传图片,逗号分割的字符串',
            resolve(root, param, ctx) {
                return root.images ? root.images.split(',') : []
            }
        },
        isDelete: {
            type: GraphQLString,
            description: '是否删除，0不是，1是',
            resolve(root, param, ctx) {
                return root.isDelete
            }
        },
        location: {
            type: GraphQLString,
            description: '我的位置/仓位位置',
            resolve(root, param, ctx) {
                return root.location
            }
        },
        logisticsType: {
            type: GraphQLString,
            description: '物流方式 1:自提 2:物流运输',
            resolve(root, param, ctx) {
                return root.logisticsType
            }
        },
        outTime: {
            type: GraphQLFloat,
            description: '下架时间',
            resolve(root, param, ctx) {
                return root.outTime
            }
        },
        packSpec: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.packSpec
            }
        },
        phone: {
            type: GraphQLString,
            description: '发布人电话号码',
            resolve(root, param, ctx) {
                return root.phone
            }
        },
        pickAddress: {
            type: GraphQLString,
            description: '取货地址',
            resolve(root, param, ctx) {
                return root.pickAddress
            }
        },
        productId: {
            type: GraphQLString,
            description: '产品id',
            resolve(root, param, ctx) {
                return root.productId
            }
        },
        productName: {
            type: GraphQLString,
            description: '产品名称',
            resolve(root, param, ctx) {
                return root.productName
            }
        },
        quoteType: {
            type: GraphQLInt,
            description: '报价类型 1一口价 2可议价',
            resolve(root, param, ctx) {
                return root.quoteType
            }
        },
        reason: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.reason
            }
        },
        rejectType: {
            type: GraphQLString,
            description: '拒绝类型',
            resolve(root, param, ctx) {
                return root.rejectType
            }
        },
        remark: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.remark
            }
        },
        shipName: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.shipName
            }
        },
        shipNameNo: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.shipNameNo
            }
        },
        shipPathEnd: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.shipPathEnd
            }
        },
        shipPathStart: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.shipPathStart
            }
        },
        specification: {
            type: GraphQLString,
            description: '商品属性值(规格)',
            resolve(root, param, ctx) {
                return root.specification
            }
        },
        specificationId: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.specificationId
            }
        },
        status: {
            type: GraphQLInt,
            description: '状态 1-已上架，2-待审核，3-审核未通过，4-已下架，5-草稿',
            resolve(root, param, ctx) {
                return root.status
            }
        },
        storage: {
            type: GraphQLString,
            description: '存储类型',
            resolve(root, param, ctx) {
                return root.storage
            }
        },
        storageId: {
            type: GraphQLString,
            description: '',
            resolve(root, param, ctx) {
                return root.storageId
            }
        },
        totalAmount: {
            type: GraphQLInt,
            description: '总数量',
            resolve(root, param, ctx) {
                return root.totalAmount
            }
        },
        unit: {
            type: GraphQLString,
            description: '重量单位',
            resolve(root, param, ctx) {
                return root.unit
            }
        },
        unitPrice: {
            type: GraphQLInt,
            description: '单价',
            resolve(root, param, ctx) {
                return root.unitPrice
            }
        },
        userId: {
            type: GraphQLString,
            description: '用户id',
            resolve(root, param, ctx) {
                return root.userId
            }
        },
        userName: {
            type: GraphQLString,
            description: '用户名',
            resolve(root, param, ctx) {
                return root.userName
            }
        },
        userSn: {
            type: GraphQLString,
            description: '用户id',
            resolve(root, param, ctx) {
                return root.userSn
            }
        },
        videoUrl: {
            type: GraphQLString,
            description: '视频地址',
            resolve(root, param, ctx) {
                return root.videoUrl
            }
        }
    }
})