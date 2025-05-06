import React from "react";
import {AiFillInstagram,AiFillYoutube,AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Station</h2>
        <p>we are trying to serve the best taste possible</p>
        <br />
        <em>we give attention to genune feeback</em>
        <strong>All rignts reserved @burgre station</strong>
      </div>

      <aside>
        <h2>Follow us</h2>
        <a href=""><AiFillYoutube/></a>
        <a href=""><AiFillInstagram/></a>
        <a href=""><AiFillGithub/></a>
      </aside>
    </footer>
  );
};

export default Footer;
