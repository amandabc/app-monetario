import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuario } from './lista-usuarios.interfaces';

@Injectable({
  providedIn: 'root'
})

export class ListaUsuariosService {

  constructor(private http: HttpClient) { }


  // tslint:disable-next-line: typedef
  getListaUsuarios(){  
    
    return this.http.get<Usuario[]>('http://localhost:3000/usuario');
    //[
      // {
      //   nome: 'Thiago',
      //   email: 'thiago@email.com',
      //   senha: '123456',
      //   cpf: '12312312354',
      //   id: 1
      //   }

      
   // ];
   
  }//fim getLista


  criarContato(usuario: Usuario){
    return this.http.post<Usuario[]>('http://localhost:3000/usuario', usuario);
  }

  deleteUsuario(id: string){  
    return this.http.delete<Usuario[]>('http://localhost:3000/usuario/'+id);
  }
}
