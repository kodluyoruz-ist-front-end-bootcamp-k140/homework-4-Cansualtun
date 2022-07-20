import React from "react";

function Contact() {
  return (
    <div className="container-sm" style={{ marginTop: 60, padding: 20 }}>
      <div className="mb-4">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Your Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button
          onClick={
            "location.href='/src/Components/Home.js'"
          } /*Üzerine Çalışılacak */
          type="button"
          className="btn btn-warning"
          style={{ marginLeft: 600, marginTop: 40 }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
