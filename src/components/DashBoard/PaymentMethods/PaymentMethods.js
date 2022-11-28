import React from 'react';
import styled from 'styled-components';
import AddCard from './AddCard';
import CardItem from './CardItem';

const PaymentMethods = () => {
    return (
        <Container>
            <CardItem />
            <CardItem />
            <AddCard />
        </Container>
    );
};

export default PaymentMethods;


const Container = styled.div`
padding: 20px 0px;
    display: grid;
    grid-template-columns: repeat(3,1fr);

    @media (max-width: 992px) {
        grid-template-columns: repeat(1,1fr);
        grid-row-gap: 30px;
        
      }
    @media (min-width: 993px) {
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 30px;
        grid-column-gap: 30px;
      }
    @media (min-width: 1200px) {
        padding: 20px 0px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
      }

`;