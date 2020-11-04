import React, { useRef, useEffect, useContext } from 'react';
import './Wheel.css';
import * as d3 from 'd3';
import { MainContext } from '../context/MainContext';
import circle from '../assets/circle.png';

const Wheel = () => {
    const mainContext = useContext(MainContext);
    const svgRef = useRef(null);

    useEffect(() => {
        const colors = ['#ffffff', '#ce372b', '#f9f500', '#80c71f', '#2bbae4'];
        const width = 500;
        const height = 500;
        const radius = Math.min(width, height) / 2;
        const slices = 5;

        const canvas = d3.select(svgRef.current)
            .data([null])
            .join('svg')
                .classed('canvas', true)
                .attr('width', width)
                .attr('height', height);

        const group = canvas.selectAll('g')
            .data([null])
            .join('g')
                .classed('group', true)
                .attr('transform', `translate(${width / 2},${height/2})`);

        const wheel = group.selectAll('g')
            .data([null])
            .join('g')
                .classed('wheel', true);

        const pie = d3.pie()
            .sort(null)
            .value(d => 1);

        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);
        
        const arcs = wheel.selectAll('g.slice')
            .data(pie(new Array(slices)), d => d)
            .join('g')
                .classed('slice', true);

        arcs.append('path')
            .attr('fill', (d, i) => colors[i % colors.length])
            .attr('d', d => arc(d));

        arcs.append('text')
            .attr('transform', d => {
                d.innerRadius = 0;
                d.outerRadius = radius;
                d.angle = (d.startAngle + d.endAngle) / 2;
                    return `rotate(${(d.angle * 180 / Math.PI - 90)})translate(${d.outerRadius - 24}, 6)`;
            })
            .attr('text-anchor', 'end')
            .text((d, i) => {
                if(!mainContext.state.data[i]) {
                    return '';
                } else {
                    return mainContext.state.data[i].name;
                }
            });

        canvas.append('g')
            .attr('class', 'arrow')
            .attr('transform', `translate(${width / 2 - 15}, 0)`)
        .append('path')
            .attr('d', `M0 0 H30 L 15 ${Math.sqrt(3) / 2 * 30}Z`)
            .style('fill', '#212429');
    }, [mainContext.state.data]);

    return(
        <div className="canvasWrapper">
            <svg ref={svgRef}></svg>
            <img
                className={`canvas__circle ${mainContext.state.hasRotate ? 'rotate' : ''}`}
                src={circle}
                alt="circle"
            ></img>
        </div>
    );
}

export default Wheel;
