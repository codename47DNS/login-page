import {
	Container,
	LoginForm,
	LoginImage,
	PageHeading,
	VerticallyCentered,
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
} from "./Styled.components";
import "./App.css";
import { useState } from "react";

function App() {
	const [visibility, setVisibility] = useState(false);

	return (
		<>
			<Container>
				<Space gap="2em"></Space>
				<LoginImage src="img/login.svg"></LoginImage>
				<LoginForm>
					<VerticallyCentered>
						<PageHeading>login</PageHeading>

						<FormGroup>
							<Label>Login ID</Label>

							<StyledInput>
								<Input
									type="text"
									placeholder="Enter Login ID"
									className="text"
								></Input>
								<BorderUnderlineInput></BorderUnderlineInput>
							</StyledInput>
						</FormGroup>

						<FormGroup>
							<Label>Password</Label>

							<StyledInput>
								<Input
									type={visibility ? "text" : "password"}
									placeholder="Enter Password"
									className="password"
								></Input>
								<BorderUnderlineInput></BorderUnderlineInput>
								<VisibilityIcon
									onClick={() => setVisibility(!visibility)}
									src={
										visibility ? "img/visibility.svg" : "img/visibility_off.svg"
									}
									alt={
										visibility ? "show text" : "hide text"
									}
								></VisibilityIcon>
							</StyledInput>
						</FormGroup>

						<Stack alignitems="center" mb="1em">
							<Stack>
								<StyledInput data-checkbox="true">
									<Input type="checkbox" className="checkbox"></Input>
								</StyledInput>

								<Label fw="normal">Remember Me</Label>
							</Stack>

							<ChangePasswordButton>Change Password</ChangePasswordButton>
						</Stack>

						<Stack mb={"2em"}>
							<StyledInput data-checkbox="true">
								<Input type="checkbox" className="checkbox"></Input>
							</StyledInput>

							<Label fw="normal">
								Agree to <Link href="#" underlined="true">Terms & Conditions</Link>
							</Label>
						</Stack>

						<LoginButton>Login</LoginButton>

						<NoAccount>
							Don't have an Account?&nbsp;
							<Link href="#">Register Here</Link>
						</NoAccount>
					</VerticallyCentered>
				</LoginForm>
			</Container>
		</>
	);
}

export default App;
