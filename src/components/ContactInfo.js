import { Icon } from "@material-ui/core";

export const ContactInfo = () => {
    return (
      <div id="Contact_Info">
        <h4>Let's work together</h4>
        <p>I'm open to small projects and long term work</p>
        <ul>
          <li>
            <a href="https://www.upwork.com/freelancers/~0110cdc26c10b7e236" rel="noreferrer" target="_blank">
              <div id="icon"><i class="fab fa-facebook-square"></i>
                Upwork</div>
            </a>
          </li>
          <li>
            <a href="https://github.com/JasonR27" rel="noreferrer" target="_blank" id="profile-link">
              <div id="icon"><i class="fab fa-github"></i>GitHub</div>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jeison-roblero-campos/" rel="noreferrer" target="_blank">
              <div id="icon"><i class="fab fa-free-code-camp"></i>freeCodeCamp.org</div>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jeison-roblero-campos/" rel="noreferrer" target="_blank">
              <div id="icon"><i class="fab fa-linkedin"></i>LinkedIn</div>
            </a>
          </li>
          <li>
            <a href="www.gmail.com" rel="noreferrer" target="_blank">
              <div id="icon"><i class="fas fa-at"></i>Send an email</div>
            </a>
          </li>
          <li>
            <a href="google.com" rel="noreferrer" target="_blank">
              <div id="icon"><i class="fas fa-mobile-alt"></i>Call me</div>
            </a>
          </li>
        </ul>
      </div>
    )
  }

  export default ContactInfo;