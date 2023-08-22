import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and(max-width: 600px)
    {
        display: n;
        flex-direction: column;

    }
`

export const PizzaContainer = styled.div`
    display: flex;
    text-align: center;
    background-color: #252525;
    justify-content:'center';
    align-items:'center';
    @media screen and (max-width: 600px) {
        display: none;
        flex-direction: column;
  }
`;


export const TextBox = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    flex-direction: row;
    justify-content: space-around;
`



export const ContainerChart = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 400px;
    padding:'50px';
    flex-direction:'column';
    flex-wrap: wrap;
`

export const Chart = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:'red';
    @media screen and(max-width: 600px)
    {
        display: none;
    }
`

export const ChartBar = styled.div`
    display: flex;
    width: 500px;
    height: 300px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and(max-width:600px){
        display: flex;
        width: 350px;
        height: 200px;
        justify-content: center;
        align-items: center;
    }
`

export const Results = styled.div`
    display: flex;
    margin: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 95vw;
    text-align: center;
`
