// in this example we practice custom function by using type.

type RequestType = 'GET' | 'POST';
let getRequest: RequestType;
getRequest = 'GET';

function requestHandler(reqType: RequestType) {
  console.log(reqType);
}

requestHandler('POST');
