import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from "./App";

describe("Component - App",()=>{
    it('Matches snapshot',()=>{
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    })
});