import {Balance} from "./balance.model";
import {Pair} from "./pair.model";

export class User {

  constructor(public address: string, private status: string, private pairs: Pair[], private balances: Map<string, Balance>) {
  }
}
