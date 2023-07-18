/* eslint-disable @typescript-eslint/no-unused-vars */
export default class Dog {
  private stomach: string[] = []
  eat(food: string) {
    this.stomach.push(food)
  }
}

const X = 1

function dummy() {
  // eslint-disable-next-line no-console
  console.log(1)
}

enum Region {
  SG = 'sg',
  MY = 'my',
  ID = 'id',
  TH = 'th',
}

enum COUNTRY {
  SG = 'sg',
  MY = 'my',
  ID = 'id',
  TH = 'th',
}
