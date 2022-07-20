import React from "react";

function ErrorPage() {
  return (
    <div>
      <div className="component" style={{ height: 500 }}>
        <h1 style={{ marginLeft: 500, marginTop: 300, fontSize: 50 }}>
          This page not found.
        </h1>
      </div>
    </div>
  );
}
// Herhangi yanlış tuşlama yapıldığında router tarafından direkt bu sayfaya yönlendirme gerçekleştirilecektir.

export default ErrorPage;
