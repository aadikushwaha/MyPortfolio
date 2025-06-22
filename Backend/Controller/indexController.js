const customerModal = require("../Modal/customerModal")
const dotenv = require('dotenv')
const { transporter } = require("../mailer")
dotenv.config(
    {
        path: '../env/secure.env'
    }
);

// const test = async (req, res) =>{
//  res.json({ message: '✅ Frontend & Backend connected successfully!' });}

const register = async (req, res) => {
    
    const { email, name } = req.body
    
    var isExist = await customerModal.findOne({ email })
  
    if (isExist) {
        return res.status(400).json({
            currentStatus: false,
            "msg": "Customer already exist"
 
        })
    }
      
    
try{
    var newCustomer = new customerModal(req.body)
    const customerrecord = await newCustomer.save()
    console.log(customerrecord);

   try {
     await transporter.sendMail({
        from:process.env.EMAIL_USER,
        to: email,
        subject:" Thank You for Contacting Aditya Kushwaha",
        text: `Dear ${name || 'Valued Customer'},

We sincerely appreciate you taking the time to reach out to us. Your message has been successfully received, and we are grateful for the opportunity to assist you.

At Aditya Kushwaha, we prioritize every query and feedback with the utmost attention. Our team is currently reviewing your request and will ensure a prompt and thoughtful response. Typically, we aim to get back to you within 24–48 hours.

Should your matter require immediate assistance, please don’t hesitate to contact us directly at 8103489477/adityakushwaha9477@gmail.com     for faster support.

Once again, thank you for connecting with us. We value your trust and look forward to serving you.

Warm regards,
Aditya Kushwaha
adityakushwaha9477@gmail.com
8103489477`
               
   })} catch (error) {
       console.log(error);
            
   }


    res.status(200).json({
        
        success:true,
        message:"We recieved your message, Our Team will contact you soon. Thankyou"
    })
    }
    catch(err){
        console.error("Error in sending");
    res.status(500).json({ success: false, message: "Something went wrong." });
    }
}

module.exports = {
    register
 }