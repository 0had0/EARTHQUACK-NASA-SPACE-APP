/* eslint-disable */
import {useContext} from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3';

import ProgressiveImage from "react-progressive-image";


import moonLocations from '../../constants/moon_landings'
import {GlobContext} from "../../contexts/glob.context";

import useForceUpdate from "./useForceUpdate";

import placeholderImage from './lunar_surface_small.png'
import {apollo, lunar} from './string';

const colorScale = d3.scaleOrdinal(['orangered', 'mediumblue', 'darkgreen', 'yellow']);

const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2', 'Luna 20', 'Luna 21', 'Luna 24', 'LCROSS Probe']); // avoid label collisions

function InteractiveGlob() {
    const {options} = useContext(GlobContext)
    useForceUpdate();

    return (
        <ProgressiveImage
            src={'https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/moon-landing-sites/lunar_surface.jpg'}
            placeholder={placeholderImage}>
            {src => {
                return <Globe
                    bumpImageUrl={"https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/moon-landing-sites/lunar_bumpmap.jpg"}
                    globeImageUrl={src}
                    backgroundColor={'#000'}
                    showGraticules={true}
                    waitForGlobeReady={true}
                    htmlElementsData={options[0].value ? JSON.parse(JSON.stringify(moonLocations)) : []}
                    htmlElement={d => {
                        const el = document.createElement('div');
                        el.innerHTML = `${d.program.toLowerCase() === 'luna' ? lunar : apollo} ${d.label}`;
                        el.style.color = colorScale(d.agency);
                        el.style.width = `${d.size ?? 30}px`;

                        el.style['pointer-events'] = 'auto';
                        el.style.cursor = 'pointer';
                        el.onclick = () => window.open(d.url, '_blank');
                        return el;
                    }}
                />
            }}
        </ProgressiveImage>
    );
}

export default InteractiveGlob;
