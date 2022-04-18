import React from 'react';
import "./about.css"
import download from "../../src/images/profile/user-picture.png"

const About = () => {
    return (
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div class="card p-4">
                <div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn0 btn-secondary"> <img src={download} height="100" width="100" alt='' /></button> <span class="name mt-3">Md.Arifur Rahman</span> <span class="idd">@6epotato</span>


                    <div class="text mt-3"> <span>Hii... I am Arifur Rahman .I want to become a webdeveloper.I am going to achive my goal at any cost . Now I am learning about development but soon I will become one of the best developer</span> </div>

                </div>
            </div>
        </div>
    );
};

export default About;