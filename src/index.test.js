import React from "react";
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Game from "./index";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Game />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Game />, div);
    ReactDOM.unmountComponentAtNode(div);
  });