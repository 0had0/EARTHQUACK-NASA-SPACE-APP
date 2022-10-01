/* eslint-disable */
import React, {useContext} from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3';

import moonLocations from '../../constants/moon_landings'
import useForceUpdate from "./useForceUpdate";
import {GlobContext} from "../../contexts/glob.context";
import ProgressiveImage from "react-progressive-image";

import placeholderImage from './lunar_surface_small.png'

const colorScale = d3.scaleOrdinal(['orangered', 'mediumblue', 'darkgreen', 'yellow']);

const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2', 'Luna 20', 'Luna 21', 'Luna 24', 'LCROSS Probe']); // avoid label collisions

function InteractiveGlob() {
    const {options} = useContext(GlobContext)
    useForceUpdate();

    return (
        <ProgressiveImage
            src={'https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/moon-landing-sites/lunar_surface.jpg'} placeholder={placeholderImage}>
            {src => {
                return <Globe
                    bumpImageUrl={"https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/moon-landing-sites/lunar_bumpmap.jpg"}
                    globeImageUrl={src}
                    showGraticules={true}
                    waitForGlobeReady={true}
                    labelsData={options[0].value ? JSON.parse(JSON.stringify(moonLocations)) : []}
                    labelText="label"
                    labelSize={1.7}
                    labelDotRadius={0.4}
                    labelDotOrientation={d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom'}
                    labelColor={d => colorScale(d.agency)}
                    labelLabel={d => {
                        return `<div><b>${d.label}</b></div>
                        <div>${d.agency} - ${d.program} Program</div>
                        <div>Landing on <i>${new Date(d.date).toLocaleDateString()}</i></div>`
                    }}
                    onLabelClick={d => window.open(d.url, '_blank')}
                />
            }}
        </ProgressiveImage>
    );
}

export default InteractiveGlob;
