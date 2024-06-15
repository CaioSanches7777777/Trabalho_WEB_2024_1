
import user from './auth.js';

export default async function registerUser(app, options) {

    const registerUser = app.mongo.db.collection('registerUser');

    app.get('/registerUser', 
        {
            config: {
                logMe: true,
                requireAuthentication: true
            }
        }, 
        async (request, reply) => {
          
        return await registerUser.find().toArray();
    });
    
    app.post('/registerUser', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    username: { type: 'string' },
                    password: { type: 'string' } 
                },
                required: ['username', 'password']
            }
        },config:{
            requireAuthentication: false
        }
        }, async (request, reply) => {
                let user = request.body;

                let result = await registerUser.insertOne(user);

                return reply.code(201).send();
        });
    app.get('/registerUser/:id', async (request, reply) => {
        let id = request.params.id;
        let user = await registerUser.findOne({_id: new app.mongo.ObjectId(id)});
        return user;
    });
    
}