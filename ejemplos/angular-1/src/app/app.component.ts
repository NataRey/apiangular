import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//traigo el servicio aqui
import { DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//dentro de la clase de app component que esta vacio me voy a crear el componente 
export class AppComponent {
  dataService = inject(DataService);
  //aqui creo un atributo en donde voy a alamcenar los datos por eso lo dejo por ahora como vacio 
  todosLosDatos: any [] = [];
  //ahora creo un metodo para utilizar el servicio 
  obtenerTodosLosDatos(){
    //llamo al servcio y le digo que me traiga los datos que en este caso enmi data.services.ts se llama al metodo obtenerdatos luego le digo que se suscriba con el metodo subscribe()y le paso una funcion flecha para que se ejecute 
    this.dataService.obtenerDatos().subscribe((respuesta: any)=>{
      console.log("respuesta: ", respuesta);
    })
  }
  // para pasar de componentes uso un metodo para que cuando la aplicacion se active 

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.obtenerTodosLosDatos();
    
  }
}

