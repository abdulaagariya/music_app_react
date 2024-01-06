import React from 'react';
import '../assets/scss/Developer.scss';
import { IconButton } from "@material-ui/core";
import MY_PHOTO from "../assets/img/MY_PHOTO.png";
import { Instagram, LinkedIn, Portrait, } from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>I am Web developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={MY_PHOTO} alt="Profile" />
                    <div className={"Card-details"}>
                        <h3>Abdul Aagariya</h3>
                        <p>Web Developer</p>

                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A IT and Engineering Student at Charusat University, Changa, Anand, Gujarat.</p>
                    <p>Graduating in 2025 and looking for a responsible position to gain practical knowledge</p>
                    <p>A Web developer .</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>

                    <div className="Card-btn">

                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/Abdul Aagariya-/"} title={"Abdul Aagariya-"}>
                            <LinkedIn />
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/abdul_agariya768/"} title={"abdul_agariya768"}>
                            <Instagram />
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://6516e009b2d0f30e8d96f52c--poetic-kashata-6aef61.netlify.app/?fbclid=PAAaZqH_mKwrCtgBVPwDb-XQRj1XdQLRQWi-T_2W3RC1o2REslouWR-cb-CcY/"} title={"Web Portfolio"}>
                            <Portrait />
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;