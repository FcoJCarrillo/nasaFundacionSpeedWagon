import React from 'react';

export const Footer = () => (
    <footer className="footer mt-auto py-3 bg-dark text-white text-center">
        <div className="container">
            <p className="mb-1">
                Created by FundacionSpeedWagon
            </p>
            <p className="mb-0">
                Made with <i className="fa fa-heart text-danger" /> by{" "}
                <a 
                    href="https://www.spaceappschallenge.org/2025/find-a-team/fundacion-speedwagon/?tab=details" 
                    className="text-white"
                >
                    Team page
                </a>
            </p>
        </div>
    </footer>
);