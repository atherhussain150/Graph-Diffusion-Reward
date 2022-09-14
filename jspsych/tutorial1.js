var TrialNo1 = {
    type: "html-button-response",
    stimulus: function () {
      
    },

    choices: [
      `<img name ="a" src="${
        trialGraph[demo[0][1]]
      }" style="height:100px;width:100px">`,
      `<img  name="b" src="${
        trialGraph[demo[0][2]]
      }" style="height:100px;width:100px">`,
      `<img name ="c" src="${
        trialGraph[demo[0][3]]
      }" style="height:100px;width:100px">`,
      // a,
      // b,
      // c,
    ],
    data: {
      
      start_demo: demo[0],
      correct_resp: [`<img src="${trialGraph[demo[demo[1]]]}">`, `<img src="${trialGraph[demo[demo[2]]]}">`, `<img src="${trialGraph[demo[demo[3]]]}">`],
      corr_r: demo[demo[4]],
      RewardSelected: 0,
      edge: demo[0] + "-" + demo[demo[4]],
      choicesA: [demo[1], demo[2], demo[3]],
      choices: [
        `<img src="${trialGraph[demo[0][1]]}">`,
        `<img src="${trialGraph[demo[0][2]]}">`,
        `<img src="${trialGraph[demo[0][3]]}">`,
      ],
      render_on_canvas: true,
    },

    prompt: `<p>Choose the correct Connecting Sign for the Sign (below), from 3 signs above</p>`,
    trial_duration: 15000,
   
    on_finish: function (data)
    {
        function tempAlert(msg, duration) {
            var el = document.createElement("div");
            el.setAttribute(
              "style",
              "position:absolute;top:45%;left:46%;background-color:grey; color: green; font-size:40px"
            );
            el.innerHTML = msg;
            setTimeout(function () {
              el.parentdemo.removeChild(el);
            }, duration);
            document.body.appendChild(el);
          }

          //var msg = "Incorrect, Correct Image was "  + "\n" + `<img src="${Graph[demo[5]]}" style="position:absolute;bottom:-270%;left:110%;text-align: right;  border: 2px solid #D3D3D3; border-radius: 5px; border-color:red; height:200;width:200px">`;
          var msg = "Correct";
          tempAlert(msg, 3000);
    }
  };

  var TrialNo2 = {
    type: "html-button-response",
    stimulus: function () {
      
    },

    choices: [
      `<img name ="a" src="${
        trialGraph[demo[1][1]]
      }" style="height:100px;width:100px">`,
      `<img  name="b" src="${
        trialGraph[demo[1][2]]
      }" style="height:100px;width:100px">`,
      `<img name ="c" src="${
        trialGraph[demo[1][3]]
      }" style="height:100px;width:100px">`,
      // a,
      // b,
      // c,
    ],
    data: {
      
      start_demo: demo[0],
      correct_resp: [`<img src="${trialGraph[demo[demo[1]]]}">`, `<img src="${trialGraph[demo[demo[2]]]}">`, `<img src="${trialGraph[demo[demo[3]]]}">`],
      corr_r: demo[demo[4]],
      RewardSelected: 0,
      edge: demo[0] + "-" + demo[demo[4]],
      choicesA: [demo[1], demo[2], demo[3]],
      choices: [
        `<img src="${trialGraph[demo[1][1]]}">`,
        `<img src="${trialGraph[demo[1][2]]}">`,
        `<img src="${trialGraph[demo[1][3]]}">`,
      ],
      render_on_canvas: true,
    },

    prompt: `<p>Choose the correct Connecting Sign for the Sign (below), from 3 signs above</p>`,
    trial_duration: 15000,
   
    on_finish: function (data)
    {
        function tempAlert(msg, duration) {
            var el = document.createElement("div");
            el.setAttribute(
              "style",
              "position:absolute;top:45%;left:46%;background-color:grey; color: green; font-size:40px"
            );
            el.innerHTML = msg;
            setTimeout(function () {
              el.parentdemo.removeChild(el);
            }, duration);
            document.body.appendChild(el);
          }

          //var msg = "Incorrect, Correct Image was "  + "\n" + `<img src="${Graph[demo[5]]}" style="position:absolute;bottom:-270%;left:110%;text-align: right;  border: 2px solid #D3D3D3; border-radius: 5px; border-color:red; height:200;width:200px">`;
          var msg = "Wrong";
          tempAlert(msg, 3000);
    }
  };

  var TrialNo3 = {
    type: "html-button-response",
    stimulus: function () {
      
    },

    choices: [
      `<img name ="a" src="${
        trialGraph[demo[2][1]]
      }" style="height:100px;width:100px">`,
      `<img  name="b" src="${
        trialGraph[demo[2][2]]
      }" style="height:100px;width:100px">`,
      `<img name ="c" src="${
        trialGraph[demo[2][3]]
      }" style="height:100px;width:100px">`,
      // a,
      // b,
      // c,
    ],
    data: {
      
      start_demo: demo[0],
      correct_resp: [`<img src="${trialGraph[demo[demo[1]]]}">`, `<img src="${trialGraph[demo[demo[2]]]}">`, `<img src="${trialGraph[demo[demo[3]]]}">`],
      corr_r: demo[demo[4]],
      RewardSelected: 0,
      edge: demo[0] + "-" + demo[demo[4]],
      choicesA: [demo[1], demo[2], demo[3]],
      choices: [
        `<img src="${trialGraph[demo[2][1]]}">`,
        `<img src="${trialGraph[demo[2][2]]}">`,
        `<img src="${trialGraph[demo[2][3]]}">`,
      ],
      render_on_canvas: true,
    },

    prompt: `<p>Choose the correct Connecting Sign for the Sign (below), from 3 signs above</p>`,
    trial_duration: 15000,
   
    on_finish: function (data)
    {
        function tempAlert(msg, duration) {
            var el = document.createElement("A");
            el.setAttribute(
              "style",
              "position:absolute;top:30%;left:40%;background-color:grey; color: gold; font-size:40px"
            );
            el.innerHTML = msg;
            setTimeout(function () {
              el.parentdemo.removeChild(el);
            }, duration);
            document.body.appendChild(el);
          }

          var msg =
            `<img style="margin: auto; height:250px;width:250px;" src="https://i.gifer.com/origin/ce/cef2ce655eb9740cb8d7c126cf0d5992_w200.gif" alt="this slowpoke moves"  width="250" />` +
            `<p style="margin: 25px 10px 10px -85px";">You found the reward!</p>`;
          tempAlert(msg, 3000);
    }
  };