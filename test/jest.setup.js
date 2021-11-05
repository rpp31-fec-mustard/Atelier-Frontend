import 'regenerator-runtime/runtime';
import { configure } from 'enzyme';
import enableHooks from 'jest-react-hooks-shallow';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// pass an instance of jest to `enableHooks()`
enableHooks(jest, { dontMockByDefault: true });
configure({ adapter: new Adapter() });