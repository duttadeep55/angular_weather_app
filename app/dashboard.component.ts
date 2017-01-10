import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'wea-dashboard',
  templateUrl: 'app/dashboard.component.html'
})
export class WeaComponent  {
  private date: Date;
  private data: Object;
  private city: String;
  private flag = false;

  sunImage = '/app/images/sun.png';
  rainImage = '/app/images/rain.png';
  daynightImage = '/app/images/daynight.png';
  
  constructor(private http: Http) {
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  }

  ngOnInit(){
    this.makeRequest();
  }

  makeRequest(): void
  {
    this.http.request('http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=7&appid=b1b15e88fa797225412429c1c50c122a1&apikey=26416597cea257592c8f3895f4cb53ed')
    .subscribe((res: Response) => {
      this.data = res.json().list; 
      this.city = res.json().city.name;  
      console.log(this.data)
    });
  }

  daynight(){
    if(!this.flag)
    {
      this.flag = true;
      console.log("hello");
    }
    else{
      this.flag = false;
       console.log("bye");
    }
  }

}
