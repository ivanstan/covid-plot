import React from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            data: {},
        }
    }

    data = {};

    options = {
        tooltips: {
            callbacks: {
                title: function () {
                    return "";
                },
                label: (item, data) => {
                    let datasetLabel = data.datasets[item.datasetIndex].label || "";
                    let dataPoint = item.yLabel;
                    let comment = datasetLabel + ": " + dataPoint;

                    if (!datasetLabel) {
                        return '';
                    }

                    let note = this.getComment(item.xLabel);

                    if (note) {
                        comment += '. ' + note
                    }

                    return comment;
                }
            }
        }
    }

    async getJson(url) {
        const result = await fetch(url);
        return await result.json();
    }

    setData(result, city) {
        this.data = result;

        const labels = [];
        const stingency = [];
        const no2 = [];

        for (let i in result) {
            if (!result[i]['Date'] || result[i]['Stringency'] === 'NA') {
                continue;
            }

            labels.push(result[i]['Date'])
            stingency.push({
                x: result[i]['Date'],
                y: Math.round(result[i]['Stringency'], 2),
            });

            no2.push({
                x: result[i]['Date'],
                y: Math.round(result[i][city], 2),
            });
        }

        const comment = this.getCommentData(result);

        this.setState({
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Stringency',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 0,
                        pointHitRadius: 10,
                        data: stingency
                    },
                    {
                        label: 'NO2',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgb(152,146,213)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgb(152,146,213)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 1,
                        pointHoverBackgroundColor: 'rgb(152,146,213)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 1,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: no2
                    },
                    {
                        label: '',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.0)',
                        borderColor: 'rgba(152,146,213, 0)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: 'rgba(75,192,192,1)',
                        pointBorderWidth: 1,
                        pointHoverRadius: 1,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 1,
                        pointRadius: 5,
                        pointHitRadius: 10,
                        data: comment
                    },
                ]
            }
        });
    }

    componentDidMount() {
        this.getJson('uk.json').then((result) => {
            this.setData(result, 'London');
        });
    }

    getComment(date) {
        for (let i in this.data) {
            if (this.data[i]['Date'] === date) {
                return this.data[i]['Comment']
            }
        }

        return '';
    }

    onChange = event => {
        const city = this.getCity(event.target.value);

        this.getJson(event.target.value +'.json').then((result) => {
            this.setData(result, city);
        });
    };

    render() {
        return (
            <div className="App">
                <select onChange={this.onChange}>
                    <option value="uk">London, United Kingdom</option>
                    <option value="croatia">Zagreb, Croatia</option>
                </select>
                <Line data={this.state.data} options={this.options}/>
            </div>
        );
    }

    getCommentData(result) {
        let previous = null;
        const data = [];

        for (let i in result) {
            if (result[i]['Date']) {
                let note = this.getComment(result[i]['Date']);

                if (note) {
                    data.push({
                        x: result[i]['Date'],
                        y: Math.round(result[i]['Stringency'], 2),
                    });
                }

                previous = result[i]['Stringency'];
            }
        }

        return data;
    }

    getCity(value) {
        const data = {
          'uk': 'London',
          'croatia': 'Zagreb'
        };


        return data[value];
    }
}

export default App;
