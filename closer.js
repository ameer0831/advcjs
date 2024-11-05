function outer() {
    let counter = 0
    function inner() {
    counter++
    console. log(counter)
    }
    return inner
    }
    const fn = outer()
    fn()
    fno
    function sum(a, b, c) {
        return a + b + c
        }
        console. log(sum (2, 3, 5))
        // sum (2,3,5) sum (2) (3) (5)
        function curry(fn) {
        return function(a) {
        return function (b) {
        return function (c) {
        }
    }
}   
        }

        const curriedSum = curry (sum)
console. log(curriedSum (2)(3)(5))
const add2 = curriedSum (2)
const add = add2(3)
const add5 = add3050
console. log (add5)