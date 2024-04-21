const calculateSum = (a: number, b: number): number => {
  return a + b;
};

type User = {
  age: number;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  address: string;
  gender: 'M' | 'F';
  registerDate: number; // timestamp
};

const getUserAge = (user: User): number => {
  user.gender = 'F';
  return user.age;
}

const calculateAverageAge = (users: Array<User>): number => {
  let sum = 0;
  for (let i =0; i < users.length; i++) {
    sum += users[i].age;
  }

  return sum / users.length;
}

const calculateAverageAgeV2 = (users: Array<User>): number => {
  return (users.reduce((acc, user) => {
    return acc + user.age;
  }, 0)) / users.length;
}

const getUsersData = async (): Promise<User[]> => {
  const response = await fetch("server.com/api/users");
  const data: User[] = await response.json();
  calculateAverageAge(data); // no guarentee that the server really brings us array of User
  return data;
};

//@ts-ignore - this line will fail, since we don't pass array of User
calculateAverageAge([1, "d"]);

function f1() {

}