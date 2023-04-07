import Joi, {Schema} from 'joi';
import { ClientSchema } from '../protocols/Client';


export const clientSchema: Schema<ClientSchema> = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required()
})