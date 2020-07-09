import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import HomePage from '../../components/homepage';
import axios from 'axios';


jest.mock("axios");

configure({ adapter: new Adapter() });



describe('<HomePage/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HomePage />);
    });

    describe("after state updated", () => {
 
    })
})