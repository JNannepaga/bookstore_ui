import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// setupTests.js

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: query === false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // You can also use addEventListener instead of addListener
    removeListener: jest.fn(), // You can also use removeEventListener instead of removeListener
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
