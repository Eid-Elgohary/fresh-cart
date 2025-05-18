import styled from "styled-components";
import ToggleMenu from "./ToggleMenu";
import Modal from "./Modal";
import toast from "react-hot-toast";
import LoginForm from "../features/authentication/LoginForm";

import { FaRegHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

function HeaderUtilities() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const { userTKN, setUserTKN } = useAuth();
  const { cartCount } = useCart();

  function handleLogout() {
    localStorage.removeItem("userTKN");
    setUserTKN(null);
    setLoginForm(true);
    toast.success("see you later");
  }
  return (
    <HeaderIcons>
      {loginForm && (
        <Modal onclose={() => setLoginForm(false)}>
          <LoginForm onclose={setLoginForm} isLoginForm={loginForm} />
        </Modal>
      )}

      <div>
        <Link to="/wishList">
          <Icon as={FaRegHeart} size="20px" />
        </Link>
      </div>
      <div style={{ position: "relative" }}>
        {cartCount > 0 && <Count>{cartCount}</Count>}
        <Link to="/cart">
          <Icon as={BsBagCheck} size="20px" />
        </Link>
      </div>

      <Icon>
        {userTKN ? (
          <MdLogout size="20px" onClick={handleLogout} />
        ) : (
          <FaUser size="20px" onClick={() => setLoginForm(true)} />
        )}
      </Icon>
      <MenuSpan>
        <Icon
          onClick={() => setToggleMenu(true)}
          as={HiMenu}
          size="24px"
          color="#0aad0a"
        />
      </MenuSpan>
      {toggleMenu && <ToggleMenu onclick={setToggleMenu} />}
    </HeaderIcons>
  );
}

export default HeaderUtilities;
const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1.25rem;
  align-self: flex-end;

  width: 58.33333333%;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 992px) {
    width: 16.66666667%;
  }
`;
const Icon = styled.div`
  cursor: pointer;
  color: var(--text-light);
  transition: all 0.01s;

  ${(props) => props.size || "40px"};
  &:hover {
    color: var(--main-color);
  }
`;

const MenuSpan = styled.span`
  @media (min-width: 992px) {
    display: none;
  }
`;
const Count = styled.span`
  position: absolute;
  top: -7px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--main-color);
  color: white;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  right: -10px;
`;
