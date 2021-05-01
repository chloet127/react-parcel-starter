import React, { useMemo } from "react";
import { useFetch } from "./hooks/useFetch";
import { scaleLinear } from "d3-scale";
import { extent, bin } from "d3-array";
import * as d3 from 'd3';
import './style/style.css'

import Chart2 from './charts/2';
import Chart3 from './charts/3';
import Chart4 from './charts/4';
import VegaChart from './charts/vegaChart';

import data1 from './data/1.json'
import data5 from './data/5.json';
import data6 from './data/6.json';
import data7 from './data/7.json';
import data8 from './data/8.json';


const App = () => {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2020/2020-01-21/spotify_songs.csv"
    );
    
    /* const data_sm = data.slice(0, 100);

    const size = 500;
    const margin = 20;
    const axisTextAlignmentFactor = 3;
    const yScale = scaleLinear()
        .domain(
            extent(data_sm, (d) => {
                return d.track_popularity;
            })
        )
        .range([size, size - 250]);

    _bins = bin().thresholds(30);
    tmaxBins = _bins(
        data.map((d) => {
        return +d.track_popularity;
        })
    );
    
    const histogramLeftPadding = 20;

    const ticks = useMemo(() => {
        const xScale = d3.scaleLinear()
          .domain([0, 100])
          .range([10, 290])
        return xScale.ticks()
          .map(value => ({
            value,
            xOffset: xScale(value)
          }))
    }, []) */   

    
    return (
        <div className='App'>

            <div className='container'>
                <div className='flex-child'>
                    <h1>Exploratory Data Analysis</h1>
                    <p>Assignment 2, INFO 474 Spring 2021</p>

                    <p>{loading && "loading data!"}</p>
                </div>
                <div className='flex-child'>
                    <h3>Number of Songs per Genre Over Time (1957-2020)</h3>
                    <VegaChart data={data7} id={'vis7'}/>
                    <p>
                        The spotify_songs dataset spans across many decades, starting in 1957 and ending in 2020. 
                        The first few decades, until around 2000, are relatively uneventful for most of the genres, 
                        with the exception of rock. Around 2010, more and more songs were released, with EDM spiking 
                        the highest. It’s important to note that the steep drop at 2020 is due to the fact that very 
                        little information for that year was available at the time of this dataset’s release.
                    </p>
                </div>
                <div className='flex-child'>
                    <h3>Number of Songs per Genre Over Time (2010-2020)</h3>
                    <VegaChart data={data8} id={'vis8'}/>
                    <p>
                        Because so much of the growth of music occurred in the most recent decade, it warranted a 
                        closer look. Here, it’s clear to see that EDM, latin, and rap music lead in terms of growth, 
                        with hundreds of song releases over the lowest genre, rock, in 2019.
                    </p>
                </div>
                <div className='flex-child'>
                    <h3>Number of Songs per Genre</h3>
                    <Chart2 />
                    <p>
                        EDM is the leader in number of songs released, with rap coming in second. It’s interesting 
                        to note that although latin had the second highest peak in 2019, it has one of the lowest song 
                        counts, which means that it hasn’t been as consistent across the years as pop or r&b music.
                    </p>
                </div>
                <div className='flex-child'>
                    <h3>Number of Songs per Subgenre</h3>
                    <Chart3 />
                    <p>
                        Splitting up by subgenre can give us deeper insight into each genre; however, the way that the data
                        is currently encoded makes it difficult to understand how the data is categorized. 
                    </p>
                </div>
                <div className='flex-child'>
                    <h3>Number of Songs per Subgenre</h3>
                    <Chart4 />
                    <p>
                        By categorizing each subgenre by color, it’s easier to see the distinction between each 
                        separate subgenre and how they contribute to the total number of songs released in the genre as a 
                        whole. For example, because the latin genre has a relatively low total song count, it can be 
                        surprising to see latin hip hop with one of the highest number of songs released among the other 
                        subgenres, though this can be explained by the low song count of reggaeton.
                    </p>
                </div>
                <div className='flex-child'>
                    <h3>Track Popularity Distribution per Genre</h3>
                    <VegaChart data={data1} id={'vis1'}/>
                    <p>
                        This is a more indepth look into the different genres and how they differ in regards to the
                        distribution of track popularity. By following the median, min, and max for each genre, we can 
                        analyze trends and compare and contrast the genres together. 

                    </p>
                </div>
                <div className='flex-child'>
                    <h3>Track Popularity per Genre Over Time (1957-2020)</h3>
                    <VegaChart data={data6} id={'vis6'}/>
                    <p>
                        Throughout this visualization, the popularity for many of the genres spikes and dips quite 
                        violently, especially before the year 2000. It’s also interesting to note that some of the 
                        genres start later than 1957, which means that some of the popularity data is missing from 
                        the dataset.
                    </p>
                </div>
                <div className='flex-child'>
                    <h3>Track Popularity per Genre Over Time (2010-2020)</h3>
                    <VegaChart data={data5} id={'vis5'}/>
                    <p>
                        Because some of the data is incomplete, and because the wider view of this visualization 
                        is very chaotic, narrowing down the timeframe to focus on the 2010’s will give us a better 
                        view of the more recent popularity trends for each genre. Here, we can see that all of 
                        the genres but rock are beginning to trend higher around 2019.
                    </p>
                </div>
                <div className='flex-child'>
                    <h3>Written Analysis</h3>
                    <p>
                        While performing exploratory data analysis, I wanted to find answers for the following questions:
                        <ul>
                            <li>When were songs released per genre?</li>
                            <li>How many songs have been released per genre?</li>
                            <li>How is a genre described by each of the popularity of its songs?</li>
                            <li>How has popularity changed over time for each genre?</li> 
                        </ul>
                        <p>
                            First, I performed initial sanity checks to identify important variables, investigate patterns, 
                            summarize characteristics, and more. In order to accurately answer the questions above, I had to 
                            ensure that the data was complete and contained all of the necessary variables. These initial 
                            checks included creating a list of all column names, checking for null values, and looking at the 
                            overall shape of the data. Once I had finished these checks, I then moved onto preparing and transforming 
                            the data for visualization.
                        </p>
                        <p>
                            For my visualizations, I primarily used groupby functions in order to organize my data. This way, 
                            it was easier to categorize the data by genre, subgenre, or year, then delve further to investigate trends 
                            and patterns. Because the dataset contained thousands of rows and many columns, I also utilized filtering 
                            and aggregate functions to reduce the number of data points on display, thereby giving my visualizations 
                            more clarity.
                        </p>
                        <p>
                            Overall, I was able to gain valuable insight into this dataset after going through this analysis process. 
                            Much of the increase in volume of music each year has occurred in the last decade, particularly in the last 
                            few years. All genres displayed in the dataset have seen an increase in the number of songs released as time 
                            has moved forward. It seems that recent years have seen a tremendous boom in the music industry as more and 
                            more songs are being released.
                        </p>
                    </p>
                </div>     
            </div>
            
    

            {/* <svg>
                <path
                    d="M 9.5 0.5 H 290.5"
                    stroke="currentColor"
                />
                {ticks.map(({ value, xOffset }) => (
                    <g
                    key={value}
                    transform={`translate(${xOffset}, 0)`}
                    >
                    <line
                        y2="6"
                        stroke="currentColor"
                    />
                    <text
                        key={value}
                        style={{
                        fontSize: "10px",
                        textAnchor: "middle",
                        transform: "translateY(20px)"
                        }}>
                        { value }
                    </text>
                    </g>
                ))}
            </svg>

            <h3> Binning </h3>
            <svg width={size} height={size} style={{ border: "1px solid black" }}>
                {tmaxBins.map((bin, i) => {
                return (
                    <rect
                        x={histogramLeftPadding + i * 11}    
                        y={size - 50 - bin.length}
                        width="10"
                        height={bin.length}
                        
                    />
                );
                })}
            </svg>

            <h3>Barcode plot</h3>
            <svg 
                width = {size} 
                height = {size} 
                style={{ border: "1px solid black"}}
            >
                <text 
                    x={size / 2 - 20} 
                    y={size - margin + axisTextAlignmentFactor} 
                    style={{ fontSize: 10, fontFamily: "Gill Sans, sans serif"}}
                    textAnchor="end"
                >
                    0
                </text>
                <text 
                    x={size / 2 - 20} 
                    y={yScale(90)} 
                    style={{ fontSize: 10, fontFamily: "Gill Sans, sans serif"}}
                    textAnchor="end"    
                >
                    100
                </text>
                <line 
                    x1={size / 2 - 10}
                    y1= {yScale(90)}
                    x2={size / 2 - 5}
                    y2={yScale(90)} 
                    stroke= "black"
                    strokeOpacity="0.8"
                />
                <line 
                    x1={size / 2 - 10}
                    y1= {size - margin + axisTextAlignmentFactor}
                    x2={size / 2 - 5}
                    y2={size - margin + axisTextAlignmentFactor} 
                    stroke= "black"
                    strokeOpacity="0.8"
                />
                {data.slice(0, 100).map((d, index) => {
                    return <line 
                                key={index}
                                x1={size / 2}
                                y1= {yScale(d.track_popularity)}
                                x2={size / 2 + 20}
                                y2={yScale(d.track_popularity)} 
                               
                                stroke= {
                                    d.track_popularity > "50" ? "green" : "black"
                                }
                                strokeOpacity="0.8"
                            />;
                })}
            </svg>

            <h3>Scatterplot</h3>
            <svg 
                width = {size} 
                height = {size} 
                style={{ border: "1px solid black"}}
            >
                {data.slice(0, 100).map((d, index) => {
                    return <circle 
                                key={index} 
                                cx={size / 2} 
                                cy={size - margin - d.track_popularity} 
                                r={3}
                                fill="none"
                                stroke= {
                                    d.playlist_genre === "pop" ? "green" : "black"
                                }
                                strokeOpacity="0.8"
                                opacity={0.2}
                            />;
                })}
            </svg> */}

        </div>
    );
}

export default App;