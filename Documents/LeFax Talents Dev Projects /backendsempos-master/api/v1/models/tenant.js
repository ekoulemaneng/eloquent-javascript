const mongoose = require("mongoose")

const tenantSchema = new mongoose.Schema(
    {
        core_branch: { 
            type: String, 
            trim: true, 
            required: true 
        },
        business_type: { 
            type: String, 
            trim: true 
        },
          address: String,
    town: String,
    niu: String,
    rccm: String,
        db_name: { 
            type: String, 
            required: true, 
            unique: true 
        },
        owner_id: mongoose.ObjectId,
        owner_name: { 
            type: String, 
            required: true 
        },
        email: { 
            type: String, 
            unique: true, 
            required: true 
        },
        phone: String,
        country: { 
            type: String, 
            required: true 
        },
        phone_code: { 
            type: String, 
            required: true 
        },
        currency_code: { 
            type: String, 
            required: true 
        },
        sub_domain: { 
            type: String, 
            unique: true, 
            required: true 
        },
        isActivated: { 
            type: Boolean, 
            default: true, 
            required: true 
        },
        modules: [{ type: String, enum: ['treasury', 'products', 'marketing', 'services', 'payroll', 'orders', 'reservations', 'billing'] }],
        isCatalogOnline: { type: Boolean, default: true },
        logo: String
    },
    { 
        timestamps: true
    }
)

module.exports = mongoose.model('Tenant', tenantSchema)