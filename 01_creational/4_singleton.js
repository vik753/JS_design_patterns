// Ensure a class has only one instance and provide a global point of access to it.
// The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.
class Server {
    constructor(data) {
        if(Server.exist) return Server.instance;
        Server.instance = this;
        Server.exist = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongo = new Server('MongoDB');
console.log(mongo.getData());

const sql = new Server('MySQL');
console.log(sql.getData());