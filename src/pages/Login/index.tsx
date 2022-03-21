import { Formik, FormikErrors, Form, FormikHelpers } from "formik";
import {
  Button,
  Card,
  Container,
  EmailArea,
  EmailInput,
  Logo,
  PasswordInput,
  EmailInputTitle,
  PasswordInputTitle,
  PasswordArea,
} from "./styles";
import logo from "../../assets/logo.svg";
import api from "../../services/api";
import { useAuth } from "../../context/auth";

type Values = {
  email: string;
  password: string;
};

export function Login() {
  const { login } = useAuth();
  return (
    <Container>
      <Card>
        <Logo src={logo} />
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            if (login) {
              login(values.email, values.password);
            }
          }}
        >
          <Form>
            <EmailArea>
              <EmailInputTitle htmlFor="email">Email</EmailInputTitle>
              <EmailInput
                id="email"
                name="email"
                placeholder="@gmail.com"
                type="email"
              />
            </EmailArea>
            <PasswordArea>
              <PasswordInputTitle htmlFor="email">Password</PasswordInputTitle>
              <PasswordInput
                id="password"
                name="password"
                placeholder="****************"
                type="password"
              />
            </PasswordArea>

            <Button type="submit">Login</Button>
          </Form>
        </Formik>
      </Card>
    </Container>
  );
}
