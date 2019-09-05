import React from 'react';

import SignUp from 'src/components/Page/Home/SignUp';
import Login from 'src/components/Page/Home/Login';
import Contact from 'src/components/Page/Contact';

import './page.scss';

const view = 'contact';

const Page = () => {
  return (
    <div className="page">
      {view === 'signup' && <SignUp />}
      {view === 'login' && <Login />}
      {view === 'contact' && <Contact />}

    </div>

  );
};


export default Page;
