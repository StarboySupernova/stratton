import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { DiApple } from 'react-icons/di';
import { IoIosMailUnread } from 'react-icons/io';
import { FcAndroidOs } from 'react-icons/fc';

// add reddit and other social media links
export const socialLinks = [
  {
    name: 'telephone',
    url: 'tel:+27761501409',
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: 'mail',
    url: 'mailto:steppingstones@gmail.com',
    icon: <IoIosMailUnread />,
  },
  {
    name: 'whatsapp',
    url: `https://wa.me/27834659008?text=${encodeURIComponent(
      'I would like to chat to an available Stepping Stones Representative'
    )}`,
    icon: <FaWhatsappSquare />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/SSGPCTRAINING/',
    icon: <FaFacebook />,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/SStonesgroup',
    icon: <FaTwitter />,
  },
  {
    name: 'Apple',
    url: 'https://www.apple.com/Stepping_Stones_Group_iOS_App',
    icon: <DiApple />,
  },
  {
    name: 'Android',
    url: 'https://www.play.google.com/Stepping_Stones_Group_Android_App',
    icon: <FcAndroidOs />,
  },
];
