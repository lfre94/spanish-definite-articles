// set up experiment logic for each slide
function make_slides(f) {
  var slides = {};

  // set up initial slide
  slides.i0 = slide({
    name: "i0",
    start: function() {
      exp.startT = Date.now();
    }
  });

  // set up the first example slide
  slides.example1 = slide({
    name: "example1",

    // this is executed when the slide is shown
    start: function() {
      // hide error message
      $('.err').hide();

      this.init_sliders();

    },

    // this is executed when the participant clicks the "Continue button"
    button: function() {
      exp.go();
    },

    button: function() {
      this.felicity = exp.felicityPost;
      this.affect = exp.affectPost;
      // if ((this.felicity) && (this.affect)){
      if ((this.felicity != null) && (this.felicity < .5)){
        this.log_responses();
        exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
        // _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
      } else {
        $('.err').show();
      }
    },


    // this initializes the slider
    init_sliders : function() {
      // utils.make_slider("#affect_slider_ex_one", function(event, ui) {
      //   exp.affectPost = ui.value;
      // });
      utils.make_slider("#felicity_slider_ex_one", function(event,ui) {
        exp.felicityPost = ui.value;
      });
    },


    log_responses: function() {
      // add response to exp.data_trials
      // this data will be submitted at the end of the experiment
      exp.data_trials.push({
        "slide_number_in_experiment": exp.phase,
        "id": "example1",
        "response": this.radio,
        "strangeSentence": "",
        "sentence": "",
        "felicity_rating": this.felicity,
        // "affect_rating": this.affect,
      });
    },
  });

  // set up slide for second example trial
  slides.example2 = slide({
    name: "example2",

// this is executed when the slide is shown
    start: function() {
      // hide error message
      $('.err').hide();

      this.init_sliders();

    },

    // this is executed when the participant clicks the "Continue button"
    button: function() {
      exp.go();
    },

    button: function() {
      // this.felicity = exp.felicityPost;
      this.affect = exp.affectPost;
      // if ((this.felicity) && (this.affect)){
      if ((this.affect != null) && (this.affect > .5)){
        this.log_responses();
        exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
        // _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
      } else {
        $('.err').show();
      }
    },


    // this initializes the slider
    init_sliders : function() {
      utils.make_slider("#affect_slider_ex_two", function(event, ui) {
        exp.affectPost = ui.value;
      });
      // utils.make_slider("#felicity_slider_ex_two", function(event,ui) {
      //   exp.felicityPost = ui.value;
      // });
    },


    log_responses: function() {
      // add response to exp.data_trials
      // this data will be submitted at the end of the experiment
      exp.data_trials.push({
        "slide_number_in_experiment": exp.phase,
        "id": "example2",
        "response": this.radio,
        "strangeSentence": "",
        "sentence": "",
        // "felicity_rating": this.felicity,
        "affect_rating": this.affect,
      });
    },
  });

  // set up slide for third example trial

  slides.example3= slide({
    name: "example3",

    start: function() {
      // hide error message
      $(".err").hide();
    },

    // handle button click
    button: function() {
      exp.go();
    },


    log_responses: function() {
      exp.data_trials.push({
        "slide_number_in_experiment": exp.phase,
        "id": "example3",
        "response": this.radio,
      });
    }
  });

  // set up slide with instructions for main experiment
  slides.startExp = slide({
    name: "startExp",
    start: function() {
    },
    button: function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    },
  });

  // slides.example3= slide({
  // name: "example3",

  // // this is executed when the slide is shown
  //   start: function() {
  //     // hide error message
  //     $('.err').hide();

  //     this.init_sliders();

  //   },

  //   // this is executed when the participant clicks the "Continue button"
  //   button: function() {
  //     exp.go();
  //   },

  //   button: function() {
  //     // this.felicity = exp.felicityPost;
  //     this.affect = exp.affectPost;
  //     // if ((this.felicity) && (this.affect)){
  //     if ((this.affect) && (this.affect < .5)){
  //       this.log_responses();
  //       exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
  //       // _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
  //     } else {
  //       $('.err').show();
  //     }
  //   },


  //   // this initializes the slider
  //   init_sliders : function() {
  //     utils.make_slider("#affect_slider_ex_three", function(event, ui) {
  //       exp.affectPost = ui.value;
  //     });
  //     // utils.make_slider("#felicity_slider_ex_two", function(event,ui) {
  //     //   exp.felicityPost = ui.value;
  //     // });
  //   },


  //   log_responses: function() {
  //     // add response to exp.data_trials
  //     // this data will be submitted at the end of the experiment
  //     exp.data_trials.push({
  //       "slide_number_in_experiment": exp.phase,
  //       "id": "example3",
  //       "response": this.radio,
  //       "strangeSentence": "",
  //       "sentence": "",
  //       // "felicity_rating": this.felicity,
  //       "affect_rating": this.affect,
  //     });
  //   },
  // });

  slides.trial = slide({
    name: "trial",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present: exp.stimuli,
    present_handle : function(stim) {

      this.init_sliders();
      exp.affectPost = null;
      exp.felicityPost = null;

      // unselect all radio buttons at the beginning of each trial
      // (by default, the selection of the radio persists across trials)
      $("input[name='number']:checked").prop("checked", false);
      $("#check-strange").prop("checked", false);

      // store stimulus data
      this.stim = stim;
      var speaker_name = this.stim.SpeakName;
      var referent_name = this.stim.RefName


      // extract original and sentence with "but not all"
      var original_sentence = stim.EntireSentence;
      var target_sentence = stim.ButNotAllSentence;

      //handle display of context
      // if (exp.condition == "context") {
      //   // extract context data
        var contexthtml = stim.Context;
      //   // reformat the speaker information for context
      //   contexthtml = contexthtml.replace(/Speaker A:/g, "<b>Speaker #1:</b>");
      //   contexthtml = contexthtml.replace(/Speaker B:/g, "<b>Speaker #2:</b>");
      //   $(".case").html(contexthtml);
      // } else {
      //   var contexthtml = "";
        $(".case").html(contexthtml);
      // }

      // replace the placeholder in the HTML document with the relevant sentences for this trial
      $("#trial-originalSen").html(original_sentence);
      $("#trial-targetSen").html(target_sentence);
      $("#speaker_name").html(speaker_name);
      $("#referent_name").html(referent_name);
      $("#speaker_name_two").html(speaker_name);
      $(".err").hide();

    },

    // handle click on "Continue" button
    button: function() {
      this.radio = $("input[name='number']:checked").val();
      this.strange = $("#check-strange:checked").val() === undefined ? 0 : 1;
      this.felicity = exp.felicityPost;
      this.affect = exp.affectPost;
      if ((this.felicity != null) && (this.affect != null)){
        this.log_responses();
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
      } else {
        $('.err').show();
      }
    },

    init_sliders : function() {
      utils.make_slider("#affect_slider", function(event, ui) {
        exp.affectPost = ui.value;
      });
      utils.make_slider("#felicity_slider", function(event,ui) {
        exp.felicityPost = ui.value;
      });
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({
        "item": this.stim.Item,
        "sentence": this.stim.ButNotAllSentence,
        "slide_number_in_experiment": exp.phase, //exp.phase is a built-in trial number tracker
        "felicity_rating": this.felicity,
        "affect_rating" : this.affect,
        "condition" : this.stim.Condition,
        "item_type" : this.stim.ItemType,
        "definite_article": this.stim.DefiniteArticle,
        "referent_name": this.stim.RefName,
        "referent_gender": this.stim.RefGen,
        "speaker_name": this.stim.SpeakName,
        "speaker_gender": this.stim.SpeakGen,
      });
    },
  });

  // slide to collect subject information
  slides.subj_info = slide({
    name: "subj_info",
    submit: function(e) {
      exp.subj_data = {
        language: $("#language").val(),
        enjoyment: $("#enjoyment").val(),
        asses: $('input[name="assess"]:checked').val(),
        age: $("#age").val(),
        gender: $("#gender").val(),
        education: $("#education").val(),
        places_lived: $("#places_lived").val(),
        reported_usage: $("#reported_usage").val(),
        reported_familiarity: $("#reported_familiarity").val(),
        language_attitude: $("#language_attitude").val(),
        fairprice: $("#fairprice").val(),
        comments: $("#comments").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  //
  slides.thanks = slide({
    name: "thanks",
    start: function() {
      exp.data = {
        "trials": exp.data_trials,
        "catch_trials": exp.catch_trials,
        "system": exp.system,
        "condition": exp.condition,
        "subject_information": exp.subj_data,
        "time_in_minutes": (Date.now() - exp.startT) / 60000
      };
      proliferate.submit(exp.data);
    }
  });

  return slides;
}

/// initialize experiment
function init() {

  exp.trials = [];
  exp.catch_trials = [];
  var stimuli = all_stims;

  exp.stimuli = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;

  console.log(exp.stimuli)
  exp.n_trials = exp.stimuli.length;

  // exp.condition = _.sample(["context", "no-context"]); //can randomize between subjects conditions here

  exp.system = {
    Browser: BrowserDetect.browser,
    OS: BrowserDetect.OS,
    screenH: screen.height,
    screenUH: exp.height,
    screenW: screen.width,
    screenUW: exp.width
  };

  //blocks of the experiment:
  exp.structure = [
    "i0",
    "example1",
    "example2",
    "example3",
    "startExp",
    "trial",
    "subj_info",
    "thanks"
  ];

  exp.data_trials = [];

  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length();
  //this does not work if there are stacks of stims (but does work for an experiment with this structure)
  //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  $("#start_button").click(function() {
    exp.go();
  });

  exp.go(); //show first slide
}
console.log("hello");
