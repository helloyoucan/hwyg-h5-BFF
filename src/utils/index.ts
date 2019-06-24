import {
    GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList
} from 'graphql'
export function getGraphQLObjectTypeList(DataType: GraphQLObjectType) {
    return new GraphQLObjectType({
        name: 'DataType',
        description: 'Data Type',
        fields: {
            code: {
                type: GraphQLString
            },
            message: {
                type: GraphQLString
            },
            list: {
                type: new GraphQLList(DataType)
            }
        }
    })
}
export function getGraphQLObjectTypePageList(DataType: GraphQLObjectType) {
    return new GraphQLObjectType({
        name: 'DataType',
        description: 'Data Type',
        fields: {
            pager: {
                type: new GraphQLObjectType({
                    name: 'Pager',
                    description: 'Pager',
                    fields: {
                        page: {
                            type: GraphQLInt
                        },
                        size: {
                            type: GraphQLInt
                        },
                        totalElements: {
                            type: GraphQLInt
                        },
                        totalPages: {
                            type: GraphQLInt
                        },
                        numberOfElements: {
                            type: GraphQLInt
                        }
                    }
                }),
                resolve(root, params, ctx) {
                    return root.pager
                }
            },
            code: {
                type: GraphQLString
            },
            message: {
                type: GraphQLString
            },

            list: {
                type: new GraphQLList(DataType)
            }
        }
    })
}