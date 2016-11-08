module.exports = Config = {
    allowXDebugCookie: true,
    brain: {
        url: 'http://stdavids-brain.dev',
        api: '/api',
        apiVersion: '/v1'
    },
    redis : {
        isEnabled: false,
        port: 6379,
        host: '127.0.0.1'
    }
};