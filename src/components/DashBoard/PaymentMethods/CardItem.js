import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {MdDelete} from "react-icons/md"
import swal from "sweetalert";

const CardItem = () => {

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
        swal("Poof! Your payment getway has been deleted!", {
          icon: "success",
          buttons: false,
          timer: 1000,
        });
      }
    });
  }


  return (
    <Container>
      <Thumb img={"/images/pay/bkash.png"}></Thumb>
      <Description>
        <div>
          <Logo>
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
background: url('https://www.bssnews.net/assets/news_photos/2022/06/28/image-69154-1656417659.jpg');
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
