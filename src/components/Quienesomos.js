import React, { Component } from 'react';
import Maps from './Maps';
import Whatsapp from './Whatsapp';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
});

export default function Quienesomos() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                        <h5><b>LA VISION</b></h5>
                        <br/>
                        <p align="justify"><b> Ser la empresa líder en la región en la prestación de
                            servicios a domicilios cumpliendo lo más altos estándares
                            de calidad</b>
                           </p>
                    </div>
                    <br />
                    <div className="col-md-6">
                    <h5><b>LA MISION</b></h5>
                    <br />
                    <p align="justify"><b>Nuestra empresa de domicilios se destaca por su seriedad
                                    y el compromiso que tenemos con nuestros clientes,
                                    por ello contamos con excelentes alianzas comerciales
                                    para lograr subsanar las necesidades de la población
                                    además tenemos personal de excelente calidad humana.</b></p>
                    </div>
                   

                </div>
                <br />
                <div className={classes.root}>
                    <Maps />
                </div>
                <Whatsapp />
                <br />
            </div>
        </>
    )

}
