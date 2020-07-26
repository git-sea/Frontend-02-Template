const net = require('net')

class Request {
    constructor(options) {
        this.method = options.method || 'GET'
        this.host = options.host
        this.port = options.port || 80
        this.path = options.path || '/'
        this.body = options.body || {}
        this.headers = options.headers || {}
        if (!this.headers['Content-type']) {
            this.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        if (this.headers['Content-type'] === 'application/json') {
            this.bodyText = JSON.Stringify(this.body)
        } else if (this.headers['Content-type'] === 'application/x-www-form-urlencoded') {
            this.bodyText = Object.keys(this.body).map(key => `${key} = ${encodeURIComponent(this.body[key])}`).join('&')
        }
        this.headers['Content-length'] = this.bodyText.length
    }
    send() {
        return new Promise((resolve, reject) => {
            const parser = new ResponseParser
            resolver('')
        })
    }
}

class ResponseParser {
    constructor() {}
    receive(string) {
        for (let i = 0; i < string.length; i++) {
            this.receiveChar(string.charAt(i))
        }
    }
    receiveChar(char) {}
}

void async function() {
    let request = new Request({
        method: 'POST',
        host: '127.0.0.1',
        port: '8080',
        path: '/',
        header: {
            ['X-Foo2']: 'customed'
        },
        body: {
            name: 'sea'
        }
    })
    let response = await request.send()
}
