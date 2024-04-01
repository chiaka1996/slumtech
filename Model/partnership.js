import  {Schema, model, models} from 'mongoose';

const partnershipSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },
    
    type: {
        type: String,
        required: true
    },

    partnerDetails: {
        type: String,
        required: true
    },

    additionalInformation: {
        type: String,
        required: true
    },
},
{
    timestamps: true
}
);

const partnerships = models.partnerships ||  model('partnerships', partnershipSchema);

export default partnerships;