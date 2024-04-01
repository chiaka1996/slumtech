import  {Schema, model, models} from 'mongoose';

const registerSchema = new Schema({
    schoolName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    registrationNumber: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    },

    studentsNumber: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
}
);

const RegisterSchool = models.register_school ||  model('register_school', registerSchema);

export default RegisterSchool;
