import React from "react";
import { FaPaperPlane } from "react-icons/fa";

// CREDIT FOR THE FUNCTIONALITY OF THIS MODULE --> https://www.youtube.com/watch?v=GMXFMVg5E4U
export default function Email() {
  return (
    <div className="email-container">
      <h2 className="content-head">Drop me a line!</h2>

      <form
        className="gform pure-form pure-form-stacked"
        method="POST"
        data-email="example@email.net"
        action="https://script.google.com/macros/s/AKfycbx4S4nbJImqhW3oMcN1hKLmcq5JOVLvqWt_BHM6hqwm9aAklqPu/exec"
      >
        <div className="form-elements">
          <fieldset className="pure-group">
            <input
              id="name"
              className="form-input"
              name="name"
              placeholder="Your Name"
            />
          </fieldset>

          <fieldset className="pure-group">
            <textarea
              className="form-input"
              id="message"
              name="message"
              rows="8"
              placeholder="Your Message"
            ></textarea>
          </fieldset>

          <fieldset className="pure-group">
            <input
              id="email"
              className="form-input"
              name="email"
              type="email"
              //   value=""
              required
              placeholder="your.name@email.com"
            />
            <span className="email-invalid" style={{ display: "none" }}>
              Must be a valid email address
            </span>
          </fieldset>

          <button className="submit-btn">
            <FaPaperPlane id="plane" />
            Send
          </button>
        </div>

        <div className="thankyou_message" style={{ display: "none" }}>
          <h2>
            <em>Thanks</em> for the email! I'll get back to you soon!
          </h2>
        </div>
      </form>

      {/* <script
        data-cfasync="false"
        type="text/javascript"
        src="form-submission-handler.js"
      ></script> */}
    </div>
  );
}

(function () {
  function validEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  function validateHuman(honeypot) {
    if (honeypot) {
      //if hidden form filled up
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
    }
  }

  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;

    var fields = Object.keys(elements)
      .filter(function (k) {
        return elements[k].name !== "honeypot";
      })
      .map(function (k) {
        if (elements[k].name !== undefined) {
          return elements[k].name;
          // special case for Edge's html collection
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        }
      })
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
      });

    var formData = {};
    fields.forEach(function (name) {
      var element = elements[name];

      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(", ");
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    console.log(formData);
    return formData;
  }

  function handleFormSubmit(event) {
    // handles form submit without any jquery
    event.preventDefault(); // we are submitting via xhr below
    var form = event.target;
    var data = getFormData(form); // get the values submitted in the form

    /* OPTION: Remove this comment to enable SPAM prevention, see README.md
      if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
        return false;
      }
      */

    if (data.email && !validEmail(data.email)) {
      // if email is not valid show error
      var invalidEmail = form.querySelector(".email-invalid");
      if (invalidEmail) {
        invalidEmail.style.display = "block";
        return false;
      }
    } else {
      disableAllButtons(form);
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        console.log(xhr.status, xhr.statusText);
        console.log(xhr.responseText);
        var formElements = form.querySelector(".form-elements");
        if (formElements) {
          formElements.style.display = "none"; // hide form
        }
        var thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) {
          thankYouMessage.style.display = "block";
        }
        return;
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data)
        .map(function (k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        })
        .join("&");
      xhr.send(encoded);
    }
  }

  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  }
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
