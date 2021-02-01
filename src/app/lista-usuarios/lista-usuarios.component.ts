import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Usuario } from './lista-usuarios.interfaces';
import { ListaUsuariosService } from './lista-usuarios.service';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
  
})
export class ListaUsuariosComponent implements OnInit {


  //usuarios: any;
  usuarios: Usuario[];  
  


  contatoForm: FormGroup;
  
  constructor(
    private listaUsuariosService: ListaUsuariosService) { }

  ngOnInit(){

    //this.usuarios = this.listaUsuariosService.getListaUsuarios();
    this.listaUsuariosService.getListaUsuarios()
    .subscribe( response =>{
         this.usuarios = response;
       });

       this.contatoForm = new FormGroup({
         nome: new FormControl(),
         email: new FormControl(),
         cpf: new FormControl(),
         senha: new FormControl(),

       });
  }

  criarContato(){
    this.listaUsuariosService.criarContato(this.contatoForm.value).subscribe();
    console.log("criou")
  }

  deletarContato(id){
    this.listaUsuariosService.deleteUsuario(id).subscribe();
    
  }

}

//