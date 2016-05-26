/**
 * SubmissionController
 *
 * @description :: Server-side logic for managing Submissions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var sendgrid_api_key = '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';
var sendgrid  = require('sendgrid')(sendgrid_api_key);
module.exports = {
	

  /**
   * `SubmissionController.step1()`
   */
  step1: function (req, res) {
    if(req.method=="POST"&&req.param("Submission",null)!=null)
    {
      Submission.attributes=req.param("Submission",null);
      Submission.create(req.param("Submission")).exec(function createCB(err, created){
        if (err) {
          console.log(err);
          var values = req.param("Submission",null);
          return res.view("step1", {
            values: values,
            err: err
          });
        }
        else {
          console.log('Created user with name ' + created.first_name);
          var email_text = 'First name: ' + created.first_name + '<br>';
          email_text += 'Last name: ' + created.last_name + '<br>';
          email_text += 'Blog URL: ' + created.blog + '<br>';
          email_text += 'Email address: ' + created.email + '<br>';
          if (created.facebook && created.facebook != '')
          {
            email_text += 'Facebook: ' + created.facebook + '<br>';
          }
          if (created.pinterest && created.pinterest != '')
          {
            email_text += 'Pinterest: ' + created.pinterest + '<br>';
          }
          if (created.twitter && created.twitter != '')
          {
            email_text += 'Twitter: ' + created.twitter;
          }
          var payload   = {
            to      : 'ccn@thedailymeal.com',
            from    : 'ccn_sign_up@thedailymeal.com',
            subject : 'New CCN Sign up - ' + created.first_name + ' ' + created.last_name,
            html    : email_text
          }
          sendgrid.send(payload, function(err, json) {
            if (err) { console.error(err); }
            console.log(json);
          });
          res.redirect('submission/step2');
        }
      });
    }
    else
    {
      res.view('step1', {values:{}});
    }
  },

  /**
   * `SubmissionController.step2()`
   */
  step2: function (req, res) {
    res.view('step2');
  },

  /**
   * `SubmissionController.step3()`
   */
  step3: function (req, res) {
    res.view('step3');
  },

  /**
   * `SubmissionController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `SubmissionController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  }
};

