import "./BioCard.css";

function BioCard() {
  return (
    <div className="BioCard text-white text-start mx-auto">
      <div id="BioCard-title" className="BioCard-Title">
        About Me
      </div>
      <div className="BioCard-facts">
        <p className="BioCard-bio">
          I am a highly motivated engineer dedicated to delivering an
          exceptional user experience. I have a passion for unconventional
          approaches, well-defined processes, and learning something new every
          day. I firmly believe that curiosity, exploration, and personal
          development are the key differentiators between good developers and
          exceptional ones.
        </p>
        <p>
          I don't subscribe to all the credo's of software development, but
          there are some lessons I've learned thus far that I keep close to
          heart:
        </p>
        <ul className="BioCard-ops">
          <li>
            Figure out the hard stuff well before a single line of code has been
            written.
          </li>
          <li>
            Software is a team sport. Focus should be on rising the tide for
            everyone, not pinpointing and leaning into your star players.
          </li>
          <li>Test it. Then automate the test. Then test the tests!</li>
          <li>
            Time Estimates are almost always wrong, but being able to give a
            client a reasonable and responsible timeline is critical.
          </li>
          <li>
            Code reviews can be a fantastically useful tool for learning for
            both the code reviewer and reviewee.
          </li>
          <li>
            Prioritize user experience and consistently strive to create
            intuitive and user-friendly solutions.
          </li>
          <li>
            I value collaboration and actively seek opportunities to work on new
            projects and with new technologies with fantastic colleagues.
          </li>
          <li>
            Bugs are all about mindset - after all, the problem solving is why
            many of us got into this industry!
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BioCard;
