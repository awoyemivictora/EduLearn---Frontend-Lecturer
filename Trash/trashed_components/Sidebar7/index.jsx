import { Img, Heading } from "../../components";
import React from "react";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar7({ ...props }) {
    return (
        <Sidebar
            {...props}
            width="274px !important"
            className={`${props.className} flex flex-col h-screen pt-4 top-0 px-4 bg-foundation-primary_color-p50-1 !sticky overflow-auto `}
        >
            <div className="self-stretch border-b border-solid border-grey_100">
                <div className="mb-4 flex items-center justify-center rounded-md border border-solid border-blue_gray_50 bg-foundation-primary_color-p50-1 px-2 py-3.5">
                    <div className="flex flex-1 items-center gap-[7px]">
                        <Img src="images/img_lucide_hospital.svg" alt="Lucidehospital" className="h-[12px] w-[12px]" />
                        <Heading as="p">Switch to Eduhealth</Heading>
                    </div>
                    <Img src="images/img_lucide_log_in.svg" alt="Lucidelogin" className="h-[12px] w-[12px]" />
                </div>
            </div>
            <Menu
                menuItemStyles={{
                    button: {
                        padding: "8px",
                        gap: "7px",
                        backgroundColor: "#ffffff",
                        color: "#808080",
                        fontWeight: 500,
                        fontSize: "13px",
                        borderRadius: "6px",
                        [`&:hover, &.ps-active`]: {
                            color: "#0d9f7e",
                            backgroundColor: "#e7f5f299 !important",
                            borderRadius: "7px",
                        },
                    },
                }}
                rootStyles={{ ["&>ul"]: { gap: "4px" } }}
                className="mt-4 flex w-full flex-col self-stretch"
            >
                <MenuItem 
                    icon={<Img src="images/img_layout_dashboard_grey_200.svg" alt="Layout" className="h-[12px] w-[12px]" />}
                >
                    Dashboard
                </MenuItem>
                <SubMenu
                    icon={<Img 
                            src="images/img_graduation_cap_foundation__primary_color_p300.svg" 
                            alt="Graduationcap" 
                            className="h-[12px] w-[12px]" 
                        />
                    }
                    label="Academic Program"
                >
                    <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <MenuItem icon={<Img src="images/img_calendar_days.svg" alt="Calendardays" className="h-[12px] w-[12px]" />}>
                    Semester Calendar
                </MenuItem>
                <MenuItem icon={<Img src="images/img_radio.svg" alt="Radio" className="h-[12px] w-[12px]" />}>
                    Live Events
                </MenuItem>
            </Menu>

            <div className="mt-24 flex flex-col gap-4 self-stretch">
                <div className="flex flex-col gap-4">
                    <div className="flex  flex-col gap-4 rounded-[14px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-4 shadow-xs">
                        <div className="flex items-start justify-center">
                            <div className="flex flex-1 flex-col items-start gap-4 self-center">
                                <div className="flex flex-col items-center rounded-[20px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-3">
                                    <Img src="images/img_graduation_cap.svg" alt="Graduationcap" className="h-[12px] w-[12px]"></Img>
                                </div>
                                <div className="flex flex-col items-start self-stretch">
                                    <Heading as="p">Assignment</Heading>
                                    <Heading size="body_text_bold" as="p" className="w-full leading-[120%] !text-grey_300">
                                        SOS 103 has been updated and to be submitted today!
                                    </Heading>
                                </div>
                            </div>
                        </div>
                        <Img src="images/img_x.svg" alt="x" className="h-[12px] w-[12px]" />
                    </div>
                        <div className="flex items-center">
                            <Heading as="p">View</Heading>
                            <Img src="images/img_chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                        </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-[7px] rounded-mg bg-foundation-primary_color-p50-1 px-2 py-2.5">
                        <Img src="images/img_help_circle.svg" alt="Image" className="h-[12px] w-[12px] "/>
                        <Heading as="p">Support & Help</Heading>
                    </div>
                    <div className="flex items-center gap-[7px] rounded-mg bg-foundation-primary_color-p50-1 px-2 py-2.5">
                        <Img src="images/img_log_out.svg" alt="Logout" className="h-[12px] w-[12px] "/>
                        <Heading as="p">Logout</Heading>
                    </div>
                </div>
                <div className="border-t border-solid border-grey_100">
                    <div className="mt-4 flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 p-2">
                        <div className="flex w-[74%] items-center justify-center gap-1">
                            <Img 
                                src="images/img_ellipse_1.png"
                                alt="Image"
                                className="h-[48px] w-[48px] rounded-[24px] object-cover"
                            />
                            <div>
                                <Heading size="subtitle_text_bold" as="h6" className="!text-grey_300">
                                    Awoyemi Victor{" "}
                                </Heading>
                                <Heading as="p">17262122</Heading>
                            </div>
                        </div>
                        <Img src="images/img_chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px] " />
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}

