'use strict'
const nodemailer = require("nodemailer");

var controller = {
    sendMail: function (req, res) {
        require('dotenv').config(); //seguridad
        //Recojo los parametros que me lleguen
        var params = req.body;

        var emailData = {
            name: params.name,
            lastName: params.lastName,
            email: params.email,
            phone: params.phone,
            consult: params.consult,
            date: params.date
        }


        //var emailData=req.params.data;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, // generated ethereal user
                pass: process.env.PASSWORD, // generated ethereal password
            },
        });

        // send mail with defined transport object
        var mailOptions = {
            from: "Gestor de consulta", // sender address
            to: process.env.TO, // list of receivers
            subject: "Consulta de " + emailData.name + " " + emailData.lastName,
            text: "Telefono: " + emailData.phone + " email: " + emailData.email
        }

        //Send email
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return res.status(500).send({
                    message: "Error, email no enviado",
                    error: err
                })
            } else {
                return res.status(200).send({
                    message: "Email enviado!"
                });
            }
        })


    }

};

module.exports = controller;