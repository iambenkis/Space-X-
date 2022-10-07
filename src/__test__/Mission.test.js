import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/Rockets/configurationStore';
import Mission from '../pages/Mission/Mission';

describe('Test Mission component ', () => {
  test('Does Mission match the snapshot ?', () => {
    const missionTree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Mission />
        </Provider>
      </BrowserRouter>,
    );
    expect(missionTree).toMatchSnapshot();
  });

  test('Does Mission match the snapshot ?', () => {
    const missionTree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Mission />
        </Provider>
      </BrowserRouter>,
    );
    expect(missionTree).toMatchSnapshot();
  });
});
