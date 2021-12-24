import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'hello@juicy-auto.ru', // generated ethereal user
        pass: '', // generated ethereal password
    },
});

class FormsController {

    async send(req, res) {

        let message = `<h1>Привет друг! У нас новый клиент.</h1><br>
        Имя: ${req.body.inputName},<br>
        Телефон: ${req.body.inputPhone}
        `

        let info = await transporter.sendMail({
            from: '"Juicy Auto Bot" <hello@juicy-auto.ru>', // sender address
            to: "roman.alekseevich1@yandex.ru", // list of receivers
            subject: "Заявка с сайта", // Subject line
            html: message, // html body
        });

        res.status(200).json({ status: 'ok' })
    }
}

export default new FormsController();