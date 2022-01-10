import styled from "styled-components";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import formBack from "./../../images/bg-shorten-desktop.svg";
import { createShortLink } from "../../redux/linksSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const FormSection = styled.section`
  background: linear-gradient(#fff 50%, #eef0f6 0);
  background-size: cover;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const StyledForm = styled.form`
  position: relative;
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
  display: flex;
  grid-gap: 1rem;
  gap: 1rem;
  background-image: url(${formBack});
  background-repeat: no-repeat;
  background-position: 100%;
  background-color: #3b3054;
  background-size: cover;
  padding: 2.5rem 1.5rem;
`;

const Input = styled.input`
  flex-grow: 1;
  line-height: 2.5;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  width: 100%;
  border: none;
  font-size: 1.25rem;
  outline-color: ${(props) => props.outlineColor};
  &::placeholder {
    font-size: 1.25rem;
    color: rgb(117, 117, 117);
  }

  @media (max-width: 1024px) {
    width: 50%;
  }
`;

const Error = styled.div`
  position: absolute;
  bottom: 0.5rem;
  color: red;
  font-style: italic;
  font-size: 14px;
`;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.links.loading);
  const onSubmit = ({ Url }) => {
    dispatch(createShortLink(Url));
    reset();
  };

  return (
    <FormSection>
      <div className="container">
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("Url", {
              required: "Please add a link",
              pattern: {
                value:
                  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g,
                message: "Please enter a valid url",
              },
            })}
            placeholder="Shorten a link here"
            disabled={loading === "loading"}
            outlineColor={errors.Url ? "red" : "null"}
          />
          <Button variant="aquaForm" disabled={loading === "loading"}>
            Shorten it!
          </Button>
          {errors.Url && <Error>{errors.Url.message}</Error>}
        </StyledForm>
      </div>
    </FormSection>
  );
};

export default Form;
