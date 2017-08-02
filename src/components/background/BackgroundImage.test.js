import React from 'react';
import { shallow } from 'enzyme';
import BackgroundImage from './BackgroundImage';

describe('BackgroundImage Component: ', function () {

    let component;

    beforeEach(() => {
        component = shallow(<BackgroundImage />);
    });

    it('should instantiate the BackgroundImage Component', function () {
        expect(component).toHaveLength(1);
        const divs = component.find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

    it('should have the first image', function() {
        const div = component.find("div").first();
        expect(div.props().style.backgroundImage).toBe('url(Fire-in-the-sky.jpg)');
    })

});

