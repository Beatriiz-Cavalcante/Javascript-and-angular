import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador:Router
    ) { 
    this.activeRoute.params.subscribe(
      resultado => console.log(resultado)
    )

    this.activeRoute.queryParams.subscribe(
      resultado2 => console.log(resultado2)
    )
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.navegador.navigate(['/'])
    }, 5000)
  }

}
