// External Lib
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import simpleRestProvider from 'ra-data-simple-rest';

// Config
import {authProvider} from "./Navigation/authProvider";
import frenchMsg from './I18n/fr';
import {theme} from "./Theme/theme";

//Ressources
import { UsersList } from './Views/Users';

//Components
import {Dashboard} from "./Views/Dashboard";
import {Layout} from "./Components/Layout";

const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'en') {
        return import('./I18n/en').then(messages => messages.default);
    }

    // Always fallback in french
    return frenchMsg;
}, 'fr');

const App = () => (
    <Admin
        title={process.env.REACT_APP_TITLE}
        dataProvider={simpleRestProvider('https://jsonplaceholder.typicode.com/')}
        authProvider={authProvider}
        dashboard={Dashboard}
        //loginPage={Login}
        layout={Layout}
        i18nProvider={i18nProvider}
        disableTelemetry
        theme={theme}
    >
        <Resource name="users" list={UsersList} />
    </Admin>
);

export default App;