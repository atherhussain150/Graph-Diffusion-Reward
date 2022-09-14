
   
// FUNCTIONS
// Show an alert if the participants say that they have questions
function questionAlert(val) {
    if (val == "No") {
        alert('If you do have questions and would still like to participate please contact Mr Omer Farooq via email at farooq@rhrk.uni-kl.de before continuing and close ' + 
              'the web page. If you do not have any questions please click the "I did not have any questions" option');
    } 
}



// INFORMATION SHEET AND CONSENT FORM
var consentForm = {
    type: jsPsychSurveyHtmlForm,
    trial_duration: 10000,
    stimulus:"test",
    on_load: function() {
        btn = document.querySelector('.jspsych-btn');
        btn.classList.remove('.jspsych-btn');
        btn.classList.add('consent-btn');
        jsPsych.data.addProperties({
            ParticipantId: localStorage.getItem("participantID"),
            deviceInfo: localStorage.getItem("deviceInfo"),
            configurationID: localStorage.getItem("configurationID"),
            congruentIncongruent: localStorage.getItem("congruentIncongruent"),
            experimentalPhase: localStorage.getItem("experimentalPhase"),
            timeStamp: localStorage.getItem("timeStamp")
        });
    },

    preamble: 
    '<div class="contact">' + 
        '<img src="images/zi-logo-rgb.png" width="200"</img>' + 
        '<p><b>Department of Clinical Psychology</b><br>' + 
        'Head:<br> Prof. Dr. Peter Kirsch<br><br>' + 
        '<b>RG Psychology and Neurobiology <br>' + 
            'of Sleep and Memory</b><br>' + 
        'Head:<br> Dr. Gordon Feld<br><br>' + 
        'Phone  +49 621 1703-6540<br>' + 
        'Fax    +49 621 1703-6505<br>' + 
        '<a href = "mailto: gordon.feld@zi-mannheim.de" target="_blank">gordon.feld@zi-mannheim.de</a><br>' + 
        '<a href="https://www.zi-mannheim.de/" target="_blank">https://www.zi-mannheim.de/</a>' + 
    '</div>' +
        
        '<h1>Information Sheet and to Act as a Research Subject</h1>' + 
        "<h2>Study Title: <i>Look for Gold Mines</i></h2>" + 

        '<div style="outline:3px solid red; outline-offset:5px;">' + 
        '<h3>IMPORTANT NOTE</h3>' + 
        '<p>Please note that this study is just have a learning Phase: The whole phase will almost take 30 minutes. You will only receive ' + 
        'payment if you complete the study. Furthermore, data quality is crucial for us: If data checks indicate implausible response patterns or that ' +
        "you were not paying attention to the task, this may have a negative impact on your Prolific rating. However, don't worry that you will not be able to fullfil " + 
        'the requirements - we will tell you exactly what to do and if you follow the instructions, you will meet the quality criteria easily.</p>' +
        '</div>' +

        'Dear participant,<br>' +
        'We are asking you if you would be willing to participate in our research project. ' +
        'Participation in this study is voluntary. The data that is collected in this research project is subject to strict data protection regulations. ' + 
        'This research project is being conducted by Dr Gordon Feld. If you are interested, we will be happy to inform you about the results of this research ' + 
        'project. In this information sheet, we will explain the most important points about this research project to you and answer your questions by email or ' + 
        'via the anonymised Prolific messaging system, should any arise.' +

        '<h3>Why are we carrying out this research project?</h3>' + 
        '<p>' + 
        'With this experiment, we aim to better understand how learning works. Specifically, we want to know why somethings are more easy to learn than others.' +
        '</p>' +
        
        '<h3>What do I have to do when I participate? - What happens to me when I participate?</h3>' + 
        '<p>' + 
        '<li>If you agree to participate, you will complete the entire study online in your browser.</li>' +
        '<li>You will complete a learning task for the study. Initially you will be asked to answer a short questionnaire about your demographic ' + 
        'information and then you will be shown various pictures and you have to learn them.</li>' +

        '<h3>What are the benefits and risks involved in this research project?</h3>' + 
        '<p>' + 
        '<li>Other than the compensation you receive, there is no direct benefit to you from participating this study. The investigator, however, may learn ' + 
        'more about human learning, so you are contributing to scientific progress and society may benefit from the knowledge that is acquired in this experiment.</li>' +
        '<li>Participation in this study is not associated with any risks. However, you may experience discomforts, e.g. frustration, boredom and/or fatigue ' + 
        'while participating in our study. But if you experience any discomfort you may withdraw from the experiment at any time by closing the browser.</li>' + 
        '</p>' + 

        'By providing your consent at the end of this document, you attest that you are participating voluntarily and that you have understood the contents of ' + 
        'the entire document.' +

        '<h2>Detailed Information</h2>' +
        '<h3>1. Aim and Selection</h3>' +
        'This experiment is referred to as a research project throughout. If you participate in this research project, you are a participant. ' +
        'In this research project, we want to investigate why some things are more learnable than others. We are asking you to participate in this project ' + 
        'because anyone aged 18-35 can participate.' +

        '<h3>2. General Information</h3>' +
        ' The purpose of this study is to understand how human memory works. We are interested in understanding why some things are more memorable than others. ' + 
        'For example, an image may stand out to you more because you know the person shown in that image and so are more likely to remember it. Therefore, by ' + 
        'participating in this experiment you will help to increase our general understanding of how memory works and specifically what your brain chooses to ' +
        'remember. This research project is being conducted in line with regulations and laws. We also follow all internationally recognised guidelines and the ' + 
        'responsible ethics committee has reviewed and evaluated this research project.' +

        '<h3>3. Procedure</h3>' +
        'The procedure is the same for all participants. You will first answer some questions about yourself including demographic information and then ' +
        'complete a short reaction time task. Next you will be shown some images. Your memory for them will be tested approximately 22-26 hours later. ' + 
        'Therefore, this research project will occur over two sessions. The first session will last no longer than 40 minutes and the second session will ' + 
        'last no longer than 20 minutes.' +

        '<h3>4. Benefits</h3>' +
        'Other than the compensation you receive, there is no direct benefit to you from participating this study. The investigator, however, may learn ' + 
        'more about human memory, so you are contributing to scientific progress and society may benefit from the knowledge that is acquired in this experiment.' +

        '<h3>5. Voluntary Participation and Obligations</h3>' +
        'You are participating voluntarily. If you do not wish to participate in this research project or wish to withdraw your participation later you may ' + 
        'do so without justification. If you participate in this experiment, you are asked to adhere to the specifications and requirements of the research ' + 
        'project throughout.' +

        '<h3>6. Risks and Burdens</h3>' +
        'The research project does not expose you to any risks.' +

        '<h3>7. Results</h3>' +
        'If you are interested, we can inform you about the overall results once the research project has finished.' +

        '<h3>8. Confidentiality of data</h3>' +
        '<h4>8.1. Data processing and encryption</h4>' +
        'The legal basis for processing your data is provided by your voluntary consent to participate in this research project (Art. 6(1)(c) DSGVO). This ' + 
        'research project is hosted on a secure internet connection (with a https certificate) and data are stored on a DGVSO compliant server under the ' + 
        'administration of the IT department at the Central Institute of Mental Health.<br>' +
        'In this research project, Dr Gordon Feld, <a href = "mailto: Gordon.Feld@zi-mannheim.de" target="_blank">Gordon.Feld@zi-mannheim.de</a>, is ' + 
        'responsible for data processing.<br>' +
        'In this research project, data about you will be collected and processing, partly in automated form. During data collection, your data will be ' + 
        'encrypted. Encryption means that no information that could be used to identify you is stored (name, date of birth, etc.) and you will only be known ' + 
        'by a code (= pseudo-anonymised) and your Prolific ID. Your Prolific ID is only known to you, Prolific and the researchers involved in this study. ' + 
        'The personal data that you may provide (e.g., your personal email address due to contacting us via email instead of the anonymised Prolific ' + 
        'messaging system) will be securely and temporarily stored during any correspondence on a password protected email account hosted at the Central ' + 
        'Institute of Mental Health under the administration of IT, which is DGVSO compliant. Once any correspondence is completed, the correspondence ' + 
        'alongside your email address will be deleted. People who do not have access to the data cannot identify you. The list of anonymised participants ' + 
        'always remains in the Department of Clinical Psychology, ZI, Mannheim.<br>' +
        'Only very few professionals will see your encrypted data, and only in order to perform tasks necessary within the research project. For example, ' + 
        'your Prolific ID will be used to award payment for completing the experiment. These persons are subject to the duty of confidentiality. As soon as ' +
        'the research purposes permit it, your Prolific ID will be deleted, so it will not be possible to connect your data to your Prolific ID anymore. At ' + 
        'this point, the data will be anonymous. As a participant, you have the right to inspect and correct your data. Please note that this is only ' + 
        'possible as long as your Prolific ID has not yet been deleted, since at this point, we will not know which data belong to you anymore. The data ' + 
        'will be stored permanently, secured against unauthorised access, after the research project has ended or been discontinued. In addition, the ' + 
        'anonymised data is made available to other researchers in an internet-based research data bank called PsychArchives (Leibniz Institute of ' +
        'Psychology (ZPID), <a href = https://leibniz-psychology.org/angebote/archivieren/>https://leibniz-psychology.org/angebote/archivieren/</a>, the ' + 
        'servers are located in Germany). In doing so, we follow the recommendations of the German Research Foundation (DFG), which recommends that all ' + 
        'anonymised data collected in this study be made available to the public. This is important to ensure quality assurance in terms of verifiability ' + 
        'and reproducibility of scientific results (e.g., results in publications) and to allow re-use of the data. Reproducibility means that other ' + 
        'researchers can check whether the results are correct and whether they would arrive at identical results.' +
        
        '<h4>8.2. Data Protection</h4>' +
        'All data protection requirements are strictly adhered to. It is possible that your data may have to be transferred in anonymised form to countries ' + 
        'outside the EU, for example for publication, and may be made available to other researchers. The same level of data protection cannot be guaranteed ' + 
        'abroad as in the EU. However, the data passed on is anonymised and can no longer be linked to your person.' +

        '<h3>9. Withdrawal from the Research Project</h3>' +
        'You can revoke your consent in writing or verbally at any time without giving reasons and without incurring any disadvantage. If you ' +
        'revoke your consent, no further data will be collected. However, the data processing that took place until the revocation remains lawful.<br>' +
        'In the event of revocation, you can also request the deletion of your data. Please note that this is only possible if the list of anonymous Prolific ' + 
        'IDs has not yet been destroyed, as we will no longer be able to allocate your data from this point on.<br>' +
        'If you have any concerns about data processing and compliance with data protection requirements, you can also contact the following data ' + 
        'protection officer:' +

        '<p>' + 
            'Dr. Regina Mathes and Ms. Kremena Toteva, Datenschutzbeauftragte (data protection officer)<br>' + 
            'J 5, 68159 Mannheim<br>' + 
            'E-Mail: <a href = "mailto: datenschutzbeauftragter@zi-mannheim.de" target="_blank">datenschutzbeauftragter@zi-mannheim.de</a>' + 
        '</p>' + 
        
        'You have the right to complain to any data protection supervisory authority. You can find a list of the supervisory authorities in Germany at<br>' +
        '<a href = https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html>https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>' +

        '<h3>10. Compensation for your time</h3>' +
        'If you complete both the first and second sessions of this research project you will be compensated £6.50. In addition, you can receive extra payment ' +
        'depending on your score in the task: All 200 participants will be ranked according to their score (gems won in the task). Participants ranked 1-4 receive ' +
        '£25, participants ranked 5-8 receive £20, rank 9-12 receive £15 and rank 13-50 receive £7.50. If you win, the bonus will be rewarded to you after all ' + 
        'participants have completed the experiment.' +

        '<h3>11. Funding</h3>' +
        'This study is mainly funded by the Central Institute of Mental Health, Mannheim, Germany.' +

        '<h3>12. Contact Person(s)</h3>' +
        'You may ask questions about project participation at any time via the anonymous Prolific messaging service. In addition, if you have any ' + 
        'uncertainties that arise during the research project or afterwards, please contact:' +

        '<p>' + 
            '<b>Omer Farooq</b><br>' +
            'Department of Clinical Psychology<br>' + 
            'Department of Cognitive Science<br>TU Kaiserslautern<br>' + 
            'J 5, 68159, Kaisersalutern, Germany<br>' +
            'Email: <a href = "mailto: Farooq@rhrk.uni-kl.de" target="_blank">Farooq@rhrk.uni-kl.de</a><br>' +
        '</p>' + 

        '<hr>' + 
        
        '<h1>Declaration of Consent</h1>' + 
        '<h2>Study Title: <i>The Memory Merchant</i></h2>' + 

        'Please read this form carefully. Please ask if there is anything you do not understand or would like to know. Your consent is required ' +
        'for participation.' +

        '<h3>Please answer the following questions</h3>' + 
    
    '</div>',
    
    html:
    '<div class="questions">' + 
        '<p>I have been informed in writing about the purpose, the procedure of the research project, possible advantages and disadvantages as well as ' + 
        'possible risks.</p>' + 
        '<p>' +
            '<select class="large-select" id="consent0" required="required" name="consentSelect0" class="questions">' + 
                '<option value=""></option>' + 
                '<option value="Yes">Yes</option>' + 
                '<option value="No">No</option>' + 
            '</select>' + 
        '</p>' +
    
        '<p>I am taking part in this research project voluntarily and accept the content of the written information given on the above-mentioned research ' + 
        'project. I have had sufficient time to make my decision.</p>' + 
        '<p>' + 
            '<select class="large-select" id="consent1" required="required" name= "consentSelect1">' + 
                '<option value=""></option>' + 
                '<option value="Yes">Yes</option>' + 
                '<option value="No">No</option>' + 
            '</select>' + 
        '</p>' + 
    
        '<p>My questions in connection with participation in this research project have been answered. I can save the written information on my computer.</p>' + 
        '<p>' + 
            '<select class="large-select" id="consent2" required="required" name="consentSelect2" onchange="questionAlert(this.value)">' + 
                '<option value=""></option>' + 
                '<option value="Yes">Yes</option>' + 
                '<option value="No">No</option>' + 
                '<option value="I did not have any questions">I did not have any questions</option>' + 
            '</select>' + 
        '</p>' + 
    
        '<p>I agree that the competent experts of the project management and the ethics committee responsible for this research project may process my ' + 
        'personal data in the way described above (e.g., if you contact us via email, instead of using your Prolific ID, to answer any questions you might ' + 
        'have about the experiment we will securely store your correspondence and email address and delete it immediately after correspondence has ended or ' + 
        'when no further responses are required.) in strict compliance with confidentiality.</p>' + 
        '<p>' + 
            '<select class="large-select" id="consent3" required="required" name="consentSelect3">' + 
                '<option value=""></option>' + 
                '<option value="Yes">Yes</option>' + 
                '<option value="No">No</option>' + 
            '</select>' + 
        '</p>' + 
    
        '<p>I know that my personal data can only be passed on in encrypted form for research purposes for this research project, including abroad. ' + 
        'Data protection according to EU standards cannot be guaranteed abroad. However, your data will only be passed on in anonymised form, so that no ' + 
        'assignment to your person is possible.</p>' + 
        '<p>' + 
            '<select class="large-select" id="consent4" required="required" name="consentSelect4">' + 
                '<option value=""></option>' + 
                '<option value="Yes">Yes</option>' + 
                '<option value="No">No</option>' + 
            '</select>' + 
        '</p>' + 
    
        '<p>I can withdraw from participation at any time and without giving reasons. The data and samples collected up to that point will still be used ' + 
        'for the evaluation of the research project.<p>' + 
            '<select class="large-select" id="consent5" required="required" name="consentSelect5">' + 
                '<option value=""></option>' + 
                '<option value="Yes">Yes</option>' + 
                '<option value="No">No</option>' + 
            '</select>' + 
        '</p>' + 
    
        '<p>I agree that my data may continue to be used in anonymised form if I withdraw my consent.</p>' + 
        '<p>' + 
            '<select class="large-select" id="consent6" required="required" name="consentSelect6">' + 
                '<option value=""></option>' + 
                '<option value="Yes">Yes</option>' + 
                '<option value="No">No</option>' + 
            '</select>' + 
        '</p>' + 

        '<p><b>I consent to the participation and processing of the above data.</b></p>' + 
        '<p>' + 
            '<select class="large-select" id="consent7" required="required" name="consentSelect7">' + 
                '<option value=""></option>' + 
                '<option value="Yes">Yes</option>' + 
                '<option value="No">No</option>' + 
            '</select>' + 
        '</p>' + 
    '</div>',
    
    button_label: 'Continue',
    button_html: '<button class="jspsych-btn" tabindex="-1">%choice%</button>',

    data: { trial: 'consent_form' },

    on_finish: function(data) {
        // Stringify responses because an array cannot be saved into the data base.
        data.response = JSON.stringify(data.response);
        var progress = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(progress + progress_increment);
    }
};

  // Message when participants are excluded from the experiment
  var noConsent = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
    '<div class="instructions" style="font-size: 30px">' + 
      "<b>You did not consent to participate in the experiment.</b><br>" +
      "Thank you for your time! You can close your browser now." +
    '</div>',
    choices: "NO_KEYS",
    on_finish: function() {
        jsPsych.data.addProperties({status: "noConsent"});
        jsPsych.endExperiment();
    }
  };

// Conditional: If participants did not give their consent, end experiment
var ifNoConsent = {
    timeline: [noConsent],
    conditional_function: function() {
      // Extract consent form answers
      var consent = jsPsych.data.getLastTrialData().values()[0].response;
      consent = JSON.parse(consent);
      consent = Object.keys(consent).map(function (key) { return consent[key]; })
  
      // Does the consent form contain at least one "no" as an answer?
      // If so, show end of experiment
      if (consent.some(r=> "No".includes(r))) {
        return true;
      } else {
        return false;
      }
    }
  };