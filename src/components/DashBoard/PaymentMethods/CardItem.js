import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {MdDelete} from "react-icons/md"
import swal from "sweetalert";

import {useDeletePaymentMethodMutation} from '../../../rtk/features/api/ApiSlice';

const CardItem = ({payment}) => {

  const {_id,content,image} = payment || {};

  // DELETE MUTATION
  const [deletePaymentMethod,{isLoading,isError,isSuccess}] = useDeletePaymentMethodMutation();

  // response conditions
  useEffect(()=> {
   if(isSuccess){
    swal("Poof! Your payment getway has been deleted!", {
      icon: "success",
      buttons: false,
      timer: 1000,
    });
   }
  },[isSuccess])





  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this payment getway!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {

        // call actions
        deletePaymentMethod(_id);
      }
    });
  }


  return (
    <Container>
      <Thumb img={content}></Thumb>
      <Description>
        <div>
          <Logo logo={image}>
          </Logo>
        </div>
        <br />
        <ActionContiner>
          
          
            <ViewLink onClick={handleDelete}> <MdDelete size={19} /></ViewLink>
          
          {/* {phone && <span onClick={()=>{handleCancel(_id)}}>
                        <MdDelete size={19} />
                    </span>} */}
        </ActionContiner>
      </Description>
    </Container>
  );
};

export default CardItem;

const Container = styled.div`
  width: 316px;
  border: 2px solid #d0d1d2;
  border-radius: 18px;
  font-family: g-ssm;
  font-size: 12px;
  font-weight: 500;
`;
const Description = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  p {
    margin: 5px 0px;
    font-weight: 600;
  }
`;
const Logo = styled.div`

width: 56px;
height: 56px;
background: url(${(props)=> props.logo});
background-position: center;
background-size: cover;
  
`;
const ViewLink = styled.span`
  border-bottom: 2px solid black;
  margin-top: 10px;
  margin-left: 10px;
`;
const Thumb = styled.div`
  background-image: url(${(props) => props.img});
  height: 120px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  margin: -1px;
`;

const ActionContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  span {
    cursor: pointer;
  }
`;
