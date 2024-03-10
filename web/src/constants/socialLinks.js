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
    url: 'tel:+27786647721',
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: 'mail',
    url: `mailto:supernovaonline@outlook.com?subject=${encodeURIComponent(
      'I would like to contact you'
    )}`,
    icon: <IoIosMailUnread />,
  },
  {
    name: 'whatsapp',
    url: `https://wa.me/27786647721?text=${encodeURIComponent(
      'I would like to chat to an available Stratton Ashworth Representative'
    )}`,
    icon: <FaWhatsappSquare />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/strattonashworth/',
    icon: <FaFacebook />,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/simbasaintchris',
    icon: <FaTwitter />,
  },
  {
    name: 'Apple',
    url: 'https://apps.apple.com/us/app/d-e-m-trust/id6444571188',
    icon: <DiApple />,
  },
  {
    name: 'Android',
    url: 'https://www.play.google.com/strattonashworth',
    icon: <FcAndroidOs />,
  },
];
