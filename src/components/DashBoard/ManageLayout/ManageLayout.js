import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GrDrag } from "react-icons/gr";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ManageLayout = () => {
  const data = [
    {
      id: 1,
      img: "/images/brand/amazon.png",
      url: "https://www.amazon.in/",
      name: "Amazon",
      country: "india",
    },
    {
      id: 2,
      img: "/images/brand/myntra.png",
      url: "https://www.myntra.com/",
      name: "Myntra",
      country: "india",
    },
    {
      id: 3,
      img: "/images/brand/flipkart.png",
      url: "https://www.flipkart.com/",
      name: "Flipkart",
      country: "india",
    },
    {
      id: 4,
      img: "/images/brand/itokri.png",
      url: "https://www.itokri.com/",
      name: "itokri",
      country: "india",
    },
    {
      id: 5,
      img: "/images/brand/alibaba.png",
      url: "https://www.alibaba.com/",
      name: "Alibaba",
      country: "china",
    },
    {
      id: 6,
      img: "/images/brand/aliexpress.png",
      url: "https://www.aliexpress.com/",
      name: "AliExpress",
      country: "china",
    },
    
  ];

  // states
  const [items, setItem] = useState(data);

  // handle layout change
  const handleLatyoutState = (param) => {
    console.log(param);
    //
    const sourceIndex = param?.source?.index;
    const destinationIndex = param?.destination?.index;

    // update state
    items.splice(destinationIndex, 0, items.splice(sourceIndex, 1)[0]);

    // validate
    if (param.destination === null) {
      console.log("null hay");
    }
  };

  return (
    <DragDropContext onDragEnd={(param) => handleLatyoutState(param)}>
      <Container>
        <Droppable droppableId="droppable-1" type="PERSON">
          {(provided, _) => (
            <Wraper ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((item, i) => {
                return (
                  <Draggable
                    key={item.id}
                    draggableId={`draggable-${item.id}`}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <Item
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? "1px 1px 3px #666"
                            : "none",
                        }}
                      >
                        <ImageWrap>
                          <img src={item.img} alt="" />
                          <DragIcon {...provided.dragHandleProps}>
                            <GrDrag size={26} />
                          </DragIcon>
                        </ImageWrap>
                        <BodyWrap>
                          <h3>{item.name}</h3>
                          <p>{item.url}</p>
                        </BodyWrap>
                      </Item>
                    )}
                  </Draggable>
                );
              })}

              {provided.placeholder}
            </Wraper>
          )}
        </Droppable>
        <Update>UPDATE</Update>
      </Container>
    </DragDropContext>
  );
};

export default ManageLayout;

const Container = styled.div`
height: calc(100vh - 70px);
overflow: scroll;
scroll-behavior: smooth;
padding-bottom: 100px;


@media (max-width: 992px){
  height: auto;
  overflow: visible;
  padding-bottom: 0px;
}

-ms-overflow-style: none; 
scrollbar-width: none;  
&::-webkit-scrollbar {
  display: none;
}
`;

const Wraper = styled.div`
  width: 60%;

  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const Item = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  height: 60px;
  margin-bottom: 15px;
  width: 100%;
  background: #fff;

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
  position: relative;

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

const DragIcon = styled.div`
  position: absolute;
  left: 5px;
  top: 6px;
  cursor: grab;
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

const Update = styled.button`
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  background: #3d69e1;
  font-weight: 500;
`;
