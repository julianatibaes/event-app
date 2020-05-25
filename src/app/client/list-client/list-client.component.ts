import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Client } from '../../model/client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})

export class ListClientComponent implements OnInit {
  
  clients: Client[];
  client = {} as Client;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAll();
  }

  // Chama o serviço para obtém todos os itens
  getAll() {
    this.clientService.getAll().subscribe((clients: Client[]) => {
      this.clients = clients;
    });
  }

 // deleta um item
 delete(client: Client) {
  this.clientService.delete(client).subscribe(() => {
    this.getAll();
  });
}


  

}
