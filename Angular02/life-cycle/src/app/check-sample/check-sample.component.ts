import { Component,
  OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy 
  } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
		console.log('ngDoCheck');
	}

  // checked -> content -> view

	// quando o conteúdo é iniciado
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}

	// depois da inicialização da view
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
	}

	//após alguma alteração, verifica o conteúdo
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
	}

	//após alguma alteração, verifica a view
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}

  ngOnDestroy(): void {
		console.log('Valeu Todos os momentos que a gente viveu.')
	}

}
