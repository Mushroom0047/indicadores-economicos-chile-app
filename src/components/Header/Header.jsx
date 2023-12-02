import { useState } from 'react';
import logo from '../../assets/Logo Indicadores Chile.webp'
import './header.css'
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <header className='w-full flex mx-auto mt-5 md:px-5'>
      <div className="w-1/2">
        <a href='/'>
          <img
            className="w-12"
            src={logo}
            alt='logo menu'
          />
        </a>
      </div>
      <div className='w-1/2 flex justify-end'>
        <Button onClick={openDrawerRight} variant="text" className='hover:bg-teal-300 group'><i className='gg-menu text-teal-300 group-hover:text-white'></i></Button>
        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4"
          overlay={false}
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Indicadores Económicos Chile
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
          <List>
            <a href="/#/#banner"><ListItem>Inicio</ListItem></a>
            <a href="/#/#valores"><ListItem>Valores</ListItem></a>
            <a href="/#/#graficos"><ListItem>Gráficos</ListItem></a>
            <a href="/#/#convertidor"><ListItem>Convertidor</ListItem></a>
            <a href="/#/#faqs"><ListItem>Preguntas frecuentes</ListItem></a>
          </List>
          <div className="flex gap-2">
            <Button size="sm" variant="outlined" className='hover:bg-teal-300 transition-colors hover:text-white'>
              <a
                href="https://chromewebstore.google.com/detail/indicadores-econ%C3%B3micos-ch/ammnbjfbmidllmfjicddmdilkioodpld"
                target="blank"
              >AGREGAR A CHROME</a>
            </Button>
            <Button size="sm">Donar</Button>
          </div>
        </Drawer>
      </div>
    </header>
  )
}

export default Header