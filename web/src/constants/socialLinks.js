import React from 'react';
import { FaFacebook, FaTwitter, FaPhoneSquareAlt } from 'react-icons/fa';
import { DiApple } from 'react-icons/di';
import { IoIosMailUnread } from 'react-icons/io';
import { FcAndroidOs } from 'react-icons/fc';

// add reddit and other social media links
export const socialLinks = [
  {
    name: 'telephone',
    url: 'tel:+27726096046',
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: 'mail',
    url: 'mailto:pkmusanhu@gmail.com',
    icon: <IoIosMailUnread />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/MwenjeMinerals',
    icon: <FaFacebook />,
  },
  {
    name: 'twitter',
    url: 'https://www.twitter.com/Mwenje_Minerals',
    icon: <FaTwitter />,
  },
  {
    name: 'Apple',
    url: 'https://www.apple.com/Mwenje_Minerals_iOS_App',
    icon: <DiApple />,
  },
  {
    name: 'Android',
    url: 'https://www.play.google.com/Mwenje_Minerals_Android_App',
    icon: <FcAndroidOs />,
  },
];
