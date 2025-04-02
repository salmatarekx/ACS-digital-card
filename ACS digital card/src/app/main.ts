import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Correct import
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
