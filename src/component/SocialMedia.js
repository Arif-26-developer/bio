import React from 'react';
import { IconButton, Tooltip, Box } from '@mui/material';
import whatsappimage from "../component/assest/whatsappimage.png";
import mobile from "../component/assest/mobile.png";

const SocialMedia = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                right: 0,
                top: '80%',
                transform: 'translateY(-50%)',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <Tooltip title="Call Us" placement="left">
                <a href="tel:+91 8779013932" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <IconButton
                        sx={{ marginRight: 2 }}
                    >
                        <img 
                            src={mobile} 
                            width={80} 
                            alt="Call"
                            style={{ borderRadius: '50%' }} 
                        />
                    </IconButton>
                </a>
            </Tooltip>
            <Tooltip title="Chat on WhatsApp" placement="left">
                <a href="https://wa.me/918779013932?text=hello how can i help you ?" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <IconButton
                        sx={{ marginRight: 2 }}
                    >
                        <img 
                            src={whatsappimage} 
                            width={80} 
                            alt="WhatsApp"
                            style={{ borderRadius: '50%' }} 
                        />
                    </IconButton>
                </a>
            </Tooltip>
        </Box>
    );
};

export default SocialMedia;
