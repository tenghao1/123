// 第一题

let tip
const tiparray = []
const zongjia = []
const tipCalculator = function (a) {
  if (a < 50) {
    tip = a * 0.2
  }
  else if (50 < a < 200) { tip = a * 0.15 }
  else { tip = a * 0.1 }
  return tip
}
tiparray[0] = tipCalculator(89)
tiparray[1] = tipCalculator(98)
tiparray[2] = tipCalculator(216)
console.log(tiparray)
zongjia[0] = 89 + tipCalculator(89)
zongjia[1] = 98 + tipCalculator(98)
zongjia[2] = 216 + tipCalculator(216)
console.log(zongjia)

// 第二题

function mean2(num) {

  const sum = num.reduce((sum, curVal) => sum + curVal) / num.length;

  return sum;

}

let a = mean2([1, 2, 3, 4, 5])

console.log(a)



// 第三题

const arr1 = [1, 2, 3, 4, 5, 6]

const arr2 = arr1.map((sum) => {

  if (sum % 2 == 0) {

    return sum

  }

})

const abc = [];

arr2.forEach(

  item => {

    if (item) {

      abc.push(item)

    }

  }

)

function mean3(num) {

  const sum = num.reduce((sum, curVal) => sum + curVal) / num.length;

  return sum;

}

let a = mean3(abc)

console.log(a)