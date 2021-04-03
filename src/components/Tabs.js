import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrescriptionBottle, faWineBottle, faMoneyCheckAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';

//imagenes alianzas. 
//pagos de facturas y bancos..
import Alcanos from "../imagen/alianzas/alcanos.jpg";
import Enel from "../imagen/alianzas/enel.jpg";
import Acuagyr from "../imagen/alianzas/acuagyr.jpg";
import Espuflan from "../imagen/alianzas/espuflan.jpg";
import Movil from "../imagen/alianzas/movil.jpg";

import bancopopular from "../imagen/alianzas/bancopopular.jpg";
import Bancooccidente from "../imagen/alianzas/Bancooccidente.jpg";
import bancodavivienda from "../imagen/alianzas/bancodavivienda.jpg";
import bancolombia from "../imagen/alianzas/bancolombia.jpg";
import bancobogota from "../imagen/alianzas/bancobogota.jpg";
import avvillas from "../imagen/alianzas/avvillas.jpg";
import bancosocial from "../imagen/alianzas/bancosocial.jpg";
//supermercados
import Exito from "../imagen/alianzas/exito.jpg";
import Jumbo from "../imagen/alianzas/jumbo.jpg";
import Olimpica from "../imagen/alianzas/olimpica.jpg";
import D1 from "../imagen/alianzas/d1.jpg";
import JB from "../imagen/alianzas/jyb.jpg";
import Ara from "../imagen/alianzas/ara.jpg";
import Algrano from "../imagen/alianzas/algrano.jpg";
import Supermercadosk from "../imagen/alianzas/supermercadosk.jpg";
//licoreras
import Mao from "../imagen/alianzas/licoresmao.jpg";
import Milicorera from "../imagen/alianzas/milicorera.jpg";
//droguerias
import Colsubsidio from "../imagen/alianzas/colsubsidio.jpg";
import Dogueriaalemana from "../imagen/alianzas/dogueriaalemana.jpg";
import Copifam from "../imagen/alianzas/copifam.jpg";
import Economia from "../imagen/alianzas/economia.jpg";
import Rebaja from "../imagen/alianzas/larebaja.jpg";
import Cruzverde from "../imagen/alianzas/cruzverde.jpg";
import Elfarmaceuta from "../imagen/alianzas/elfarmaceuta.jpg";
//domicilios
import Cerezaymar from "../imagen/alianzas/cerezaymar.jpg";
import Ppaisa from "../imagen/alianzas/ppaisa.jpg";
import Toscana from "../imagen/alianzas/toscana.jpg";
import Salome from "../imagen/alianzas/salome.jpg";
import Supercomida from "../imagen/alianzas/supercomida.jpg";
import Burgerk from "../imagen/alianzas/burgerk.jpg";
import Mim from "../imagen/alianzas/mim.jpg";
import Pizzanapoli from "../imagen/alianzas/pizzanapoli.jpg";
import Bouquetgarni from "../imagen/alianzas/bouquetgarni.jpg";
import Maderos from "../imagen/alianzas/maderos.jpg";
import Rakamandaka from "../imagen/alianzas/rakamandaka.jpg";
import Supercono from "../imagen/alianzas/supercono.jpg";
import Qbano from "../imagen/alianzas/qbano.jpg";
import Bodega from "../imagen/alianzas/bodegachef.jpg"
import Donjulioparilla from "../imagen/alianzas/donjulioparilla.jpg";
import Piqueteaderosanluis from "../imagen/alianzas/piqueteaderosanluis.jpg"

//menu
import pizzanapoli1 from "../imagen/menus/pizzanapoli1.jpg";
import pizzanapoli2 from "../imagen/menus/pizzanapoli2.jpg";
import toscana1 from "../imagen/menus/toscana1.jpg";
import toscana2 from "../imagen/menus/toscana2.jpg";
import superh1 from "../imagen/menus/superh1.jpg";
import superh2 from "../imagen/menus/superh2.jpg";
import superh3 from "../imagen/menus/superh3.jpg";
import mimegon from "../imagen/menus/mimegon.jpg";
import Bouquetgarni1 from "../imagen/menus/bouquetgarni1.jpg";
import Bouquetgarni2 from "../imagen/menus/bouquetgarni2.jpg";
import Bouquetgarni3 from "../imagen/menus/bouquetgarni3.jpg";
import Bouquetgarni4 from "../imagen/menus/bouquetgarni4.jpg";
import Bouquetgarni5 from "../imagen/menus/bouquetgarni5.jpg";
import Bouquetgarni6 from "../imagen/menus/bouquetgarni6.jpg";
import Bouquetgarni7 from "../imagen/menus/bouquetgarni7.jpg";
import Bouquetgarni8 from "../imagen/menus/bouquetgarni8.jpg";
import maderos from "../imagen/menus/maderos.jpg";
import rakamandaka1 from "../imagen/menus/rakamandaka1.jpg";
import rakamandaka2 from "../imagen/menus/rakamandaka2.jpg";
import supercono1 from "../imagen/menus/supercono1.jpg";
import supercono2 from "../imagen/menus/supercono2.jpg";
import supercono3 from "../imagen/menus/supercono3.jpg";
import supercono4 from "../imagen/menus/supercono4.jpg";
import supercono5 from "../imagen/menus/supercono5.jpg";
import king1 from "../imagen/menus/king1.jpg";
import king2 from "../imagen/menus/king2.jpg";
import bodegachef from "../imagen/menus/bodega.jpg"
import donjulioparrilla1 from "../imagen/menus/donjulioparrilla.jpg";
import bodegachef2 from "../imagen/menus/bodega.jpg"

//Licores
import Licoresmao1 from "../imagen/licores/licoresmao.jpg"
import Licoresmao2 from "../imagen/licores/licoresmao2.jpg"
import Licoresmao3 from "../imagen/licores/licoresmao3.jpg"
import Licoresmao4 from "../imagen/licores/licoresmao4.jpg"
import Licoresmao5 from "../imagen/licores/licoresmao5.jpg"
import Licoresmao6 from "../imagen/licores/licoresmao6.jpg"
import Licoresmao7 from "../imagen/licores/licoresmao7.jpg"
import Licoresmao8 from "../imagen/licores/licoresmao8.jpg"
import Licoresmao9 from "../imagen/licores/licoresmao9.jpg"
import Licoresmao10 from "../imagen/licores/licoresmao10.jpg"
import Licoresmao11 from "../imagen/licores/licoresmao11.jpg"
import Licoresmao12 from "../imagen/licores/licoresmao12.jpg"
import Licoresmao13 from "../imagen/licores/licoresmao13.jpg"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (

    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  modal: {
    position: 'absolute',
    width: 500,
    height: 500,
    backgroundColor: 'white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [pnapoli, setPnapoli] = useState(false);
  const [rtoscana, setRtoscana] = useState(false);
  const [scomida, setScomida] = useState(false);
  const [merengon, setMerengon] = useState(false);
  const [bouquet, setBouquet] = useState(false);
  const [rmaderos, setRmaderos] = useState(false);
  const [raka, setRaka] = useState(false);
  const [scono, setScono] = useState(false);
  const [king, setKing] = useState(false);
  const [bodega, setBodega] = useState(false);
  const [djuliop, setDjuliop] = useState(false);
  const [lmao, setLmao] = useState(false);


  const abricerrarpnapoli = () => {
    setPnapoli(!pnapoli);
  }

  const abricerrartoscana = () => {
    setRtoscana(!rtoscana);
  }

  const abricerrarscomida = () => {
    setScomida(!scomida);
  }

  const abricerrarmerengon = () => {
    setMerengon(!merengon);
  }

  const abricerrarbouquet = () => {
    setBouquet(!bouquet);
  }

  const abricerrarmaderos = () => {
    setRmaderos(!rmaderos);
  }

  const abricerrarraka = () => {
    setRaka(!raka);
  }

  const abricerrarscono = () => {
    setScono(!scono);
  }

  const abricerrarking = () => {
    setKing(!king);
  }

  const abricerrarbodega = () => {
    setBodega(!bodega);
  }

  const abricerrardjuliop = () => {
    setDjuliop(!djuliop);
  }

  const abricerrarlmao = () => {
    setLmao(!lmao);
  }


  //Modales
  const napoli = (
    <div className={classes.modal}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pizzanapoli1}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pizzanapoli2}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )

  const toscanar = (
    <div className={classes.modal}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={toscana1}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={toscana2}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )

  const scomidas = (
    <div className={classes.modal}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={superh1}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={superh2}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={superh3}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )

  const mimerengon = (
    <div className={classes.modal}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mimegon}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )

  const garnit = (
    <div className={classes.modal}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Bouquetgarni1}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Bouquetgarni2}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Bouquetgarni3}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Bouquetgarni4}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Bouquetgarni5}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Bouquetgarni6}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Bouquetgarni7}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Bouquetgarni8}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )

  const madeiros = (
    <div className={classes.modal}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={maderos}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )

  const rakamandaka = (
    <div className={classes.modal}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={rakamandaka1}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={rakamandaka2}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )

  const supercono = (
    <div className={classes.modal}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={supercono1}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={supercono2}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={supercono3}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={supercono4}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={supercono5}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )

  const kingburguer = (
    <div className={classes.modal}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={king1}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={king2}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )

  const Bodegadelchef = (
    <div className={classes.modal}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bodegachef}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )

  const LicoresMao = (
    <div className={classes.modal}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao1}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao2}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao3}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao4}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao5}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao6}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao7}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao8}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao9}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao10}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao11}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao12}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Licoresmao13}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )

  const Donjuliopar = (
    <div className={classes.modal}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={donjulioparrilla1}
            height="470px"
            width="470px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Pago De Facturas & Bancos" icon={<FontAwesomeIcon icon={faMoneyCheckAlt} style={{ fontSize: "2.5em" }} />} {...a11yProps(0)} />
            <Tab label="Domicilios & Comidas Rapidas" icon={<FontAwesomeIcon icon={faUtensils} style={{ fontSize: "2.5em" }} />} {...a11yProps(1)} />
            <Tab label="Licorerias" icon={<FontAwesomeIcon icon={faWineBottle} style={{ fontSize: "2.5em" }} />} {...a11yProps(2)} />
            <Tab label="Droguerias" icon={<FontAwesomeIcon icon={faPrescriptionBottle} style={{ fontSize: "2.5em" }} />} {...a11yProps(3)} />
            <Tab label="Super Mercados" icon={<ShoppingBasket />} {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={Alcanos}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={Enel}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={Acuagyr}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={Espuflan}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3">
                <img
                  src={Movil}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={bancopopular}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={Bancooccidente}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={bancodavivienda}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3">
                <img
                  src={bancolombia}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={bancobogota}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={avvillas}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={bancosocial}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={Pizzanapoli}
                  height="225px"
                  width="225px"
                  onClick={() => abricerrarpnapoli()}
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={Toscana}
                  height="225px"
                  width="225px"
                  onClick={() => abricerrartoscana()}
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={Supercomida}
                  height="225px"
                  width="225px"
                  onClick={() => abricerrarscomida()}
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={Mim}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                  onClick={() => abricerrarmerengon()}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3">
                <img
                  src={Bouquetgarni}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                  onClick={() => abricerrarbouquet()}
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={Maderos}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                  onClick={() => abricerrarmaderos()}
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={Rakamandaka}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                  onClick={() => abricerrarraka()}
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={Supercono}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                  onClick={() => abricerrarscono()}
                />
                <br />
              </div>
            </div>
            <br />
            <div className="row">
            <div className="col-md-3">
                <img
                  src={Burgerk}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                  onClick={() => abricerrarking()}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Bodega}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                  onClick={() => abricerrarbodega()}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Donjulioparilla}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                  onClick={() => abricerrardjuliop()}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Piqueteaderosanluis}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
            </div>
            <br />
            <div className="row">
            <div className="col-md-3">
                <img
                  src={Qbano}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Cerezaymar}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
            <div className="col-md-3">
                <img
                  src={Salome}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
            <div className="col-md-3">
                <img
                  src={Ppaisa}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={Mao}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                  onClick={() => abricerrarlmao()}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Milicorera}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={Colsubsidio}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Dogueriaalemana}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Copifam}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Economia}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3">
                <img
                  src={Rebaja}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Cruzverde}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Elfarmaceuta}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={Exito}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={Jumbo}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <br />
              <div className="col-md-3">
                <img
                  src={Olimpica}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <div className="col-md-3">
                <img
                  src={D1}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3">
                <img
                  src={JB}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Ara}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Algrano}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
              <div className="col-md-3">
                <img
                  src={Supermercadosk}
                  height="225px"
                  width="225px"
                  className='imgRedonda'
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <br />
        <br />
        <br />
      </div>

      <Modal
        open={pnapoli}
        onClose={abricerrarpnapoli}
      >
        {napoli}
      </Modal>

      <Modal
        open={rtoscana}
        onClose={abricerrartoscana}
      >
        {toscanar}
      </Modal>

      <Modal
        open={scomida}
        onClose={abricerrarscomida}
      >
        {scomidas}
      </Modal>

      <Modal
        open={merengon}
        onClose={abricerrarmerengon}
      >
        {mimerengon}
      </Modal>

      <Modal
        open={bouquet}
        onClose={abricerrarbouquet}
      >
        {garnit}
      </Modal>

      <Modal
        open={rmaderos}
        onClose={abricerrarmaderos}
      >
        {madeiros}
      </Modal>

      <Modal
        open={raka}
        onClose={abricerrarraka}
      >
        {rakamandaka}
      </Modal>

      
      <Modal
        open={scono}
        onClose={abricerrarscono}
      >
        {supercono}
      </Modal>

      <Modal
        open={king}
        onClose={abricerrarking}
      >
        {kingburguer}
      </Modal>

      <Modal
        open={bodega}
        onClose={abricerrarbodega}
      >
        {Bodegadelchef}
      </Modal>

      <Modal
        open={djuliop}
        onClose={abricerrardjuliop}
      >
        {Donjuliopar}
      </Modal>

      <Modal
        open={lmao}
        onClose={abricerrarlmao}
      >
        {LicoresMao}
      </Modal>
    </>
  );
}
