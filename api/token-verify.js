const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJhY2NvdW50aW5nIiwiaWF0IjoxNzI2ODkyMDg1fQ.99R4D4mo28ueQR8WMjR5TP-iVH_jyR27HX-QeTvLFO4';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
