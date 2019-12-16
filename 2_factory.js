class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name;
        this.cost = 100;
    }
}

class PremiunMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiunMembership
    };

    create(name = 'Anonymous', type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);
        member.type = type;
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        };
        return member;
    }
}

const factory = new MemberFactory();
const members = [
    factory.create(),
    factory.create('Andrew', 'simple'),
    factory.create('Andrew2', 'standard'),
    factory.create('Andrew3', 'premium'),
    factory.create('Andrew4'),
];

members.forEach(member => {
    member.define()
});