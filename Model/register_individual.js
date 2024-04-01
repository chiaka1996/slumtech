import  {Schema, model, models} from 'mongoose';

const registerIndividualSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    nationality: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    guarantorName: {
        type: String,
        required: true
    },

    relationship: {
        type: String,
        required: true
    },

    guarantorPhone: {
        type: String,
        required: true
    },

    guarantorAddress: {
        type: String,
        required: true
    },
    
    schoolCert: {
        type: String,
        required: true
    },

    cloudinaryIdSchool: {
        type: String,
        required: true
    },

    birthCert: {
        type: String,
        required: true
    },

    cloudinaryIdBirth: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);

const RegisterIndividual = models.register_individual ||  model('register_individual', registerIndividualSchema);

export default RegisterIndividual;