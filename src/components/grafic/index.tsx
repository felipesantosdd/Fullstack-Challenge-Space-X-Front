import React, { useContext, useEffect, useState } from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { Chart, ChartBar, Container, ContainerChart, PizzaContainer, Results, TextBox } from './style';
import { Context } from '../../provider/index';

const GraficoPizza = () => {
    const { launchers, status, rockets } = useContext(Context);
    const [rocketDataCounts, setRocketDataCounts] = useState({});
    const [rocketsByYear, setRocketsByYear] = useState({});

    useEffect(() => {

            const countRocketNames = () => {
                const counts:any = {};
                rockets.forEach((rocket) => {
                    const rocketName = rocket.id; // Use 'id' instead of 'name'
                    counts[rocketName] = (counts[rocketName] || 0) + 1;
                });
                setRocketDataCounts(counts);
            };

            const countRocketsByYear = () => {
                const counts:any = {};

                status?.forEach((date) => {
                    if (date){

                    const year: any = new Date(date.date).getFullYear().toString();

                        if (!counts[year]) {
                            counts[year] = {};
                        }

                        counts[year] = (counts[year] || 0) + 1;
                    }
                });

                setRocketsByYear(counts);
            };

            countRocketNames();
            countRocketsByYear();

    }, [launchers, rockets, status]);



    const rocketNames:any = Object.keys(rocketDataCounts);
    const colors: any = ['#8884d8', '#82ca9d', '#cd4569', '#e37400'];


    const PizzaData:any = rocketNames.map((rocketName:string, index:any) => ({
        name: (rockets.filter(ele => ele.id === rocketName))[0].name,
        rockets: status?.reduce((acc, ele) => {
            if (ele.rocket === rocketName) {
                acc++;
            }
            return acc;
        }, 0),
        fill: colors[index % colors.length],
        id: rocketName

    }));


    const years = Object.keys(rocketsByYear);

    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ]

    const newData:any = [];

    status?.forEach((ele) => {
        const year = new Date(ele.date).getFullYear();
        const existingData = newData.find((item: { ano: number; }) => item.ano === year);

        if (existingData) {
            existingData["Falcon 1"] += ele.rocket === "5e9d0d95eda69955f709d1eb" ? 1 : 0;
            existingData["Falcon 9"] += ele.rocket === "5e9d0d95eda69973a809d1ec" ? 1 : 0;
            existingData["Falcon Heavy"] += ele.rocket === "5e9d0d95eda69974db09d1ed" ? 1 : 0;
            existingData["Starship"] += ele.rocket === "5e9d0d96eda699382d09d1ee" ? 1 : 0;
        } else {
            newData.push({
                ano: year,
                "Falcon 1": ele.rocket === "5e9d0d95eda69955f709d1eb" ? 1 : 0,
                "Falcon 9": ele.rocket === "5e9d0d95eda69973a809d1ec" ? 1 : 0,
                "Falcon Heavy": ele.rocket === "5e9d0d95eda69974db09d1ed" ? 1 : 0,
                "Starship": ele.rocket === "5e9d0d96eda699382d09d1ee" ? 1 : 0
            });
        }
    });

    const sucess: any = status?.reduce((acc, ele) => {
        if (ele.sucess === true) {
            acc++;
        }
        return acc; // Retorna o valor do acumulador
    }, 0);

    return (
        <>
            <Container>
                <div style={{width:'auto', display:'flex'}}>


                <ContainerChart>
                    <PizzaContainer>
                            <TextBox>
                                <h3>Lançamento de foguetes</h3>
                            </TextBox>
                            <Chart>

                            <PieChart width={500} height={300}>
                                <Pie data={PizzaData} dataKey="rockets"></Pie>
                                <Legend layout="vertical" verticalAlign="middle" align="left" />
                            </PieChart>


                        </Chart>

                </PizzaContainer>
                    </ContainerChart>
                    <ContainerChart>

                    <ChartBar>
                        <TextBox>
                            <h3>Lançamento por ano</h3>
                        </TextBox>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', maxWidth:'100%' }}>
                                <BarChart width={500} height={300} data={newData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="ano" />
                                    <YAxis  />
                                    <Tooltip />
                                    <Bar dataKey="Falcon 1" stackId="a" fill="#8884d8" />
                                    <Bar dataKey="Falcon 9" stackId="a" fill="#82ca9d" />
                                    <Bar dataKey="Falcon Heavy" stackId="a" fill="#FF8042" />
                                    <Bar dataKey="Starship" stackId="a" fill="#FFBB28" />
                                </BarChart>
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                                        <div style={{ width: '10px', height: '10px', backgroundColor: '#8884d8', marginRight: '5px' }}></div>
                                        <span>Falcon 1</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                                        <div style={{ width: '10px', height: '10px', backgroundColor: '#82ca9d', marginRight: '5px' }}></div>
                                        <span>Falcon 9</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                                        <div style={{ width: '10px', height: '10px', backgroundColor: '#FF8042', marginRight: '5px' }}></div>
                                        <span>Falcon Heavy</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                                        <div style={{ width: '10px', height: '10px', backgroundColor: '#FFBB28', marginRight: '5px' }}></div>
                                        <span>Starship</span>
                                    </div>
                                </div>
                            </div>

                        </ChartBar>
                    </ContainerChart>
                </div>

                <Results >
                    <h3>Resultados de lançamento</h3>
                    <strong>Sucesso: {sucess}</strong>
                    <strong>Falhas: {(status? status.length - sucess : '')}</strong>
                </Results>
            </Container>
        </>
    );
};

export default GraficoPizza;
