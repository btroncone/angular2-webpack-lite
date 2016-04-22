import {bootstrap} from 'angular2/platform/browser';
import {DIRECTIVES, PIPES, PROVIDERS, ENV_PROVIDERS, PLUGINS} from './platform/browser';
import {App, APP_PROVIDERS} from './app';

bootstrap(App, [
	...PROVIDERS,
	...ENV_PROVIDERS,
	...DIRECTIVES,
	...PIPES,
	...APP_PROVIDERS,
  ...PLUGINS
]).catch(console.error)
