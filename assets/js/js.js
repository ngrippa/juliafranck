
(function () {

    const jf = (function () {
        "use strict";

	      function encodeEmails() {
	      	const mails = document.querySelectorAll('.mail');
	      	mails.forEach((m)=> {
                const target = m.dataset.user || 'nemo.grippa+juliafranck';
                const domain = m.dataset.domain || 'gmail.com';
                const link = `${target}@${domain}`;	      		
                const text = m.textContent || link;
	      		const a = document.createElement('a');
	      		a.href = `mailto:${link}`;
	      		a.textContent = text;
	      		m.append(a);
	      	});
	      }

	      const initModule = function () {
	        encodeEmails();
        };
        // End public method /initModule/

        // return public methods
        return {
            initModule: initModule
        };
        //------------------- END PUBLIC METHODS ---------------------
    }());

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', jf.initModule);
    } else {  // `DOMContentLoaded` has already fired
        jf.initModule();
    }

})();