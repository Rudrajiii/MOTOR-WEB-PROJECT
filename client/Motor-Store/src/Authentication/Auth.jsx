import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export function DialogWithForm({ open, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Sign In and Sign Up

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <Dialog
      size="xs"
      open={open}
      handler={onClose}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h4" color="blue-gray">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Typography>
          <Typography
            className="mb-3 font-normal"
            variant="paragraph"
            color="gray"
          >
            {isSignUp
              ? "Create an account by entering your email and password."
              : "Enter your email and password to Sign In."}
          </Typography>
          
          <Typography className="-mb-2" variant="h6">
            Your Email
          </Typography>
          <Input label="Email" size="lg" />
          
          <Typography className="-mb-2" variant="h6">
            Your Password
          </Typography>
          <Input label="Password" size="lg" />

          {isSignUp && ( // Show the confirm password field only for sign up
            <>
              <Typography className="-mb-2" variant="h6">
                Confirm Password
              </Typography>
              <Input label="Confirm Password" size="lg" />
            </>
          )}

          <div className="-ml-2.5 -mt-3">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={onClose} fullWidth>
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Typography variant="small" className="mt-4 flex justify-center">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <Typography
              as="button" // Use button to toggle forms
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
              onClick={toggleForm}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </Dialog>
  );
}
