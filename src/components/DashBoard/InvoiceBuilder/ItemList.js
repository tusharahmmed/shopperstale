import React from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";
import {
  addItem,
  deleteItem,
} from "../../../rtk/features/InvoiceItem/InvoiceItemSlice";
import { useDispatch, useSelector } from "react-redux";

// calculate total amount
export const getTotalAmount = (items) => {
  if (items?.length > 0) {
    const total = items.reduce((prevValue, currentItem) => {
      let currentTotal = currentItem.price * currentItem.quantity;
      return prevValue + currentTotal;
    }, 0);

    return parseFloat(total);
  }

  return 0;
};

const ItemList = () => {
  // get invoice list
  const items = useSelector((state) => state.InvoiceItems);

  // get total amount
  const totalAmount = getTotalAmount(items);

  const dispatch = useDispatch();

  // handle form submit
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // parse in number
    data.quantity = parseInt(data.quantity);
    data.price = parseFloat(data.price);

    // validate
    if (!Number.isInteger(data.quantity)) {
      alert("please inter quantity as a number");
      return;
    }
    if (Number.isNaN(data.price)) {
      alert("please inter price as a number");
      return;
    }
    // after validation

    data.tax = "";

    dispatch(addItem(data));

    reset();
  };

  // delete item form list
  const handleItemDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <Container>
      <AddItemSection>
        {/* // add form */}
        <AddForm onSubmit={handleSubmit(onSubmit)}>
          {/* <InputWraper> */}
          <input
            {...register("item", { required: true })}
            type="text"
            placeholder="Item"
            id=""
          />
          <input
            {...register("description", { required: true })}
            type="text"
            placeholder="Description"
            id=""
          />
          <input
            {...register("quantity", { required: true })}
            type="text"
            placeholder="Quantity"
            id=""
          />
          <input
            {...register("price", { required: true })}
            type="text"
            placeholder="Price"
            id=""
          />
          <AddIcon type="submit">Add Item</AddIcon>
          {/* </InputWraper> */}
        </AddForm>
      </AddItemSection>

      <TableWraper>
        <Table>
          <thead>
            <TableRow>
              <th>Item</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </TableRow>
          </thead>
          <tbody>
            {items?.length > 0 &&
              items.map((item) => (
                <TableRow key={item.id}>
                  <td>{item.item}</td>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>
                    <AiOutlineDelete
                      onClick={() => handleItemDelete(item.id)}
                      cursor={"pointer"}
                    />
                  </td>
                </TableRow>
              ))}
          </tbody>
        </Table>
      </TableWraper>
      <TotalAmount>
        <p>Sub Total: {totalAmount.toFixed(2)} tk</p>
        <p>Total: {totalAmount.toFixed(2)} tk</p>
      </TotalAmount>
    </Container>
  );
};

export default ItemList;

// styled components
const Container = styled.div`
  padding: 20px 0px;
`;

const TableWraper = styled.div`
  width: 100%;

  // @media (max-width: 900px) {
  //   width: 90%;
  //   overflow: hidden;
  // }
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 95%;
  // @media (max-width: 900px) {
  //   width: 200%;
  //   overflow: scroll;
  // }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid gray;

  th,
  td {
    padding: 5px;
    text-align: left;
  }
`;

const AddItemSection = styled.div``;

const AddForm = styled.form`
  input {
    height: 35px;
    padding: 0 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
    margin-right: 10px;
    font-size: 14px;

    @media (max-width: 900px) {
      margin-bottom: 10px;
    }
  }
`;
// const AddForm = styled.form`

// `;

const AddIcon = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 2px 20px;
  display: inline-block;
  border: 2px solid gray;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 30px;
  cursor: pointer;
  font-size: 14px;
`;

const TotalAmount = styled.div`
  text-align: right;
  width: 95%;
  margin-top: 1rem;

  p {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;
