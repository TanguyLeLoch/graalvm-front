import {Balance} from "./balance.model";
import {Pair} from "./pair.model";

export class User {

  constructor(public address: string, public status: string, public pairs: Pair[], public balances: Map<string, Balance>) {
  }
}
