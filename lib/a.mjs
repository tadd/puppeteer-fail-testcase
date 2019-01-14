class A {
  constructor(x = null) {
    this.x = x ? x : this.constructor.X;
  }
}
A.X = 42;

export default A;
