/**
* Submission.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    first_name : { 
      type: 'string',
      required: true 
    },

    last_name : { 
      type: 'string',
      required: true  
    },

    blog : { 
      type: 'string',
      url: true,
      required: true  
    },

    email : { 
      type: 'string',
      email: true,
      required: true  
    },

    facebook : { 
      type: 'string'
    },

    pinterest : { 
      type: 'string'
    },

    twitter : { 
      type: 'string'
    }
  }
};

