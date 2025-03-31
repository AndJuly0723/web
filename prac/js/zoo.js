// 동물원 클래스

// 다음과 같이 작동하는 클래스를 만들어 보자


class Zoo {

    constructor() {
    this.animals = []
    console.log('A Zoo has opend!!')
    }

    animalEnters(x) {
        let pos = this.animals.indexOf(x)
        if(pos === -1){
            this.animals.push(x)
            console.log(`${x} is a new member of our Zoo!`)
        }else {
            console.log(`we already have ${x}.`)
        }
    }

    animalLeaves(x){
        let pos = this.animals.indexOf(x)
        if(pos !== -1) {
            let removed = this.animals.splice(pos,1)
        }else {
            console.log('No such animal in the Zoo!')
        }
    }

    showAnimals(){
       console.log(this.animals)
    }
}


// 다음과 같이 테스트 해본다
// 실행 결과는 주석으로 주어진다

myZoo = new Zoo()
// A Zoo has opend!!

myZoo.animalEnters('Giraffe')
// Giraffe is a new memeber of our Zoo!

myZoo.animalEnters('Giraffe') 
// We already have Giraffe.

myZoo.animalEnters('Lion')
// Lion is a new member of our Zoo!

myZoo.animalEnters('Monkey')
// Monkey is a new member of our Zoo!

myZoo.animalEnters('Zebra')
// Zebra is a new member of our Zoo!

myZoo.showAnimals()
// ['Giraffe', 'Lion', 'Monkey', 'Zebra']

myZoo.animalLeaves('Tiger')
// No such animal in the Zoo!

myZoo.animalLeaves('Lion')
// 출력 없음

myZoo.showAnimals()
// ['Giraffe', 'Monkey', 'Zebra']  

myZoo.animalLeaves('Giraffe')
// 출력 없음

myZoo.showAnimals()
// ['Monkey', 'Zebra']



