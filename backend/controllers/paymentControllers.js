
import crypto from 'crypto';
import axios from 'axios'
import dotenv from "dotenv";
dotenv.config()

export const newPayment = async (req, res) => {
    try {
        const merchantTransactionId = req.body.transactionId;
        const data = {
            merchantId: 'M' + Date.now(),
            merchantTransactionId: merchantTransactionId,
            merchantUserId: 'PGTESTPAYUAT',
            name: req.body.name,
            amount: req.body.amount * 100,
            redirectUrl: `http://localhost:4000/api/status/${merchantTransactionId}`,
            redirectMode: 'POST',
            mobileNumber: req.body.number,
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        };
        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' + 1;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        const prod_URL = "https://mercury-uat.phonepe.com/v3/debit"
        const options = {
            method: 'POST',
            url: prod_URL,
            headers: {
                accept: 'text/plain',
                'Content-Type': 'application/json',
                'X-CALLBACK-URL': 'https://www.demoMerchant.com/callback',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        };

        axios.request(options)
        .then(function (response) {
          console.log("Response data:", response.data);
      
          // Check if the expected properties exist before accessing them
          if (response.data && response.data.data && response.data.data.instrumentResponse && response.data.data.instrumentResponse.redirectInfo) {
            return res.redirect(response.data.data.instrumentResponse.redirectInfo.url);
          } else {
            console.error("Invalid response format");
            res.status(500).send({
              message: "Internal Server Error",
              success: false
            });
          }
        })
        .catch(function (error) {
            console.error("Axios error:", error);
        
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received. Request details:", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error setting up the request:", error.message);
            }
        
            res.status(500).send({
                message: "Axios request failed",
                success: false
            });
        });
        

    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

export const checkStatus = async(req, res) => {
    const merchantTransactionId = res.req.body.transactionId
    const merchantId = res.req.body.merchantId

    const keyIndex = 1;
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + 1;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + "###" + keyIndex;

    const options = {
    method: 'GET',
    url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`,
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum,
        'X-MERCHANT-ID': `${merchantId}`
    }
    };

    // CHECK PAYMENT TATUS
    axios.request(options).then(async(response) => {
        if (response.data.success === true) {
            const url = `http://localhost:3000/success`
            return res.redirect(url)
        } else {
            const url = `http://localhost:3000/failure`
            return res.redirect(url)
        }
    })
    .catch((error) => {
        console.error(error);
    });
};
