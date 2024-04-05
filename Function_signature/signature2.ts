// function signature.
let userInfo1: () => void;
let userInfo2: (name: string) => void;

// function body
userInfo1 = () => {
  console.log('simple function signature');
};

userInfo2 = (name: string) => {
  console.log(`${name} is 20 year's old`);
};

userInfo1();
userInfo2("Imran");