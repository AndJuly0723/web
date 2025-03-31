// 계산기 클래스

// 다음과 같이 작동하는 계산기 클래스를 만들어 보자
class Calculator{
    constructor(a,b){
        this.a = a
        this.b = b
    }

    sum() {return (this.a + this.b)}
    subtract() {return (this.a - this.b)}
    product() {return (this.a * this.b)}
    divide() {return (this.a / this.b)}
}

// 다음과 같이 테스트 해본다
// 실행 결과는 주석으로 주어진다

let calc1 = new Calculator(5,3)
let calc2 = new Calculator(10,2)

console.log(calc1.sum())
console.log(calc1.subtract())
console.log(calc1.product())
console.log(calc1.divide())
console.log('\n')
console.log(calc2.sum())
console.log(calc2.subtract())
console.log(calc2.product())
console.log(calc2.divide())
