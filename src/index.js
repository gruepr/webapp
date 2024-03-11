import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*const express = require("express");

const {google} = require("googleapis");

const app = express();

app.get("/", async (req,res) => {
  const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes:" https://www.googleapis.com/auth/forms.body",
    });

    const client = await auth.getClient();

    const googleForms = google.forms({ version: "v1", auth: client });
    const formID = "1Ck6-EdoL8Gnw_vxZnc3hFw5glD4OUPtfI4CIyBFERqA"
    const metaData = await googleForms.forms.get({
      auth,
      formID,
    });

    await googleForms.forms.values.append({
      auth,
      formID,
      "requests": [
        {
          "createItem": {
            "item": {
              "questionItem": {
                "question": {
                  "textQuestion": {
                    "paragraph": false
                  },
                  "choiceQuestion": {
                    "options": [
                      {
                        "value": "A",
                        "value": "B"
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      ]
    })

    res.send(metaData.data);
  });
  */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
