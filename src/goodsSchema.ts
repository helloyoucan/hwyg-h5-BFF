import {
    GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt,
} from 'graphql'
const ItemType = new GraphQLObjectType({
    name: 'item',
    fields: {
        id: {
            type: GraphQLString,
            description: "item id"
        },
        title: {
            type: GraphQLString,
            description: 'item title'
        },
        price: {
            type: GraphQLString,
            description: 'item price',
            resolve(root, param, content) {
                return (root.price / 100).toFixed(2)
            }
        },
        pic: {
            type: GraphQLString,
            description: 'item pic url'
        }
    }
})
const ItemSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "ItemQuery",
        description: 'query item',
        fields: {
            item: {
                type: ItemType,
                description: 'item',
                args: {
                    id: {
                        type: GraphQLInt,
                        required: true  //itemId required for query
                    },
                    aa:{
                        type: GraphQLInt
                    }
                },
                resolve(root, params, ctx) {
                    console.log(params)
                    // return ItemService(obj['id'])
                    return {
                        id:params.id,
                        title:'I am title',
                        price:'999.9',
                        pic:'I am pic'
                    }
                }
            }
        }
    })
})
function ItemService(id:string) {
    return id
}
export default ItemSchema