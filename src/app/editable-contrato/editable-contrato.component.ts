import { Component, OnInit, Input } from '@angular/core';
import { Contrato } from '../contrato';
import { ContratoService } from '../contrato.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-editable-contrato]',
  templateUrl: './editable-contrato.component.html',
  styleUrls: ['./editable-contrato.component.css']
})
export class EditableContratoComponent implements OnInit {

  @Input() contrato: Contrato;
  constructor(private contratoService: ContratoService) { }

  editing = false;
  deleting = false;
  onEdit(): void {
      this.editing = ! this.editing;
  }




  onDelete(): void {
      this.deleting = ! this.deleting;

      this.contratoService.deleteContrato(this.contrato).subscribe();
  }





  ngOnInit() {
  }

}
