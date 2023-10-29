import styled from "styled-components";
import { devices } from "./breakpoints";

const Container = styled.div`
    min-width: 220px;
	display: flex;
    flex-direction: column;
	align-items: center;
	min-height: 100vh;
	width: 100%;
    background-image: linear-gradient(#0AF,#FFF);

    @media only screen and ${devices.md} {
        flex-direction: row;
      }
`;

const LoginImage = styled.img`
	width: 100%;
	padding: 1em;
    display: none;

    @media only screen and ${devices.md} {
        padding: 0;
        width: 50%;
        display: block;
    }

    @media only screen and ${devices.lg} {
        padding: 2em;
        width: 48%;
    }

    @media only screen and ${devices.xl} {
        padding: 3em;
    }
`;

const LoginForm = styled.form`
    width: 100%;
	display: flex;
	align-items: center;
	padding: 1em;

    @media only screen and ${devices.md} {
        padding: 1.5em;
    }

    @media only screen and ${devices.lg} {
        padding: 2.5em;
    }

    @media only screen and ${devices.xl} {
        padding: 5em;
    }
`;

const VerticallyCentered = styled.div`
	width: 100%;
    display: flex;
    flex-direction: column;
`;

const PageHeading = styled.h1`
	text-transform: capitalize;
	text-align: center;
	font-size: 2.5em;
	font-weight: bolder;
`;

const Label = styled.label`
	font-weight: ${(props) => props.fw || "bold"};
	margin-bottom: 0.6em;
`;

const FormGroup = styled.div`
	display: flex;
	flex-direction: ${(props) => props.direction || "column"};
	margin-bottom: 1.1em;
`;

const BorderUnderlineInput = styled.div`
	position: absolute;
	bottom: -2px;
	left: 0;
	right: 0;
	height: 3px;
	transition: transform 200ms ease-in-out;
	background-color: #407bff;
	transform: scaleX(0);
`;

const Button = styled.button.attrs({
    type: "button"
})`
    cursor: pointer;
    border:none;
    color: #fff;
    font-weight: bolder;
    padding: 0.8em 1em;
    border-radius: 0.3em;
`;

const VisibilityIcon = styled.img`
    position: absolute;
    right: 9px;
    top: 50%;
    transform: translateY(-50%);
`;

const Input = styled.input`
	outline: none;

	&.text,
	&.password {
		border: 1px solid #ccc;
		font-size: 0.98em;
		border-radius: 0.2em;
		padding: 0.7em;
	}

    &.password {
        content: "";
        padding-right: 2.8em; 
    }

	&.checkbox {
		width: 20px;
		height: 20px;
		appearance: none;
		border: 2px solid #fff;
		border-radius: 0.3em;
        background-color: #fff;
        box-shadow: 0 0 4px rgba(0,0,0,0.4);
	}

    &.checkbox::before {
        content: "\\2713";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-20%,-70%);
        font-weight: bold;
        font-size: 1.6em;
        opacity: 0;
        transition: 0.1s ease-in;
        color: #407BFF;
    }

    &.checkbox:checked::before {
        opacity: 1;
    }

	&:focus + ${BorderUnderlineInput}, &:hover + ${BorderUnderlineInput} {
		transform: scaleX(1);
	}

	&:focus + ${BorderUnderlineInput} {
		background-color: #003fcb;
	}
`;

const StyledInput = styled.div`
	position: relative;
    z-index: 1;
    height: fit-content;

	& .text,
	& .password {
		width: 100%;
	}

    &[data-checkbox=true] + ${Label} {
        margin-left: 0.3em;
        color: #222;
    }
`;

const ChangePasswordButton = styled(Button)`
    margin: 0;
    margin-left: auto;
    background-color: #407BFF;
    border-radius: 2em;
`;

const Stack = styled.div`
    display: flex;
    justify-content: ${(props) => props.justifycontent};
    align-items: ${(props) => props.alignitems};
	flex-direction: ${(props) => props.direction};
    margin-bottom: ${(props) => props.mb};
`;

const Space = styled.div`
    width: ${(props) => props.gap}
`;

const LoginButton = styled(Button).attrs({
    type: "submit"
})`
    background-color: #1575A7;
    margin: 0 auto;
    width: 98%;
    margin-bottom: 2em;

    @media only screen and ${devices.xs} {
        width: 65%;
    }
`;

const Link = styled.a`
    text-decoration: ${(props) => props.underlined ? "underline" : "none"}
`;

const NoAccount = styled.p`
    margin: 0 auto;
    font-weight: 500;

    ${Link} {
        font-weight: bold;
    }
`;

export {
	Container,
	LoginImage,
	LoginForm,
	VerticallyCentered,
	PageHeading,
	Label,
	Input,
	FormGroup,
	StyledInput,
	BorderUnderlineInput,
    ChangePasswordButton,
    Stack,
    Space,
    Link,
    LoginButton,
    VisibilityIcon,
    NoAccount
};
