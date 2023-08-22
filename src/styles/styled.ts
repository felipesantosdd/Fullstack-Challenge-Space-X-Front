import styled from 'styled-components';

export const main = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const ListaLaunches = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    justify-content: center;

`;

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    background-color: #a7a2a2;
    border-radius: 10px;
    align-items: center;
    max-width:800px;
    min-width: 300px;
    height: 100%;
    min-height: 500px;
    @media screen and (max-width: 600px) {
      align-items: center;
      justify-content: center;
      padding-top: 20px;
      padding-bottom: 20px;
  }
`;

export const TheadDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
      display: none;
    }
`;

export const Thead = styled.thead`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;

    tr {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;

    th {
        display: flex;
        margin: 20px;
        width: 80%;
    }
  }
`;

export const Tbody = styled.tbody`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

  tr {
        display: flex;
        width: 90%;
        background-color: #252525;
        border-radius: 10px;
        margin-bottom: 10px;


    td {
        display: flex;
        margin: 10px;
        width: auto;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }

    @media screen and (max-width: 600px) {
      td {
        display: flex;
        align-items: center;
        padding: 8px;
  }
}
  }
`;

export const TbodyDiv = styled.div`
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
    }
`;


export const ButtonsBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly
`;

