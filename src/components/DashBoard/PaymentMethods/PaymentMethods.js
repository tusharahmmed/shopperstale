import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { useGetPaymentMethodsQuery } from '../../../rtk/features/api/ApiSlice';
import AddCard from './AddCard';
import CardItem from './CardItem';

const PaymentMethods = () => {
  // modal state
  const [opened, setOpened] = useState(false);

  // get list
  const { data: paymentList, isLoading, isError } = useGetPaymentMethodsQuery();

  // content conditions 
  let content = null;
  useEffect(()=>{
    if(!isLoading && !isError && paymentList?.length > 0){
      setOpened(false);
    }
  },[isLoading,isError,paymentList])

  if(!isLoading && !isError && paymentList?.length > 0){
    content = paymentList.map ( item => <CardItem key={item._id} payment={item} />)
  }

    return (
        <Container>
            {content}
            <AddCard opened={opened} setOpened={setOpened} />
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