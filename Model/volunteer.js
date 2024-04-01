import  {Schema, model, models} from 'mongoose';

const volunteerSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    nationality: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    skills: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
}
);

const Volunteers = models.volunteers ||  model('volunteers', volunteerSchema);

export default Volunteers;