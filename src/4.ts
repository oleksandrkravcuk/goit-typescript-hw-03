class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    door: boolean;
    key: Key;
    tenants: Person[] = [];

    constructor(door: boolean, key: Key) {
        this.door = door;
        this.key = key;
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Person entered the house.');
        } else {
            console.log('The door is closed. Person cannot enter.');
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is now open.');
        } else {
            console.log('Incorrect key. The door remains closed.');
        }
    }
}

    const key = new Key();
    const person = new Person(key);
    const myHouse = new MyHouse(false, key);

    console.log('Initial state:');
    console.log('Door status:', myHouse.door);

  myHouse.comeIn(person); // The door is closed. Person cannot enter.

  myHouse.openDoor(new Key()); // Incorrect key. The door remains closed.

  myHouse.openDoor(key); // The door is now open.

    console.log('Updated state:');
    console.log('Door status:', myHouse.door);
    myHouse.comeIn(person); // Person entered the house.
    
export {};