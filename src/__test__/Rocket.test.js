import React from "react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import store from "../redux/Rockets/configurationStore";
import Rocket from '../pages/Rocket/Rocket'

describe("Test Rocket component ", () => {
    test('Does Rockets match the snapshot ?', () => {
        const rocket = renderer.create(
             <BrowserRouter>
                 <Provider store={store}>
                    <Rocket />
                 </Provider>
             </BrowserRouter>
         )
         expect(rocket).toMatchSnapshot();
     })
})
