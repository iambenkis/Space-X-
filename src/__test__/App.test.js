import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/Rockets/configurationStore";
import TestRenderer from 'react-test-renderer';
import App from "../App";

test('Test render correctly', () => {
    render (
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    )
})

test('Does app match the snapshot ?', () => {
   const app = TestRenderer.create(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    )
    expect(app).toMatchSnapshot();
})