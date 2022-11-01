import React from "react";

export default function AppFooter() {
  return (
    <>
      <footer className="footer text-center text-muted mb-3">
        Copyright &copy; {new Date().getFullYear()} Ryan Hannosh. All rights Reserved.
        <br />
      </footer>
    </>
  );
}
