import { Component, Input } from "@angular/core";

@Component ({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class ButtonComponent {
    buttonText: string = 'acessar';
    buttonTexts: string[] = ['indisponível','Disponível'];
    @Input() label: string='';

    getAlert() {
        alert("Clicou porque hein?")
    }

    getAlert2() {
        alert("Ai, cosquinha")
    }
}