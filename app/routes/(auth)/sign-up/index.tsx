import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import {
  Form,
  MetaFunction,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import bcrypt from "bcryptjs";
import CryptoJS from "crypto-js";
import { useEffect, useRef } from "react";
import EmailInput from "~/components/form/email-input";
import PasswordInput from "~/components/form/password-input";
import TextInput from "~/components/form/text-input";
import { Button } from "~/components/ui/button";
import { userCookie } from "~/cookies/server";
import { db } from "~/db";
import { users } from "~/db/schema";
import { User } from "~/design-system/layout/Header/Header";
import { appName, cryptoSecret } from "~/shared/flags";
import { urls } from "~/shared/urls";
import { getIsValidString } from "~/utils/get-is-valid-string";

type Error = {
  statusText: string;
  message: string;
};

export async function action({
  request,
}: ActionFunctionArgs): Promise<Error | Response> {
  try {
    const formData = await request.formData();
    const userObject = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      password: formData.get("password")?.toString() ?? "",
      confirmPassword: formData.get("confirmPassword")?.toString() ?? "",
    };

    const notValidInputs = Object.values(userObject).some((value) => {
      return !getIsValidString(value as string);
    });

    if (notValidInputs) {
      return {
        statusText: "error",
        message: "Please complete your data",
      };
    }

    if (userObject.password !== userObject.confirmPassword) {
      return {
        statusText: "error",
        message: "Password do not match, pls try again!",
      };
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(
      userObject.password as string,
      salt
    );

    const user = {
      name: userObject.name,
      email: userObject.email,
      password: hashedPassword,
    };

    // When inserting to database
    await db.insert(users).values(user);
    const encryptedUser = CryptoJS.AES.encrypt(
      JSON.stringify(user),
      cryptoSecret
    ).toString();

    return redirect(urls.home, {
      headers: {
        "Set-Cookie": await userCookie.serialize(encryptedUser),
      },
    });
  } catch (error) {
    const errorString = error instanceof Error ? error.message : String(error);
    return {
      statusText: "error",
      message: `Something went wrong ${errorString}`,
    };
  }
}

export async function loader({
  request,
}: LoaderFunctionArgs): Promise<User | null> {
  const cookieString = request.headers.get("Cookie");
  const hashedCookie = (await userCookie.parse(cookieString)) || {};
  const userStr = CryptoJS.AES.decrypt(hashedCookie, cryptoSecret).toString(
    CryptoJS.enc.Utf8
  );

  const user: User = JSON.parse(userStr);

  if (user) {
    return user;
  }

  return null;
}

export default function SignUpPage() {
  const data = useLoaderData<typeof loader>();
  const formRef = useRef<HTMLFormElement>(null);
  const actionData = useActionData<typeof action>();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData && actionData.status === "success") {
      formRef.current?.reset();
    }
  }, [actionData]);

  useEffect(() => {
    console.log(data);
    if (data) {
      return navigate(urls.profile, { replace: true });
    }
  }, [data]);

  return (
    <section className="container">
      <Form
        ref={formRef}
        method="post"
        className="flex flex-col gap-4 max-w-xl mx-auto">
        <TextInput
          required
          id="name"
          label="Name"
          name="name"
          placeholder="Your name"
        />
        <EmailInput
          required
          id="email"
          label="Email"
          placeholder="Email address"
        />
        <PasswordInput
          required
          id="password"
          name="password"
          label="Password"
          placeholder="Password"
        />
        <PasswordInput
          required
          id="confirm-password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Password"
        />
        {actionData &&
          (actionData.statusText === "error" ? (
            <span className="text-red-500 text-sm">{actionData.message}</span>
          ) : (
            <span className="text-green-500 text-sm">{actionData.message}</span>
          ))}
        <Button>Submit</Button>
      </Form>
    </section>
  );
}

export const meta: MetaFunction = () => {
  return [
    {
      title: `${appName} | Sign Up`,
    },
    {
      name: "description",
      content: "This is our sign up page.",
    },
  ];
};
