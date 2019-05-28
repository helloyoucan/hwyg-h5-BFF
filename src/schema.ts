import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt
} from 'graphql';
//编写 GraphQL Schema
let count = 0;
let schema = new GraphQLSchema({
    query:new GraphQLObjectType({
        name:'RootQueryType',
        fields:{
            count: {
                type:GraphQLInt,
                resolve(){
                    return count;
                }
            }
        }
    })
}) 
export default schema;
/**
 * 这段代码创建了GraphQLSchema实例。
 * 这个schema的顶级查询对象会返回一个RootQueryType对象，
 * 这个RootQueryType对象有一个整数类型count域。
 * GrqphQL处理支持整数（Interger），
 * 还支持字符串（string）,
 * 列表（List）等多种类型的数据
 */