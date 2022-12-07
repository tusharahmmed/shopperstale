//@packages
import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { Accordion } from "@mantine/core";
import styled from "styled-components";
import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import swal from "sweetalert";

// import swal from "sweetalert";
// @icons
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { SiSitepoint } from "react-icons/si";
import { BiCreditCardFront } from "react-icons/bi";
import { RiBarChartFill } from "react-icons/ri";
import { FaPlus, FaPencilAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
// @components
import {
  MakeAdmin,
  AddNewSite,
  ManageSite,
  ManageLayout,
  UserSettings,
  PaymentMethods,
} from "../index";

const GeneralDashboar = () => {
  let { path, url } = useRouteMatch();

  // sign Out
  const [signOut] = useSignOut(auth);

  const handleSignOut = () => {
    swal({
      title: "Are you sure?",
      text: "You want to log out!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((deleteOrder) => {
      if (deleteOrder) {
        signOut();
      }
    });
  };

  // layout data accordion
  const layoutCategory = [
    {
      id: 1,
      name: "India",
      url: `${url}/manage-layout/india`,
    },
    {
      id: 2,
      name: "UK",
      url: `${url}/manage-layout/uk`,
    },
    {
      id: 3,
      name: "China",
      url: `${url}/manage-layout/china`,
    },
  ];

  // site data accordion
  const siteCategory = [
    {
      id: 1,
      name: "India",
      url: `${url}/manage-site/india`,
    },
    {
      id: 2,
      name: "UK",
      url: `${url}/manage-site/uk`,
    },
    {
      id: 3,
      name: "China",
      url: `${url}/manage-site/china`,
    },
  ];

  // accordion body
  const AccordionList = ({ title, list, icon }) => (
    <Accordion.Item
      style={{
        padding: "0px",
        background: "none",
        border: "none",
        margin: "0px",
      }}
      value={title}
    >
      <Accordion.Control
        style={{
          padding: "0px",
          borderRadius: "8px",
        }}
      >
        <MenuItem>
          <span>{icon}</span>
          <p
            style={{ fontSize: "17px", fontWeight: "500", fontFamily: "g-ssm" }}
          >
            {title}
          </p>
        </MenuItem>
      </Accordion.Control>
      <Accordion.Panel style={{ padding: "0" }}>
        {list.map((item) => {
          return (
            <SubAccordion key={item.url}>
              <Link to={item.url}>
                <p>{item.name}</p>
              </Link>
            </SubAccordion>
          );
        })}
      </Accordion.Panel>
    </Accordion.Item>
  );

  return (
    <Container>
      <MenuBar>
        <Logo>
          <span>
            <Link to="../">
              <img src="/logo.png" alt="" />
            </Link>
          </span>
        </Logo>

        <MenuItemWraper>
          <Link to={`${url}`}>
            <MenuItem>
              <span>
                <HiOutlineHome size={21} />
              </span>
              <p>Dashboard</p>
            </MenuItem>
          </Link>

          <Link to={`${url}/profile`}>
            <MenuItem>
              <span>
                <HiOutlineUser />
              </span>
              <p>Profile Settings</p>
            </MenuItem>
          </Link>

          <Link to={`${url}/payment`}>
            <MenuItem>
              <span>
                <BiCreditCardFront />
              </span>
              <p>Payment Method</p>
            </MenuItem>
          </Link>

          <>
            <Accordion chevronPosition="right">
              <AccordionList
                title={"Manage Sites"}
                list={siteCategory}
                icon={<SiSitepoint />}
              />
            </Accordion>

            {/* <Accordion chevronPosition="right">
              <AccordionList
                title={"Manage Layout"}
                list={layoutCategory}
                icon={<RiBarChartFill />}
              />
            </Accordion> */}
          </>

          <>
            <Link to={`${url}/create-admin`}>
              <MenuItem>
                <span>
                  <FaPencilAlt />
                </span>
                <p>Create Admin</p>
              </MenuItem>
            </Link>

            <Link to={`${url}/add-site`}>
              <MenuItem>
                <span>
                  <FaPlus />
                </span>
                <p>Add New Site</p>
              </MenuItem>
            </Link>
          </>

          <div>
            <MenuItem onClick={handleSignOut}>
              <span>
                <MdLogout />
              </span>
              <p>Sign Out</p>
            </MenuItem>
          </div>
        </MenuItemWraper>
      </MenuBar>

      <MenuContentWrapper>
        <Switch>
          <Route exact path={path}>
            <Title>Dashboard</Title>
            <div>
              {/* <CardItem />
                            <CardItem /> */}
              {/* {products.length &&
                products.map((item, index) => {
                  return index < 2 ? (
                    <CardItem key={item._id} data={item} />
                  ) : (
                    ""
                  );
                })} */}
                {/* <iframe src="https://onedrive.live.com/embed?cid=4F489BE434DEAA84&resid=4F489BE434DEAA84%2110650&authkey=APquV2wjzwUY9aA&em=2" onload="this.width=screen.width;this.height=screen.height;"  frameborder="0" scrolling="no"></iframe> */}
            </div>
          </Route>

          <Route exact path={`${path}/profile`}>
            <Title>User Info</Title>
            <MenuContentFull>
              <UserSettings />
            </MenuContentFull>
          </Route>

          <Route exact path={`${path}/payment`}>
            <Title>Payment</Title>
            <div>
              <PaymentMethods />
            </div>
          </Route>

          <Route exact path={`${path}/manage-site/:country`}>
            <Title>Manage Sites</Title>
            <MenuContentFull>
              <ManageSite />
            </MenuContentFull>
          </Route>

          {/* <Route exact path={`${path}/manage-layout`}>
            <Title>Manage Layout</Title>
            <MenuContentFull>
              <ManageLayout />
            </MenuContentFull>
          </Route> */}

          <Route exact path={`${path}/orders`}>
            <Title>My Orders</Title>
            <MenuContent>
              {/* {
                                myorders.length ? myorders.map(item => <CardItem
                                    key={item._id}
                                    handleCancel={cancelOrder}
                                    data={item} />) : 'No Order History Found'
                            } */}
            </MenuContent>
          </Route>

          <Route exact path={`${path}/create-admin`}>
            <Title>Create New Admin</Title>
            <MenuContent>
              <MakeAdmin />
            </MenuContent>
          </Route>

          <Route exact path={`${path}/add-site`}>
            <Title>Add New Site</Title>
            <MenuContentFull>
              <AddNewSite />
            </MenuContentFull>
          </Route>
        </Switch>
      </MenuContentWrapper>
    </Container>
  );
};

export default GeneralDashboar;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 70px;
  padding: 0px 48px;

  height: calc(100vh - 70px);
  overflow: hidden;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 3fr;
  }

  @media (max-width: 992px) {
    grid-template-columns: 2fr 3fr;
    height: 100%;
  }

  @media (max-width: 668px) {
    margin-top: 0px;
    padding: 0px 10px;

    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const MenuBar = styled.div`
  font-family: g-ssm;
  font-size: 17px;
  // padding-top: 50px;

  a {
    text-decoration: none;
  }
  @media (max-width: 688px) {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 19%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-cotent: center;
  margin-bottom: 20px;
  img {
    width: 50%;
  }
`;

const MenuItemWraper = styled.div`
  height: 100vh;
  overflow: scroll;
  padding-bottom: 28vh;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    height: auto;
    overflow: hidden;
    padding-bottom: 0vh;
  }
`;
const MenuItem = styled.div`
  padding: 13px 5px 10px;
  cursor: pointer;
  border-radius: 8px;

  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
  }
  span {
    height: 34px;
    width: 34px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  &:hover {
    backdrop-filter: blur(16px);
    background: #f8f9fa;
    span {
    }
  }
`;
const MenuContentWrapper = styled.div`
  padding-left: 30px;
  @media (max-width: 668px) {
    padding-left: 0px;
  }
`;
const Title = styled.h2`
  font-family: g-ssm;
  font-size: 34px;
  font-weignt: 400;

  @media (max-width: 688px) {
    font-size: 26px;
    text-align: center;
  }
`;
const MenuContent = styled.div`
  padding: 20px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 30px;
  }
  @media (min-width: 993px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
  }
  @media (min-width: 1200px) {
    padding: 20px 0px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
const MenuContentFull = styled(MenuContent)`
  grid-template-columns: repeat(1, 1fr);
`;

// accourdion styled
const SubAccordion = styled.div`
  p {
    font-size: 16px;
    padding: 5px 10px;
    font-weight: 500;

    &:hover {
      backdrop-filter: blur(16px);
      background: #f8f9fa;
    }
  }
`;
