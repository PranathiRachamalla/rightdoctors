import { Component, OnInit } from '@angular/core';

export interface PersonDetails {
  id:number;
  name: string;
  age: number;
  gender: string;
  mobile_number: number;
}
const PERSON_DATA: PersonDetails[] = [
  {id: 1, name: 'Pranathi', age: 21, gender: 'female' , mobile_number:9887353849 },
  {id: 2, name: 'Ramesh', age: 57, gender: 'male' , mobile_number:9887357849 },
  {id: 3, name: 'Phani', age: 22, gender: 'male' , mobile_number:9887367849 },
 
];
@Component({
  selector: 'app-display-people',
  templateUrl: './display-people.component.html',
  styleUrls: ['./display-people.component.css']
})
export class DisplayPeopleComponent  {

  displayedColumns: string[] = ['id', 'name', 'age', 'gender' , 'mobile_number'];
  dataSource = PERSON_DATA;

}
