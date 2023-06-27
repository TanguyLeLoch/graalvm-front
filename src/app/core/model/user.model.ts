import {Balance} from "./balance.model";
import {Pair} from "./pair.model";

export class User {

  constructor(private address: String, private status: String, private pairs: Pair[], private balances: Map<String, Balance>) {
  }
}
