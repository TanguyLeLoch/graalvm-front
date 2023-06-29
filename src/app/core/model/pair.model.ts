import {Token} from "./token.model";

export class Pair {


  constructor(public pairAddress: string, public token0: Token, public token1: Token) {
  }
}
