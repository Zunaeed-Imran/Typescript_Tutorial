// enum - store const; duplicate value is not allowed here.

// enum type: numeric, string, hetergenous.

//### numeric enum.

enum RequestType {
  readData = 1,
  savedata = 3,
  deleteData,
}
// console.log(RequestType);
// console.log(RequestType.readData);
console.log(RequestType['readData']);

