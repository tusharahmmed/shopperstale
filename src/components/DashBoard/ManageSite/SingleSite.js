import React from "react";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";
import swal from "sweetalert";
import {
  useDeleteChinaSiteMutation,
  useDeleteIndianSiteMutation,
  useDeleteUkSiteMutation,
} from "../../../rtk/features/api/ApiSlice";
import { useEffect } from "react";

const SingleSite = ({ info }) => {
  const { _id, img, name, url, country } = info || {};

  // rtk hooks
  const [deleteIndianSite, { isError: indiaError, isSuccess: indiaSuccess }] =
    useDeleteIndianSiteMutation();
  const [deleteChinaSite, { isError: chinaError, isSuccess: chinaSuccess }] =
    useDeleteChinaSiteMutation();
  const [deleteUkSite, { isError: ukError, isSuccess: ukSuccess }] =
    useDeleteUkSiteMutation();

  // delete handler
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this site!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((deleteSite) => {
      if (deleteSite) {
        // check country for deletations
        if (country === "india") {
          deleteIndianSite(_id);
        }
        if (country === "china") {
          deleteChinaSite(_id);
        }
        if (country === "uk") {
          deleteUkSite(_id);
        }
      }
    });
  };

  // handle response
  // for india
  useEffect(() => {
    if (indiaError) {
      swal({
        title: "Opps!",
        text: "Something went wrong",
        icon: "warning",
        button: "Ok",
        dangerMode: true,
      });
    }

    if (indiaSuccess) {
      swal({
        title: "Success!",
        text: "You have successfully deleted site",
        timer: 1000,
        icon: "success",
      });
    }
  }, [indiaError, indiaSuccess]);

  // for china
  useEffect(() => {
    if (chinaError) {
      swal({
        title: "Opps!",
        text: "Something went wrong",
        icon: "warning",
        button: "Ok",
        dangerMode: true,
      });
    }

    if (chinaSuccess) {
      swal({
        title: "Success!",
        text: "You have successfully deleted site",
        timer: 1000,
        icon: "success",
      });
    }
  }, [chinaError, chinaSuccess]);

  // for uk
  useEffect(() => {
    if (ukError) {
      swal({
        title: "Opps!",
        text: "Something went wrong",
        icon: "warning",
        button: "Ok",
        dangerMode: true,
      });
    }

    if (ukSuccess) {
      swal({
        title: "Success!",
        text: "You have successfully deleted site",
        timer: 1000,
        icon: "success",
      });
    }
  }, [ukError, ukSuccess]);

  return (
    <Item key={_id}>
      <ImageWrap>
        <img src={img} alt="" />
      </ImageWrap>
      <BodyWrap>
        <h3>{name}</h3>
        <p>{url}</p>
      </BodyWrap>
      <Icon onClick={handleDelete}>
        <ImCancelCircle size={20} />
      </Icon>
    </Item>
  );
};

export default SingleSite;

const Item = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  height: 60px;
  margin-bottom: 15px;
  width: 100%;
  background: #fff;
  position: relative;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const ImageWrap = styled.div`
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  width: 40%;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 65px;

    @media (max-width: 700px) {
      display: none;
    }
  }
`;

const BodyWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 35%;
  cursor: pointer;

  @media (max-width: 900px) {
    top: 20%;
  }
  @media (max-width: 700px) {
    top: 10%;
    right: 5px;
  }
`;


