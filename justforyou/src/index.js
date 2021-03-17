import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as dayjs  from "dayjs";
import 'dayjs/locale/ru';
import {Provider} from "react-redux";
import Store from "./redux/store";
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
dayjs.locale('ru');

ReactDOM.render(
    <BrowserRouter>
    <Provider store={Store}>
    <App />
    </Provider>
    </BrowserRouter>,
document.getElementById('root')
);

