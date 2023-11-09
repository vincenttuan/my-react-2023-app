// Optional Chaining（ES2020）：允許開發者安全地訪問深層嵌套物件屬性。
// user 是一個深層的嵌套物件
const user = {
    profile: {
        name: 'John',
        details: {
            age: 20,
            address: {
                city: 'Taipei',
                street: 'Hello st'
            }
        }
    }
}

// 若我們不確定 address 物件是否存在, 並想要安全的存取 street 屬性
const street = user.profile.details.address?.street;
console.log(street)

// user 是否有 car 類別, 若有取得 no (車牌號碼)
var carNo = user.profile.details.car?.no;
console.log(carNo); // 得到 undefined，因為使用了「?」Optional Chaining

var city = user?.profile?.details?.address?.city;
console.log(city);

// 沒有使用 Optional Chaining
var carNo = user.profile.details.car.no;
console.log(carNo); // 因為沒有使用 Optional Chaining，所以程式會拋出例外

