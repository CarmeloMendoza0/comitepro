const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$Fg0CQokg/1XefXyQHa.cYuxak79vL1oddaVv7YAOv2VAIezh3HPbu';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
