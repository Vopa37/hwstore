import React, {useEffect, useState} from "react";
import {
    Root,
  Title,
  WidthWrapper,UserId
} from "./styled";

import {Button} from "../styled";

import cart from "../../images/cart.svg";

import Modal from "../modal/";

import RegForm from "../regform";
import LogForm from "../logform";
import ManageUsers from "../manageusers";
import ManageProducts from "../manageproducts";
import ShoppingCart from "../shoppingcart";
import {AnimatePresence} from "framer-motion";
import EditUser from "../manageusers/edituser";

const Header = () => {
    const [reg,setReg] = useState(false);
    const [log,setLog] = useState(false);
    const [user,setUser] = useState(undefined);
    const [logOffState,setLogOff] = useState(false);
    const [usersInterface,setUsersInterface] = useState(false);
    const [productsInterface,setProductsInterface] = useState(false);
    const [cartOpen,setOpenCart] = useState(false);
    const [editUser,setEditUser] = useState(undefined);
  useEffect(()=>{
      setUser(localStorage.getItem("user"));
  });

    const logOff = () => {
        setLogOff(true);
        setTimeout(()=>{ localStorage.clear();setUser(undefined); setLogOff(false)},2000);
    }

  return (

    <Root>
      <WidthWrapper>
      <div>
          <Title>
              Hardware Store
          </Title>
          {!user &&
              <>
                <Button onClick={()=>{setLog(true)}}>Login</Button>
                <Button onClick={()=>{setReg(true)}}>Registrace</Button>
              </>
          }
          <div className="w-40px h-40px mx-auto cursor-pointer pb-8 hover-move-up" onClick={()=>{setOpenCart(true)}}><img src={cart}/></div>
          {user &&
              <UserId>
                  <p>Uživatel: {JSON.parse(user).username}</p>
                  {localStorage.getItem("admin") === "true" &&
                  <div>
                      <p className="text-black">Vítejte v adminovském rozhraní</p>
                      <Button onClick={setUsersInterface}>Správa uživatelů</Button>
                      <Button onClick={setProductsInterface}>Správa produktů</Button>
                  </div>}
                  {!JSON.parse(user).admin && (
                      <Button onClick={()=>{setEditUser(JSON.parse(user))}}>Upravit informace</Button>
                  )}
                  <Button onClick={logOff}>Odhlásit se</Button>
                  {logOffState && <p className="text-black">Odhlašování...</p>}
              </UserId>
            }
        <div>
          <AnimatePresence>
            {reg &&
            <Modal toggle={setReg}>
                <RegForm/>
            </Modal>
            }
          </AnimatePresence>
            <AnimatePresence>
            {log &&
            <Modal toggle={setLog}>
                <LogForm/>
            </Modal>
            }
            </AnimatePresence>
            <AnimatePresence>
                {usersInterface &&
                <Modal toggle={setUsersInterface}>
                    <ManageUsers toggle={setUsersInterface}/>
                </Modal>
                }
            </AnimatePresence>
            <AnimatePresence>
                {productsInterface &&
                <Modal toggle={setProductsInterface}>
                    <ManageProducts toggle={setProductsInterface}/>
                </Modal>
                }
            </AnimatePresence>
            <AnimatePresence>
                {cartOpen &&
                <Modal toggle={setOpenCart}>
                    <ShoppingCart toggle={setOpenCart}/>
                </Modal>
                }
            </AnimatePresence>
            <AnimatePresence>
                {editUser &&
                <Modal toggle={setEditUser}>
                    <EditUser admin={false} user={editUser} toggle={setEditUser}/>
                </Modal>
                }
            </AnimatePresence>
        </div>
      </div>
      </WidthWrapper>
    </Root>
  );
};

export default Header;
