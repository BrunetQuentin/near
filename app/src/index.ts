import { registerRootComponent } from 'expo';

import App from './App/App';
import initI18n from './i18n';

initI18n();

export default registerRootComponent(App);

