import { platformBrowser } from '@angular/platform-browser';
import { ProdConfig } from './blocks/config/prod.config';
import { Projetm1TransfertAppModuleNgFactory } from '../../../../target/aot/src/main/webapp/app/app.module.ngfactory';

ProdConfig();

platformBrowser().bootstrapModuleFactory(Projetm1TransfertAppModuleNgFactory)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
