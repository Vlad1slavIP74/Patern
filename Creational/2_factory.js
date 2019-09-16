class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.price = 50;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.price = 50;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.price = 50;
  }
}

class FactoryMember {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premoum: PremiumMembership
    }
    create(name, type = 'simple') {
        const Membership = FactoryMember.list[type] || FactoryMember.list.simple;
        const member = new Membership(name);
        member.type = type;
        member.define = function () {
            console.log(`${this.name}, ${this.type}`);
        }
        return member;
    };
}

const factoryMember = new FactoryMember();
const member = [factoryMember.create('Vlad', 'premoum')]

console.log(member)