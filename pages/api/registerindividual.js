import ConnectMongo from '../../utilis/MongoDb/connectDb';
import Individual from '../../Model/register_individual';
const cloudinary = require('cloudinary').v2
const formidable = require('formidable')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARYY_API_SECRET
})

export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };


const AddIndividual = async (req, res) => {
    try{
        await ConnectMongo();
        const form = new formidable.IncomingForm({ keepExtensions: true });

        form.parse(req, async function (err, fields, files) {
            if(err){
                return res.status(400).json({
                    message: err.message,
                    status: false,
                    code: 400
                })
            }
           
          const schoolCert = files.schoolCert[0].filepath;
          const birthCert = files.birthCert[0].filepath;

          let {name, email, phone, nationality, gender, age, address, guarantorAddress, relationship,
            guarantorName, guarantorPhone} = fields;
        
            name = name[0]
            email = email[0]
            phone = phone[0]
            nationality = nationality[0]
            gender = gender[0]
            age = age[0]
            address = address[0]
            guarantorAddress = guarantorAddress[0]
            relationship = relationship[0]
            guarantorName = guarantorName[0]
            guarantorPhone = guarantorPhone[0]

            if(!name || !email || !phone || !nationality || !gender || !age || !address || !guarantorAddress || !relationship 
                || !guarantorName || !guarantorPhone || !schoolCert || !birthCert){
            return res.status(400).json({
                message: "please fill all required fields",
                code: 400,
                status: false
            })
          }

          const result =  await cloudinary.uploader.upload(schoolCert,{width: 2500, height: 3500, crop: "fill"})
          if(result){
            console.log(result)
            const response =  await cloudinary.uploader.upload(birthCert,{width: 2500, height: 3500, crop: "fill"})
            if(response){
                console.log(birthCert)
                    const newIndividual = new Individual({
                    schoolCert: result.secure_url,
                    cloudinaryIdSchool: result.public_id,
                    birthCert: response.secure_url,
                    cloudinaryIdBirth: response.public_id,
                     name,
                     email,
                     phone,
                     nationality,
                     gender,
                     age,
                     address,
                     guarantorAddress,
                     relationship,
                     guarantorName,
                     guarantorPhone,                   
          })
           

          const saveIndividual = await newIndividual.save();
          if(saveIndividual){
            return res.status(200).json({
                message: "saved successfully",
                code: 200,
                status: true
            })
          }
        }
    }
        })
    }
    catch(error){
        res.status(500).json({
            message: error.message,
            status: false,
            code: 500
        })
    }
}

export default AddIndividual;