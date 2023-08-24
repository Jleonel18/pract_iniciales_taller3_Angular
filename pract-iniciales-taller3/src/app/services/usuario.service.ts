import { Injectable } from '@angular/core';
import {GLOBAL} from './global.service'
import { Usuario } from '../models/usuario.model';
import {Observable} from "rxjs"
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url: String;
  public headersVar = new HttpHeaders().set('Content-Type','application/json');

  constructor(public _http:HttpClient ) {
    this.url = GLOBAL.url;
  }

  registro(usuario: Usuario): Observable<any>{

    let params = JSON.stringify(usuario)

    return this._http.post(this.url+'/crearUsuario',params,{headers: this.headersVar})
  }

  obtenerUsuarios(): Observable<any>{
    return this._http.get(this.url+'/obtenerUsuarios',{headers: this.headersVar})
  }

  obtenerUsuarioId(id: String): Observable<any>{
    return this._http.get(this.url+'/obtenerUsuarioId/'+id,{headers: this.headersVar})
  }

  eliminarUsuario(id:String):Observable<any>{
    return this._http.delete(this.url+"/eliminarUsuario/"+id,{headers: this.headersVar})
  }

  editarUsuario(id:String,usuario:Usuario):Observable<any>{
    let params = JSON.stringify(usuario)
    return this._http.put(this.url+'/editarUsuario/'+id,params,{headers: this.headersVar})
  }

}
