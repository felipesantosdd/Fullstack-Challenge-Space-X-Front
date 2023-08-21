import styled from 'styled-components';

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
  margin-bottom: 20px;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  background-color: #a7a2a2;
  border-radius: 10px;
  align-items: center;
  width: 100%;
  max-width: 800px;
  height: 100%;
  min-height: 500px;
`;

export const TheadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    justify-content: space-around;
    background-color: #252525;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    td {
      display: flex;
      margin: 10px;
      width: 80%;
      justify-content: space-between;
      align-items: center;
      text-align: center;
    }
  }
`;

export const TbodyDiv = styled.div`
  display: flex;
`;

export const MediaSmall = styled.div`
  @media screen and (max-width: 600px) {
    .theadDiv {
      display: none;
    }
    .table {
      align-items: center;
      justify-content: center;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .tbodyDiv {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 20px;

      td {
        display: flex;
        align-items: center;
        padding: 8px;
      }
    }
  }
`;

export const Image = styled.img`
  display: flex;
  height: 20px;
  object-fit: cover;
`;
