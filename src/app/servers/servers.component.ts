import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverCreationStatus = 'No server was created';
  addServer = false;
  movieName = '';
  addMovie = false;
  constructor() {
  //  //Time out for Diasble button
  //   setTimeout(() => {
  //     this.addServer = true;
  //   }, 2000)

  }

  ngOnInit() {

  }

  onCreateServer() {
    this.addMovie=true;
    this.serverCreationStatus = 'New Movie Name is ' +this.movieName;
  }

  onUpdateMovie(event: Event){
    this.movieName=(<HTMLInputElement>event.target).value;
  }


}
