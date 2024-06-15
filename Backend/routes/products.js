
import createError from '@fastify/error';
import { config } from 'dotenv';
export default async function products(app, options) {
    const InvalidProductError = createError('InvalidProductError', 'Produto Inválido.', 400);

    const products = app.mongo.db.collection('products');

    app.get('/products', 
        {
            config: {
                logMe: true,
                
            }
        }, 
        async (request, reply) => {
            
        return await products.find().toArray();
    });

    app.post('/products', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    name: { type: 'string' },
                    qtd: { type: 'integer' },
                    category: { type: 'string' },
                    price: { type: 'integer' },
                    description: { type: 'string' }
                },
                required: ['name', 'qtd', 'category']
            }
        },config:{
            requireAuthentication: true
        }
    }, async (request, reply) => {
        let product = request.body;

        let result = await products.insertOne(product);

        return reply.code(201).send();
    });


    app.get('/products/:id', async (request, reply) => {
        let id = request.params.id;
        let product = await products.findOne({_id: new app.mongo.ObjectId(id)});
        return product;
    });
    
    app.delete('/products/:id',{
        config:{
            requireAuthentication: true
        }
        }, async (request, reply) => {
        let id = request.params.id;
        await products.deleteOne({_id: new app.mongo.ObjectId(id)});
        return reply.code(204).send();
    });

    app.put('/products/:id', {
        config:{
            requireAuthentication: true
        }
    }, async (request,reply) => {
        let id = request.params.id;
        let product = request.body;

        await products.updateOne({_id: new app.mongo.ObjectId(id)}, {
            $set:{
                name:product.name,
                qtd: product.qtd,
                category: product.category,
                price: product.price,
                description: product.description
            }
        });

        return reply.code(204).send();
    });
}