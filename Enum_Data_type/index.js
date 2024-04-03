// enum - store const; duplicate value is not allowed here.
// enum type: numeric, string, hetergenous.
//### numeric enum.
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["savedata"] = 3] = "savedata";
    RequestType[RequestType["deleteData"] = 4] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.readData);
console.log(RequestType['readData']);
