import React from "react";

export const Register = () => {
  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Register</h1>
      </header>

      <div className="content__posts">
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input type="text" name="surname" placeholder="Surname" />
          </div>

          <div className="form-group">
            <label htmlFor="nick">Nick</label>
            <input type="text" name="nick" placeholder="Nick" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>

          <input type="submit" value="Register" className="btn btn-success" />
        </form>
      </div>
    </>
  );
};
