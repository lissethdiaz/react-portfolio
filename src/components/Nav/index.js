import React from 'react';

function Nav() {

  return (
    <div>
      <div>
        <a href="/">Lisseth</a>
      </div>
      <nav>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a href="#about">
              About Me
            </a>
          </li>
          <li className='mx-2'>
            Projects
          </li>
          <li className='mx-2'>
            Contact
          </li>
          <li className='mx-2'>
            Resume
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;