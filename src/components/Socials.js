import "../css/Socials.css";
const Socials = () => {
  return (
    <div id="Socials">
      <h3 className="col-head">Connect with me on</h3>
      <ul id="profiles">
        <li>
          <a href="https://github.com/neelansh27">
            Github<span class="material-symbols-outlined">open_in_new</span>
          </a>
        </li>
        <li>
          <a href="https://x.com/neelansh_27">
            Twitter/X<span class="material-symbols-outlined">open_in_new</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/neelansh-sharma-71742b258/">
            LinkedIn<span class="material-symbols-outlined">open_in_new</span>
          </a>
        </li>
        <li>
          <a href="mailto:02017711922_ds@vips.edu">
            Email<span class="material-symbols-outlined">open_in_new</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
