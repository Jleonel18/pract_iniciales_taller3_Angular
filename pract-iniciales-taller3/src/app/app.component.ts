import { Usuario } from './models/usuario.model';
import { UsuarioService } from './services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuarioService]
})
export class AppComponent implements OnInit{

  public usuarioModel: any
  public usuarioNuevo: Usuario;
  public usuarioEditado: Usuario
  public idEncontrada: any

  constructor(private _usuarioService: UsuarioService){
    this.usuarioNuevo = new Usuario("","","")
    this.usuarioEditado = new Usuario("","","")
  }

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios(){
    this._usuarioService.obtenerUsuarios().subscribe(
      response =>{

        this.usuarioModel = response
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

  asignarUsuario(id: String,nombre: string, apellido: string, edad: string){
    this.idEncontrada = id;
    this.usuarioEditado.nombre = nombre;
    this.usuarioEditado.apellido = apellido;
    this.usuarioEditado.edad = edad;
  }

  registrar(){
    this._usuarioService.registro(this.usuarioNuevo).subscribe(
      response=>{
        console.log(response)
        this.obtenerUsuarios()
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

  eliminar(id: String){
    this._usuarioService.eliminarUsuario(id).subscribe(
      response=>{
        console.log(response)
        this.obtenerUsuarios()
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

  editar(id:String){
    this._usuarioService.editarUsuario(id,this.usuarioEditado).subscribe(
      response =>{
        console.log(response)
        this.obtenerUsuarios()
      },
      error=>{
        console.log(error)
      }
    )
  }

}
