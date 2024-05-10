import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
//importo este providel para optener el api de html
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  //en los providers lo llamo despues de routes pongo ,provideHttpClient() para traer el metodo
  providers: [provideRouter(routes), provideHttpClient()]
};
