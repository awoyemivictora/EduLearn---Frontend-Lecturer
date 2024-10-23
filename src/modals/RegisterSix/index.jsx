import { Button, Heading } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

export default function RegisterSix({ isOpen, ...props }) {
    return (
        <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[470px]">
            <div className="flex w-full min-w-[470px] flex-col items-center justify-center gap-8 rounded-[28px] bg-white-a700_33 px-14 py-16 md:p-5">
                <div className="h-[68px] w-[68px] rounded-[34px] bg-foundation-primary_color-p50-1" />
                <div className="flex flex-col gap-8 self-stretch">
                    <div className="flex flex-col items-center gap-1">
                        <Heading size="subtitle_text_2_bold" as="h1" className="!text-foundation-primary_color-p50-1">
                            Successful
                        </Heading>
                        <Heading as="h2" className="self-stretch text-center leading-[120%] !text-foundation-primary_color-p50-0">
                            Account creation was successful, login with your new credentials to access your account
                        </Heading>
                    </div>
                    <a href="https://www.youtube.com/embed/bv8Fxk0szzI" target="_blank" rel="noopener noreferrer">
                        <Button
                            color="foundation_primary_color_p300"
                            shape="round"
                            className="white_A700_33_white_A700_33_border w-full border border-solid font-medium sm:px-5"
                        >
                            Go to sign in
                        </Button>
                    </a>
                </div>
            </div>
        </ModalProvider>
    );
}
