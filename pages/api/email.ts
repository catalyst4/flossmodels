import nodemailer from 'nodemailer'
import sendgridTransport from 'nodemailer-sendgrid-transport'

let options = {
    auth: {
      api_key: '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'
    }
}

let client = nodemailer.createTransport(sendgridTransport(options))

export default (req,res) => {
    if(req.method === 'POST') {

        const { name, email, option, message } = req.body

        if(!name || !email || !option || !message) {
            return res.json('Not all fields complete')
        }

        
        let emailMsg = {
            to: 'contact@flossmodels.com',
            from: email,
            subject: name + ': ' + option + ' Inquiry',
            text: name,
            html: message
        }

        client.sendMail(emailMsg, (err, info) => {
            if (err) {
                console.log(err)
                return res.json({ success: false })
            } else {
                console.log(err)
                return res.json({ success: true })
            }
        })    
    }
}