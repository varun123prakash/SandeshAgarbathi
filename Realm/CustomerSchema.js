const CustomerSchema = {
  name: 'Customer',
  properties: {
    _id: 'string',
    id: 'int?',
    code: {type: 'string', indexed: true},
    name: {type: 'string', indexed: true},
    email: 'string',
    addressLine1: 'string?',
    addressLine2: 'string?',
    addressLine3: 'string?',
    addressLine4: 'string?',
    city: 'string?',
    state: 'string?',
    country: 'string?',
    pincode: 'string?',
    groupId: 'int',
    phoneNumber: 'string?',
    mobileNumber: 'string?',
    contactPerson: 'string?',
    gstNo: 'string?',
    addedBy: 'string?',
    addedOn: {type: 'date?', default: new Date()},
    changedBy: 'string?',
    changedOn: 'date?',
    remarks: 'string?',
    inActive: {type: 'string', default: 'N'},
    isSynced: {type: 'bool', default: false},
    isDeleted: {type: 'bool', default: false},
    isUpdated: {type: 'bool', default: false},
  },
  primaryKey: '_id',
};

export default CustomerSchema;
