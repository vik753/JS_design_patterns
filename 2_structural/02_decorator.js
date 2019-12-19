class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }
    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}

const aws = (server) => {
    server.isAws = true;
    server.awsInfo = () => {
        return server.url;
    };
    return server;
};

const azure = (server) => {
    server.isAzure = true;
    server.port = server.port + 500;
    return server;
};

const s1 = aws(new Server('12.13.14.15',8080));
console.log(s1);
console.log(s1.awsInfo());

const s2 = azure(new Server('21.22.23.24', 1000));
console.log(s2);
console.log(s2.url);