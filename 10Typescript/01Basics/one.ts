let x: number | string | boolean = 20;
let firstName: string | null = null;

x = 30;
x = true;
x = "Hello";

firstName = "Raman";
// firstName = true

function sumWithReturnTypeNumber(x: number, y: number): number {
  return x + y;
}

function sumWithReturnTypeVoid(x: number, y: number): void {
  console.log(`Sum is: ${x + y}`);
}

const result: number = sumWithReturnTypeNumber(1, 3);
sumWithReturnTypeVoid(1, 3);

const createUser = (user: {
  firstname: string;
  lastname?: string;
  age: number;
}): void => {
  const trimmedFirstname: string = user.firstname.trim();
  const trimmedLastname: string = user.lastname?.trim() || "";
};

createUser({
  firstname: "Naman",
  lastname: "kumar",
  age: 20,
});

// TODO: Interface
interface User {
  firstname: string;
  lastname?: string;
  age: number;
  email: string;
  city: string;
  profileImageUrl?: string;
}

const updateUser = (user: User): void => {
  console.table([
    user.firstname,
    user.lastname,
    user.age,
    user.email,
    user.city,
    user.profileImageUrl,
  ]);
};

const payload: User = {
  firstname: "Namam",
  lastname: "Kumar",
  age: 12,
  email: "a@n.com",
  city: "GKP",
  profileImageUrl: "https://abc.jpg",
};

updateUser(payload);
