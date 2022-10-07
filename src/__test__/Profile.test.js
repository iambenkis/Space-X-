import React from "react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import store from "../redux/Rockets/configurationStore";
import Profile from '../pages/Profile/Profile'

describe("Test Profile component", () => {
    test("Does Profile renderer ? ", () => {
        const profileReserved = renderer.create(
            <BrowserRouter>
                <Provider store={store}>
                    <Profile />
                </Provider>
            </BrowserRouter>
        ).toJSON();
        expect(profileReserved).toMatchSnapshot();
    })
})