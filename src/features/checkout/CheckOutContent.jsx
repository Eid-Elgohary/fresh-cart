import styled from "styled-components";
import FormRow from "../authentication/FormRow";
import Input from "../../ui/Input";

import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createCashOrder, createVisaOrder } from "../../utils/checkOut";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";

function CheckOutContent() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setCartCount, cartId } = useCart();
  const { userTKN } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  function submitCashOrder(values) {
    setIsLoading(true);
    let orderData = {
      shippingAddress: {
        details: values.notes,
        phone: values.phone,
        city: values.address,
      },
    };

    createCashOrder(orderData, userTKN, cartId)
      .then((res) => {
        if (res.data.status == "success") {
          toast.success("your order successfully confirmed");
          setCartCount(0);
          navigate("/cashorderdone");
        }
      })
      .catch((res) => toast.error("ann error occured\n" + res.message))
      .finally(() => setIsLoading(false));
  }
  function submitVisaOrder(values) {
    setIsLoading(true);
    let orderData = {
      shippingAddress: {
        details: values.notes,
        phone: values.phone,
        city: values.address,
      },
    };
    createVisaOrder(cartId, "http://localhost:5173", orderData, userTKN)
      .then((res) => {
        if (res.data.status == "success") {
          window.location.href = res.data.session.url;
        }
      })
      .catch(() => toast.error("an error occured"))
      .finally(() => setIsLoading(false));
  }

  if (isLoading) return <Spinner />;

  return (
    <Div>
      <Form>
        <FormRow label="name" req={false}>
          <Input
            size="80%"
            id="name"
            placeholder="name"
            {...register("name", { required: true })}
          />
        </FormRow>
        <FormRow label="phone number" req={false}>
          <Input
            size="80%"
            id="phone"
            placeholder="phone"
            {...register("phone", { required: true })}
          />
        </FormRow>
        <FormRow label="address" req={false}>
          <Input
            size="80%"
            id="address"
            placeholder="address"
            {...register("address", { required: true })}
          />
        </FormRow>
        <FormRow label="additional notes" req={false}>
          <TextArea id="notes" {...register("notes")} />
        </FormRow>
        <Button
          width="80%"
          onClick={handleSubmit(submitCashOrder)}
          type="submit"
        >
          Cash on Delivery
        </Button>
        <Button
          width="80%"
          onClick={handleSubmit(submitVisaOrder)}
          type="submit"
        >
          pay by visa card
        </Button>
      </Form>
    </Div>
  );
}

export default CheckOutContent;
const Div = styled.div`
  padding: 0 1rem;
  width: 100%;

  @media (min-width: 992px) {
    width: 67%;
    overflow: auto;
    height: 70vh;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
`;

const TextArea = styled.textarea`
  border: 1px solid var(--border);
  width: 80%;
  border-radius: 0.5rem;
  font-size: 14px;
  padding: 0.5rem;
  outline: none;
  margin-bottom: 0.5rem;
`;
