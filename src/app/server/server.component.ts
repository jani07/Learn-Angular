import { Component } from "@angular/core"

@Component({
  selector: 'app-server',
  templateUrl:'./server.component.html',
  styles:[`
    .online{
      color: white;
    }
  `]
})
export class serverComponent{
  // serverId: number=10;
  // serverStatus: string = 'Offline';
movie: string = 'Iron Man'
money: number = 112340000
status: string = 'Offline';

constructor() {
  this.status = Math.random() > 0.5 ? 'Online' : 'Offline';
}

getMoney(){
  return this.money;
}

getStatus(){
  return this.status;
}

getColor(){
  return this.status === 'Online' ? 'green' : 'red';

}

}
