import Globe from 'react-globe.gl';
import * as d3 from 'd3';

import moonLocations from '../../constants/moon_landings'
import useForceUpdate from "./useForceUpdate";
import {useContext} from "react";
import {GlobContext} from "../../contexts/glob.context";

const colorScale = d3.scaleOrdinal(['orangered', 'mediumblue', 'darkgreen', 'yellow']);

const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2', 'Luna 20', 'Luna 21', 'Luna 24', 'LCROSS Probe']); // avoid label collisions

function InteractiveGlob() {
    const {options} = useContext(GlobContext)
  useForceUpdate();
    return (
        <Globe
            bumpImageUrl={`${process.env.PUBLIC_URL}/lunar_bumpmap.png`}
            globeImageUrl={`${process.env.PUBLIC_URL}/lunar_surface.png`}
            showGraticules={true}
            waitForGlobeReady={false}
            labelsData={options[0].value ? JSON.parse(JSON.stringify(moonLocations)): []}
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
    );
}

export default InteractiveGlob;
