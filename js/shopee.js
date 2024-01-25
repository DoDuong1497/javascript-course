/*
export no default
- mình có thể export nhiều hàm, biến, class, object, array, function, ...
- khi ta import thì phải dat ten trùng với tên export
- bắt buộc import phải có dấu ngoặc nhọn { ... }
*/

export const BRANCH = 'tphcm';

export function getPrice(price) {
  return `get price ${price}`
}

// export from delarations
function sayHi(name = 'John Doe') {
  return `Hi ${name}`
}

function sayBye(name) {
  return `Bye ${name}`
}

export { sayHi, sayBye }

// export 'as'
function getAge(age = 18) {
  return `Get Age ${age}`
}
export { getAge as getAgeUser }

// export "default" name
function getShip() {
  return 'Get Ship'
}
export { getShip as default }
