const regularObj = {
  'adbib3n4fjhvbktejrhgnk': { name: 'Adi', email: 'adi@gmail.com' },
  'fiu45nou4htngjntreoregrt': { name: 'Ofer', email: 'ofer@gmail.com' },
}

// the regular object way to save items:
{ 
  'kcjbni54jrleqf':  {
     userId: 'kcjbni54jrleqf',
     firstName: 'Adi',
     lastName: 'Dimant',
     email: 'adi@gmail.com',
     phone: '+97258777777',
     city: 'Raanana',
     country: 'Germany',
     zipcode: 69584,
   },
   'fonj54lkreln': {...}
 }

/*
 Our conditions for a good hash function:
 1) Spread the elements fair & well between all the cells
 2) Random
 3) Persistent - same key, will reach the same cell (result) after the function
 4) Fixed length mapping (any length of input will result in a fixed length result)
*/

// md5('dfuhviufenvfujnbprfubnprgubnfgpibundfbjdfnbidfjnbpfgibjnfgjb') => dbjhb348yfg4einrfuvyt4onriufb4oren
// sha256 - the most powerful & in most common use in the industry

const hashTableExample = {
  '<this-is-hash-value-1>': [{ id: 3096587456, name: 'Adi', email: 'adi@gmail.com' }, { id: 3086587456, name: 'Yael', email: 'yael@gmail.com' }],
  '<this-is-hash-value-2>': [{ id: 3106586459, name: 'Ofer', email: 'ofer@gmail.com' }],
}

/*
Given a key (such userId), operate the hash-function on the key and get the hashed-value result
Save / Get the value according to this hashed-value from the table
*/

class HashTable<HashType> {
  private data: any;
  private hashFunction: (key: HashType) => HashType;
  private keyName: string;

  constructor(hashFunction: (key: HashType) => HashType, keyName: string) {
    this.data = {};
    this.hashFunction = hashFunction;
    this.keyName = keyName;
  }

  save(key: HashType, value: object) { // O(m), m is the number of elements in 1 cell, m is O(1) comparing to n => O(1)
    const hashedValue = this.hashFunction(key); // O(1)
    // search if the cell is already
    if (!this.data[hashedValue]) {
      this.data[hashedValue] = [];
    }
    // search if user already exist:
    const existingValueIndex = this.data[hashedValue].findIndex((entity: any) => entity[this.keyName] == key); // ~O(1)
    if (existingValueIndex > -1) {
      this.data[hashedValue][existingValueIndex] = value;
    } else {
      this.data[hashedValue].push(value);
    }
    // In total: ~O(1)
  }

  get(key: HashType): object | null { 
    const hashedValue = this.hashFunction(key); // O(1)
    if (this.data[hashedValue]) {
      const existingValueIndex = this.data[hashedValue].findIndex((entity: any) => entity[this.keyName] == key); // ~O(1)
      if (existingValueIndex > -1) {
        return this.data[hashedValue][existingValueIndex];
      }
    }
    return null;
    // In total: ~O(1)
  }
}

// module function as hash function:
12839761837462384746 % 10 = 6
// collisions example - both point to the same cell in the table
12839761837462384757 % 10 = 7
128397618374624757 % 10 = 7


function hashByModulo10(num: number) { // the fixed length of the result - 1 chars
  return num % 10;
}

function hashByModulo100(num: number) { // the fixed length of the result - 2 chars
  return num % 100;
}

function hashByCustomModulo(modulo: number): (num: number) => number {
  return (num: number) => {
    return num % modulo;
  }
}

const hashBy7Modulo = hashByCustomModulo(7);
const hashBy1000Modulo = hashByCustomModulo(1000);

const hashTable = new HashTable<number>(hashBy1000Modulo, 'id');

const userData = {
  id: 378594857,
  firstName: 'Adi',
  lastName: 'Dimant',
  email: 'adi@gmail.com',
  phone: '+97258777777',
  city: 'Raanana',
  country: 'Germany',
  zipcode: 69584,
};

hashTable.save(userData.id, userData);

const userValue = hashTable.get(userData.id);
