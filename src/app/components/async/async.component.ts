import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, Subscriber, UnsubscriptionError } from 'rxjs';
import { filter } from 'rxjs/operators'


@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit, OnDestroy {
  
  //private mySubscription:any|Subscription;

  constructor() { }

  ngOnInit(): void {
    
  }

  /* Promises */
 promise = new Promise(resolve => {
    setTimeout(()=>{
        resolve('promise is working');
    }, 3000)
  });

  // promise.then(result =>{
  //   console.warn(' promise is done');
    
  // })

 observable = new Observable(subscribe =>{
   let count =0;
    setInterval(()=>{
      count = count+1;
      subscribe.next(count);
    }, 3000)
  });

  mySubscription:any|Subscription=this.observable.subscribe(result => console.log(result));
  // mySubscription:any=this.observable.pipe(
  //   filter(d => d === 'observable is working')
  // ).
  // subscribe(result=>
  //   console.warn(result) );

  ngOnDestroy() { console.log("Unsubscriptio");
    this.mySubscription.unsubscribe();
  }

}
