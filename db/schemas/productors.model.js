import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const productModel = Schema({
  user: { type: ObjectId, ref: 'users' },
  photo: { type: String, default: '' },
  name: { type: String, defualt: '' },
  cpf: { type: String, defualt: '' },
  cnpj: { type: String, defualt: '' },
  description: { type: String, default: '' },
  stauts: { type: String, default: 'INCOMPLETE' },
  location: { type: ObjectId, ref: 'locations' },
  followers: [{ type: ObjectId, ref: 'users' }],
  following: [{ type: ObjectId, ref: 'artists' }],
  musical_styles: [{ type: ObjectId, ref: 'musicalStyleOptions' }],
  main_phone: { type: String, defualt: '' },
  secondary_phone: { type: String, defualt: '' },
  whatsapp: { type: String, defualt: '' },
  telegram: { type: String, defualt: '' },
  contact_email: { type: String, defualt: '' },
  facebook: { type: String, defualt: '' },
  twitter: { type: String, defualt: '' },
  instagram: { type: String, defualt: '' },
  youtube: { type: String, defualt: '' },
  events: [{ type: ObjectId, ref: 'events' }],
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default productModel;
