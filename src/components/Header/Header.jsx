import { useState } from 'react';
import logo from '../../assets/Logo Indicadores Chile.webp'
import './header.css'
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const Header = () => {
  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  
  return (
    <div className='w-full flex mx-auto px-8 mt-5'>
      <div className="w-1/2">
        <img
          className="w-12"
          src={logo}
        />
      </div>
      <div className='w-1/2 flex justify-end'>
        <Button onClick={openDrawerRight} variant="text"><i className='gg-menu'></i></Button>
        <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
      </div>
    </div>
  )
}

export default Header