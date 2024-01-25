/* export default 
- Trong 1 file chỉ có 1 hàm, biến, class, object, array, function, ... được export
- Khi import thì không cần dấu ngoặc nhọn { ... }
- Khi import thì có thể đặt tên bất kỳ
- phản kèm tên export default .....
*/


export function getPrice(price) {
  return `get price  facebook ${price}`
}

export default function getFacebook() {
  return 'get facebook'
}

export function getMessage() {
  return 'get facebook message'
}