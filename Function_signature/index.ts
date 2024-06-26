// function signature.
let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => string;

// function body
userInfo1 = () => {
  console.log('simple function signature');
};

userInfo2 = (name: string) => {
  console.log(`${name} is 20 year's old`);
};
userInfo3 = (name: string, age: number) => {
  return(`${name} is ${age} year's old`);
};

userInfo1();
userInfo2('Imran');
console.log(userInfo3('Imran', 20));
