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
      //pinto mi respuesta por consola para probar que si estoy consumiendo el api
      console.log("respuesta: ", respuesta);
      //creo una condicional donde traigo el nombre del objeto que almacena el arreglo en este caso se llama drinks
      if(respuesta.drinks){
        //si la respuesta que pinta esta en el objeto drinks le digo que se almacene esa respuesta en la constante todosLosDatos
        this.todosLosDatos = respuesta.drinks/*.slice(5)esto lo hago si quiero trabajar solo con una cantidad de elementos y no todos los que traiga el api*/;
        console.log('funciona bien');
      }else{
        //de lo contrario que me muestre un error por consola
        console.log('No se encontraron los datos del objeto')
      }
      
    })
  }
  // para pasar de componentes uso un metodo para que cuando la aplicacion se active 

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.obtenerTodosLosDatos();
    
  }
}

