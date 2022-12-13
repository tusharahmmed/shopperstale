import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { DatePicker } from "@mantine/dates";

// @components
import {
  Container,
  InputLabel,
  InputWraper,
  SubmitButto,
} from "../../Logins/Login";
import ItemList, { getTotalAmount } from "./ItemList";
import { useSelector } from "react-redux";
import { useGenerateInvoiceMutation } from "../../../rtk/features/api/ApiSlice";
import { LoadingOverlay, Modal } from "@mantine/core";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../../utilts/baseUrl";
import fileDownload from "js-file-download";

const InvoiceBuilder = () => {
  // modal state
  const [opened, setOpened] = useState(false);

  // rtk query
  const [
    generateInvoice,
    { isLoading: generateLoading, isError, isSuccess: invoiceSuccess },
  ] = useGenerateInvoiceMutation();

  // is generate invoice then show modal
  useEffect(() => {
    if (invoiceSuccess) {
      setOpened(true);
    }
  }, [invoiceSuccess]);

  // get invoice list + total amount
  const invoiceItems = useSelector((state) => state.InvoiceItems);
  const totalAmount = getTotalAmount(invoiceItems);

  // submit ref
  const refSubmitButtom = useRef();

  // handle submission
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // add items
    data.items = invoiceItems;
    
    // add total
    data.total = totalAmount;
    data.subtotal = totalAmount;

    // send data to backend
    generateInvoice(data);

    if (invoiceSuccess) {
      reset();
    }
  };

  // handle download
  const handleDownload = (e) => {
    e.preventDefault();
    axios({
      method: "get",
      url: `${baseUrl}/invoice/download`,
      responseType: "blob",
    }).then(res => {
      fileDownload(res.data,'Invoice.pdf')
    })

    // close modal
    setOpened(false);
  };

  return (
    <RootContainer>
      <Wraper style={{ position: "relative" }}>
        {generateLoading && <LoadingOverlay visible={true} overlayBlur={2} />}
        <form
          style={{ position: "relative" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* {loading && <LoadingOverlay visible={true} overlayBlur={2} />} */}
          <SectionWraper>
            <Section>
              <WraperTitle>Shipper Details</WraperTitle>
              <InputWraper>
                <InputLabel>Name</InputLabel>
                <input {...register("name", { required: true })} type="text" />
              </InputWraper>

              <InputWraper>
                <InputLabel>Phone</InputLabel>
                <input
                  {...register("address", { required: true })}
                  type="text"
                />
              </InputWraper>

              <InputWraper>
                <InputLabel>Address</InputLabel>
                <input {...register("city", { required: true })} type="text" />
              </InputWraper>

              <InputWraper>
                <InputLabel>State</InputLabel>
                <input {...register("state", { required: true })} type="text" />
              </InputWraper>
              <InputWraper>
                <InputLabel>Country</InputLabel>
                <input
                  {...register("country", { required: true })}
                  type="text"
                />
              </InputWraper>
            </Section>

            <div>
              <Section>
                <WraperTitle>Company Details</WraperTitle>
                <InputWraper>
                  <InputLabel>Name</InputLabel>
                  <input
                    {...register("company_name", { required: true })}
                    defaultValue={"Shoppers ' Tale"}
                    type="text"
                  />
                </InputWraper>
                <InputWraper>
                  <InputLabel>Address</InputLabel>
                  <input
                    {...register("company_address", { required: true })}
                    defaultValue={
                      "Shopper's Tale Invoice. H-39, Road 08 ,Sector 11, 6th Floor Uttara, Dhaka 1230"
                    }
                    type="text"
                  />
                </InputWraper>
              </Section>
              <Section>
                <WraperTitle>Invoice Details</WraperTitle>
                <InputWraper>
                  <InputLabel>Invoice Number</InputLabel>
                  <input
                    {...register("order_number", { required: true })}
                    type="number"
                  />
                </InputWraper>
                <InputWraper>
                  <InputLabel>Billing Date</InputLabel>
                  <DatePicker
                    placeholder=""
                    // label="Due Date"
                    radius="xl"
                    size="sm"
                    // withAsterisk
                    {...register("billing_date", { required: true })}
                  />
                </InputWraper>
                <InputWraper>
                  <InputLabel>Due Date</InputLabel>
                  <DatePicker
                    placeholder=""
                    // label="Due Date"
                    radius="xl"
                    size="sm"
                    // withAsterisk
                    {...register("due_date", { required: true })}
                  />
                </InputWraper>
              </Section>
            </div>
          </SectionWraper>
          <button hidden={true} ref={refSubmitButtom} type={"submit"} />
        </form>
        <ItemWraper>
          <WraperTitle>Item List</WraperTitle>
          <ItemList />
        </ItemWraper>

        <RegisterWrap>
          <RegisterBtn onClick={() => refSubmitButtom?.current?.click()}>
            GENERATE INVOICE
          </RegisterBtn>
        </RegisterWrap>
      </Wraper>

      {
        // if invoice build successfully then show modal
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title=""
          centered
        >
          {/* Modal content  */}
          <DownloadInvoice onClick={(e) => handleDownload(e)}>
            Download Invoice
          </DownloadInvoice>
        </Modal>
      }
    </RootContainer>
  );
};

export default InvoiceBuilder;

export const RootContainer = styled(Container)`
  margin-left: 50px;
  margin-top: 20px;

  width: 100%;

  height: calc(100vh - 70px);
  overflow: scroll;
  scroll-behavior: smooth;
  padding-bottom: 100px;

  @media (max-width: 992px) {
    height: auto;
    overflow: visible;
    padding-bottom: 0px;
  }

  @media (max-width: 688px) {
    margin-left: 0px;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wraper = styled.div``;

const RegisterWrap = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const RegisterBtn = styled(SubmitButto)`
  border: 2px solid black;
  background: white;
  color: black;
  transition: all 0.3s;
  margin-bottom: 4rem;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 25%;

  &:hover {
    color: white;
    background: black;
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

const SectionWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Section = styled.div`
  width: 70%;
  padding-left: 5px;
`;

const WraperTitle = styled.h3``;

const ItemWraper = styled.div`
  padding-bottom: 1.5rem;
  padding-top: 2rem;
`;

const DownloadInvoice = styled.button`
  background: green;
  color: white;
  border-radius: 6px;
  padding: 15px 30px;
  text-align: center;
  font-size: 24px;
  font-weight: 600px;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
`;
