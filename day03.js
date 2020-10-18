// //object
// let myobject = new Object();
// myObject.name = 'th';
// myObject.age = 20;

// console.log(myObject);

// //通过对象变量创建对象
// const oStudent ={};
// oStudent.name = 'th';
// oStudent.age =20;
// console.oStudent1 = {
//     name:'th',
//     age:20
// };
// console.log(oStudent.name);
// console.log(typeof oStudent); //object

// //数组 array
// const a1 = new Array();
// const a2 = new [];
// console.log(typeof a2); //object


a2[0] = 'a';
a2[1] = 2;
a2[2] = true;
 
console.log(a2);
const a3 = [1,2,3,'abc',true,undefined,null,a2,Object]

const avgerages = ['美国','钢铁','雷神','绿巨人'];
avgerages.pop();
console.log(avgerages)
avgerages.push('th');
console.log(avgerages)

const avgerages = ['美国','钢铁','雷神','绿巨人'];
console.log(avgerages.shift());

const avgerages = ['美国','钢铁','雷神','绿巨人'];
const av3 = avgerages.slice(1, 3)
console.log(avgerages)
console.log(av3)

const avgerages = ['美国','钢铁','雷神','绿巨人'];
const av4 = avgerages.splice(1, 2, 'th', 'asd', 'abc');
console.log(av4)
console.log(avgerages)

const number1 = [2,1,31,22,41,];
const a = number1.sort();
console.log(number1);
console.log(a);









avgerages.shift()

let a = number[0];
let b = number[1];
let c = number[2];
let d = number[3];
console.log('a=$(a), b=$(b), c=$(c)')

const [a,b,c,d] = [1,2,3,4]
console.log('a=${a}, b=${b}, c=${c}')

const [a,b] = ['th',true,1,2,2,1];
console.log('a=${a},c=${c}')


//多维数组

const ma = [[1,2],[3,4]];
console.log(ma);
console.log(ma[0][1]);
console.log(ma[3][4]);

//set
const oSet = new Set();
oSet.add(1)
oSet.add(2)
oSet.add(3).add(4).add(5)
oSet.add(5)
console.log(oSet);

const listl = new Set([1,2,3,4,5])
console.log(listl);

const list2 = new Set('hello');
console.log(list2)

const list4 = new Set().add('the').add('th').add('t').add('h')
console.log(list4.size)

list4.size = 2
console.log(list4)

const list5 = new Set().add('the').add('th').add('t').add('h')
a = list5.has('th')
console.log(a)

const list5 = new Set().add('the').add('th').add('t').add('h')
const b = list5.has('th')
console.log(b)
console.log(list5)

list5.clear();
console.log(list5);

const list6 = new Set().add('the').add('th').add('t').add('h')
const a = Array.from(list6)
console.log(a)

const list6 = new Set().add('the').add('th').add('t').add('h')
const a = [...list6];
console.log(a);

const oArray1 = [1,2,3,4,5,5,4,4,5]
const oSet1 = new Set(oArray1);
console.log(oSet1);
const oArray2 = [...oSet1];
console.log(oArray2);

//weakset
const student = {
    name:'th',
    age:20
};
const weak = new weakSet();
//weak.Set(1);
weak.add(student);


map//映射
const oMap =new Map();
oMap.set(1, 'I');
oMap.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(oMap)
console.log(oMap.size)
const a = oMap.get(5)
console.log(a)
console.log
oMap.clear()
console.log(oMap)

const oMap =new Map().set(1, 'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
const oArray = [...oMap];
console.log(oArray);



const oMap = new Map().set(1, "I").set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
const oArray = Array.from(oMap)
console.log(oArray);

const student = {
    name: 'th',
    age: 21
};

student.name = 'th'
student.age = 20
student = null;