// MailchimpForm.js

import React from 'react';

const MailchimpForm = () => {
  return (
    <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      <style dangerouslySetInnerHTML={{ __html: `
        #mc_embed_signup{background:transparent; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
      ` }} />
      <div id="mc_embed_signup">
        <form action="https://gmail.us21.list-manage.com/subscribe/post?u=6c97b13bfff0551faae535089&amp;id=4d854faf2e&amp;f_id=0015ece6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
          <div id="mc_embed_signup_scroll">
            <h2 style={{marginBottom:'0', color:'#f3f2de'}} className='subscribeText'>Newsletters</h2>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL" style={{marginTop:'0', color:'#f3f2de'}} className='subscribeText'>Email Address <span className="asterisk">*</span></label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value="" />
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input type="text" name="b_6c97b13bfff0551faae535089_4d854faf2e" tabIndex="-1" value="" />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button subscribeText" style={{backgroundColor:'#f3f2de', color:'#5a5440'}} value="Subscribe" />
                
              </div>
            </div>
          </div>
        </form>
      </div>
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
      <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
        (function($) {
          window.fnames = new Array(); 
          window.ftypes = new Array();
          fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';
          fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';
          fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      ` }} />
    </div>
  );
};

export default MailchimpForm;
