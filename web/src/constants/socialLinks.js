import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { DiApple } from 'react-icons/di';

// add reddit and other social media links
export const socialLinks = [
  {
    name: 'youtube',
    url: 'https://www.youtube.com/DukeOfficial',
    icon: <FaYoutube />,
  },
  {
    name: 'instagram',
    url: 'https://www.youtube.com/duke_atlas',
    icon: <FaInstagram />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/DukeAtlas',
    icon: <FaFacebook />,
  },
  {
    name: 'twitter',
    url: 'https://www.twitter.com/duke_atlas',
    icon: <FaTwitter />,
  },
  {
    name: 'Apple',
    url: 'https://www.apple.com/duke',
    icon: <DiApple />,
  },
];
