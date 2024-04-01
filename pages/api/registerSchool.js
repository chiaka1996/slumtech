import ConnectMongo from '../../utilis/MongoDb/connectDb';
import modelSchool from '../../Model/register_school';

const RegisterSchool = async (req, res) => {
    try{
        await ConnectMongo()
        const {schoolName, email, registrationNumber, phone, address, country, studentsNumber} = req.body;

        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

        if(!schoolName || !email || !registrationNumber || !address || !country || !studentsNumber || !phone){
            return res.status(400).json({
                message: "please fill all fields",
                status: false,
                code: 400
            })
        }

        if(schoolName.length < 2){
            return res.status(400).json({
                message: "name should be a minnimum of 2 characters",
                status: false,
                code: 400
            })
        }

        if(!emailRegex.test(email)){
            return res.status(400).json({
                message: "invalid email",
                status: false,
                code: 400
            })
        }

        const saveSchool = new modelSchool({
            schoolName,
            email,
            registrationNumber,
            phone,
            address,
            country,
            studentsNumber
        })

        const response = await saveSchool.save()

        if(response){
            return res.status(200).json({
                message: "registered successfull",
                status: true,
                code: 200
            })
        }



    }
    catch(error){
        res.status(500).json({
            message: error.message,
            status: false,
            code: 500
        })
    }
}

export default RegisterSchool;