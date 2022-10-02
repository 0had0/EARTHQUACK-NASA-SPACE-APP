/* eslint-disable */
import {useContext, useMemo} from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3';

import ProgressiveImage from "react-progressive-image";


import moonLocations from '../../constants/moon_landings';
import moonquakeLocations from '../../constants/moonquake_locations';
import {GlobContext} from "../../contexts/glob.context";

import useForceUpdate from "./useForceUpdate";

import placeholderImage from './lunar_surface_small.png'
import {apollo, lunar} from './string';

const colorScale = d3.scaleOrdinal(['white', 'cyan', 'red']);

const colors = (a) => ({
    "dm": `rgba(255, 0, 0, ${a})`,
    "sm": `rgba(0, 120, 0, ${a})`,
    "ai": `rgba(0, 0, 255, ${a})`,
})

const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2', 'Luna 20', 'Luna 21', 'Luna 24', 'LCROSS Probe']); // avoid label collisions

function InteractiveGlob() {
    const {options} = useContext(GlobContext)
    useForceUpdate();


    const filterArray = [options[1].value && 'ai', options[2].value && 'dm', options[3].value && 'sm']

    const moonquakesLocationsFiltered = useMemo(() => moonquakeLocations.filter(
        (loca) => filterArray.includes(loca.channel)
    ) ?? [], [filterArray])

    return (
        <ProgressiveImage
            src={'https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/moon-landing-sites/lunar_surface.jpg'}
            placeholder={placeholderImage}>
            {src => {
                return <Globe
                    bumpImageUrl={"https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/moon-landing-sites/lunar_bumpmap.jpg"}
                    globeImageUrl={src}
                    backgroundColor={'#000'}
                    backgroundImageUrl={require('./img.png')}
                    showGraticules={true}
                    waitForGlobeReady={true}
                    htmlElementsData={options[0].value ? JSON.parse(JSON.stringify(moonLocations)) : []}
                    htmlElement={d => {
                        const el = document.createElement('div');
                        el.innerHTML = `${d.program.toLowerCase() === 'luna' ? lunar : apollo}\n${d.program}`;
                        el.style.color = colorScale(d.agency);
                        el.style.width = `${d.size ?? 30}px`;

                        el.style['pointer-events'] = 'auto';
                        el.style.cursor = 'pointer';
                        el.onclick = () => window.open(d.url, '_blank');
                        el.onpointerover = () => {
                        }
                        return el;
                    }}
                    labelsData={Array.isArray(moonquakesLocationsFiltered) ? JSON.parse(JSON.stringify(moonquakesLocationsFiltered)) : []}
                    labelLat={d => d.lat}
                    labelLng={d => d.lng}
                    labelText="channel"
                    labelSize={0}
                    labelDotRadius={(d) => d.mag === -1 ? 2 : (d.mag / 3.2) * 4}
                    labelDotOrientation={d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom'}
                    labelColor={d => colors(d.dep / 1420)[d.channel]}
                    labelLabel={d => `
        <div><b>${d.channel}</b></div>
        <div>${d.lat} - ${d.lng} - depth: ${d.dep === -1 ? 'NaN' : d.dep} - Magnetude: ${d.dep === -1 ? 'NaN' : d.dep}</div>
      `}
                />
            }}
        </ProgressiveImage>
    );
}

export default InteractiveGlob;
