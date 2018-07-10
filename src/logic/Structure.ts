import {Cost} from "./Cost"
import {Benefit, Value, Material, Count, Structure, Trigger}   from './Benefit'

enum Building {
  Mine = 0,
  Station = 1,
  Lab = 2,
  Academy = 3,
  Institute = 4,
}
enum BuildingStatus{
  Built = 0,
  Unbuilt = 1
}

class StructureType {
  public value : number
  public cost : Cost
  public type : Building
  public owner : number  // change type from player to numer for playerID
  public status : BuildingStatus
  public benefit : Benefit
  public location : Location | null = null
  
  constructor(type: Building, price: Cost, power: number, benefit: Benefit){
    this.value = power
    this.status = BuildingStatus.Unbuilt
    this.type = type
    this.cost = price
    this.benefit = benefit
  }

  /**
   * when get or loose the techtile of changing value, this function will work
   * @param value 
   */
  public changePowerValue(value: number){
    this.value = value;
  }

}


export {StructureType, Building}
