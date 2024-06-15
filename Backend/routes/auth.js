
export default async function auth(app, options) {
    
    app.post('/auth', (request, reply) => {
        let user = request.body;
        request.log.info('USER> ', user);
        request.log.info(`Login for user ${user.username}`);
        
        delete user.password;
        return {
            'x-access-token' : app.jwt.sign(user)
        }


    });
}