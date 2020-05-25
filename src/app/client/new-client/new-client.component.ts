import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Client } from '../../model/client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  client = {} as Client;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }


  // defini se um item será criado ou atualizado
    save(form: NgForm) {
      if (this.client.id !== undefined) {
        this.clientService.update(this.client).subscribe(() => {
          this.cleanForm(form);
        });
      } else {
        this.clientService.save(this.client).subscribe(() => {
          this.cleanForm(form);
        });
      }
    }
  
      // limpa o formulario
    cleanForm(form: NgForm) {
      form.resetForm();
      this.client = {} as Client;
    }
}
